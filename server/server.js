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

// Supabase credentials
const supabaseUrl = 'https://kciobuxvkbtkkrhacbet.supabase.co';
const supabaseKey = 'your_supabase_key_here'; // Replace with a secure way to store API keys
const supabase = createClient(supabaseUrl, supabaseKey);

// API endpoint to get e-books
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
    console.error('Error fetching e-books:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching e-books' });
  }
});

// API endpoint to search e-books
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
