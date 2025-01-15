const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000; // Use the correct port for Vercel or fallback to 3000


// Configure CORS to allow the frontend to make requests
const corsOptions = {
  origin: 'https://e-book-frontend-kappa.vercel.app', // Replace with the correct frontend URL
  methods: ['GET', 'POST'], // Allow specific HTTP methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers as required
};

app.use(cors(corsOptions)); // Enable CORS with the configured options


// Serve static PDF files
app.use('/public', express.static(path.join(__dirname, 'pdfs')));

// Your Supabase project URL and API key
const supabaseUrl = 'https://kciobuxvkbtkkrhacbet.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaW9idXh2a2J0a2tyaGFjYmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NTg4NTksImV4cCI6MjA0NjUzNDg1OX0.ymG_jwCcHWTGIR1K0Rz75vOWz9KUmrKwf3Rj9y4pJk4';

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Function to fetch e-books from the 'e_book' table.
 */
async function fetchEBooks() {
  try {
    const { data, error } = await supabase
      .from('e_book')
      .select('*');

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in fetchEBooks:', error.message);
    throw error;
  }
}

// API endpoint to get e-books
app.get('/api/ebooks', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('e_book')
      .select('*');

    if (error) {
      throw error;
    }

    // Group books by tag
    const groupedBooks = data.reduce((acc, book) => {
      const tag = book.tag || 'Uncategorized'; // Default to 'Uncategorized' if no tag
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(book);
      return acc;
    }, {});

    res.json(groupedBooks); // Send grouped books
  } catch (error) {
    console.error('Error in fetchEBooks:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching e-books' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// API endpoint to search e-books
app.get('/api/search', async (req, res) => {
  try {
    const { query, filter } = req.query; // Get query and filter from request

    // Base query
    let searchQuery = supabase.from('e_book').select('*');

    // Apply filtering based on the filter type
    if (filter === 'title') {
      searchQuery = searchQuery.ilike('book_title', `%${query}%`); // Case-insensitive title search
    } else if (filter === 'author') {
      searchQuery = searchQuery.ilike('author', `%${query}%`); // Case-insensitive author search
    } else if (filter === 'year') {
      searchQuery = searchQuery.eq('year', query); // Exact match for year
    } else {
      // Default: Search across all relevant fields (title and author)
      searchQuery = searchQuery.or(`book_title.ilike.%${query}%,author.ilike.%${query}%`);
    }

    const { data, error } = await searchQuery;

    if (error) {
      throw error;
    }

    res.json(data || []); // Send the search results
  } catch (error) {
    console.error('Error in search API:', error.message);
    res.status(500).json({ error: 'An error occurred while searching for e-books' });
  }
});
