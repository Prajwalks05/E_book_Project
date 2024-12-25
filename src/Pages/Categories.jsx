import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper CSS
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);
import { Helmet } from "react-helmet";

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
      // Open the PDF in a new tab with hidden toolbar, print disabled, and allow interactions
      window.open(`${url}#toolbar=0&print=false&scrollbar=0&zoo=0&view=fitV`, "_blank");
    } else {
      alert("Book URL is not available!");
    }
  };

  if (loading) {
    return <p>Loading books...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="categories">
      <div></div>
      {Object.keys(groupedBooks).length === 0 ? (
        <p>No books available.</p>
      ) : (
        Object.entries(groupedBooks).map(([tag, books]) => (
          <div key={tag} className="p-5 section">
            <h2 className="bold text-capitalize text-primary">{tag}</h2>
            <div></div>
            <Helmet>
              <style>
                {`
            * {
              font-size: 14px;
            }
          `}
              </style>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              />
            </Helmet>
            <Swiper
              spaceBetween={10}
              slidesPerView={1} // Adjust to 1 for mobile view
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2, // Tablet view
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3, // Desktop view
                  spaceBetween: 30,
                },
              }}
            >
              {books.map((book) => (
                <SwiperSlide key={book.book_id}>
                  <div
                    className="card h-100"
                    onClick={() => openBookInNewTab(book.url)}
                    style={{ width: "25rem" }} // Call the function on click
                  >
                    {/* Book Image */}
                    <img
                      src={book.img_url}
                      style={{ height: "350px", objectFit: "cover" }}
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
