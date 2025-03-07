const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000; // Fixed port for local testing

// Configure CORS
app.use(cors({ origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] }));

// Serve static PDF files
app.use('/public', express.static(path.join(__dirname, 'pdfs')));

// Supabase configuration (Direct Credentials - Not Recommended for Production)
const supabaseUrl = 'https://kciobuxvkbtkkrhacbet.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaW9idXh2a2J0a2tyaGFjYmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NTg4NTksImV4cCI6MjA0NjUzNDg1OX0.ymG_jwCcHWTGIR1K0Rz75vOWz9KUmrKwf3Rj9y4pJk4'; // Directly inserting key (Not Safe)
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to log visitor IP address
app.use(async (req, res, next) => {
  try {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    ip = ip.split(',')[0].trim();

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

// Route to log IP when visiting /home
app.get('/home', async (req, res) => {
  res.json({ message: 'Welcome to the Home Page! Your IP has been logged.' });
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
