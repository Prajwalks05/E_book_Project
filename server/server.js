const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
};
app.use(cors());

// Serve static PDF files
app.use('/public', express.static(path.join(__dirname, 'pdfs')));

// Your Supabase project URL and API key
const supabaseUrl = 'https://zykyyuyznvxwbabrxotz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5a3l5dXl6bnZ4d2JhYnJ4b3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NjM2NzYsImV4cCI6MjA0NTQzOTY3Nn0.qQx0cpGuKuE0t6wzdS1Az_30GOcrcSWc_LEUvdsfmQs';

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
