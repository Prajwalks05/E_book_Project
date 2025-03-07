const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Serve static PDF files
app.use('/public', express.static(path.join(__dirname, 'pdfs')));

// Supabase configuration
const supabaseUrl = 'https://kciobuxvkbtkkrhacbet.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_SECRET_KEY'; // Replace with a secure env variable
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to get client IP address
app.use(async (req, res, next) => {
  try {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // Get IP address
    ip = ip.split(',')[0].trim(); // Handle multiple forwarded IPs

    // Insert into Supabase
    const { error } = await supabase.from('visitor_logs').insert([{ ip_address: ip }]);

    if (error) {
      console.error('Error inserting IP:', error.message);
    } else {
      console.log(`Visitor IP logged: ${ip}`);
    }
  } catch (error) {
    console.error('Middleware error:', error.message);
  }
  next();
});


// Fetch e-books API
app.get('/api/ebooks', async (req, res) => {
  try {
    const { data, error } = await supabase.from('e_book').select('*');

    if (error) throw error;

    // Group books by tag
    const groupedBooks = data.reduce((acc, book) => {
      const tag = book.tag || 'Uncategorized';
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(book);
      return acc;
    }, {});

    res.json(groupedBooks);
  } catch (error) {
    console.error('Error in fetchEBooks:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching e-books' });
  }
});

// Search e-books API
app.get('/api/search', async (req, res) => {
  try {
    const { query, filter } = req.query;
    let searchQuery = supabase.from('e_book').select('*');

    if (filter === 'title') {
      searchQuery = searchQuery.ilike('book_title', `%${query}%`);
    } else if (filter === 'author') {
      searchQuery = searchQuery.ilike('author', `%${query}%`);
    } else if (filter === 'year') {
      searchQuery = searchQuery.eq('year', query);
    } else {
      searchQuery = searchQuery.or(`book_title.ilike.%${query}%,author.ilike.%${query}%`);
    }

    const { data, error } = await searchQuery;

    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    console.error('Error in search API:', error.message);
    res.status(500).json({ error: 'An error occurred while searching for e-books' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
