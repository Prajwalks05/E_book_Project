import React, { useState } from "react";
// import "./Search.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Helmet } from "react-helmet";
const Search = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [results, setResults] = useState([]); // Add state to store search results

  const handleSearch = async () => {
    console.log("Search initiated with:", { query, filter });

    try {
      const response = await fetch(
        `http://localhost:3000/api/search?query=${encodeURIComponent(query)}&filter=${filter}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data); // Update results state with fetched data
      console.log("Search results:", data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const openBookInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank"); // Open the book PDF in a new tab
    } else {
      alert("Book URL is not available!");
    }
  };

  return (

    <div className="search-page-container">
      <div><Helmet>
        <style>
          {`
            * {
              font-size: 20px;
            }
          `}
        </style>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        />
      </Helmet></div>
      <div className="card row">
        <div className=" row justify-content-center mt-5 p-5">
          <div className="col-md-4">
            <input
              type="text"
              style={{ width: '500px', height: '50px' }}
              className="form-control lg"
              placeholder="Enter Book Name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-md-5 ml-5">
            <select style={{ width: '500px', height: '50px' }}

              className="form-control"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Title</option>
              <option value="author">Author</option>
              <option value="year">Year</option>
            </select>
          </div>
          <button
            className=" col-md-2 btn btn-outline-success rounded-pill"
            id="search-button"
            onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="search-results mt-4">
          <h5>Search Results:</h5>
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <Swiper
              spaceBetween={10}
              slidesPerView={3} // Number of cards to show at once
              loop={true} // Enable looping of slides
              navigation={true} // Enable navigation buttons
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Mobile view
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2, // Tablet view
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3, // Desktop view
                  spaceBetween: 30,
                },
              }}
            >
              {results.map((result, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="card"
                    onClick={() => openBookInNewTab(result.url)} // Open the PDF in a new tab
                  >
                    <img
                      src={result.img_url} style={{ width: '75%', height: '350' }}
                      // Assuming img_url contains the book image
                      alt={result.book_title}
                    />
                    <h6>{result.book_title}</h6>
                    <p>
                      <strong>Author:</strong> {result.author}
                    </p>
                    <p>
                      {result.description
                        ? result.description
                        : "No description available"}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
