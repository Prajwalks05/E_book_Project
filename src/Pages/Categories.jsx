import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper CSS
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

import "./Categories.css";

const Categories = () => {
  const [groupedBooks, setGroupedBooks] = useState({}); // Store books grouped by tags
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/ebooks"); // Fetch grouped books
        const grouped = await response.json();
        setGroupedBooks(grouped);
      } catch (error) {
        console.error("Error fetching grouped books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const openBookInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank"); // Open the PDF in a new tab
    } else {
      alert("Book URL is not available!");
    }
  };

  if (loading) {
    return <p>Loading books...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="categories">
      {Object.keys(groupedBooks).length === 0 ? (
        <p>No books available.</p>
      ) : (
        Object.entries(groupedBooks).map(([tag, books]) => (
          <div key={tag} className="tag-section">
            <h2>{tag}</h2>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              navigation
              pagination={{ clickable: true }}
            >
              {books.map((book) => (
                <SwiperSlide key={book.book_id}>
                  <div
                    className="book-card"
                    onClick={() => openBookInNewTab(book.url)} // Call the function on click
                  >
                    {/* Book Image */}
                    <img
                      src={book.img_url}
                      alt={book.book_title}
                      className="book-image"
                    />
                    {/* Book Details */}
                    <h3 className="book-title">{book.book_title}</h3>
                    <p className="book-author">{book.author}</p>
                    <p className="book-description">
                      {book.description.slice(0, 100)}...
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
