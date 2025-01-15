import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import { Helmet } from "react-helmet";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [results, setResults] = useState([]); // State to store search results

  const handleSearch = async () => {
    console.log("Search initiated with:", { query, filter });

    try {
      const response = await fetch(
        `https://e-book-server-rose.vercel.app/api/search?query=${encodeURIComponent(query)}&filter=${filter}`
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
      // Open the PDF in a new tab with hidden toolbar, print disabled, and allow interactions
      window.open(`${url}#toolbar=0&print=false&scrollbar=0&zoo=0&view=fitV`, "_blank");
    } else {
      alert("Book URL is not available!");
    }
  };

  const Suggestions = () => {
    const suggestionsArray = [
      "Find the latest eBooks on technology",
      "Bestselling novels",
      "Educational resources",
      "Free eBooks collection",
      "AI and Machine Learning books",
      "Top-rated science fiction",
      "Programming guides",
      "Classic literature",
      "Romance novels",
      "History and biographies",
      "Self-help books",
      "Business and finance guides",
      "Fantasy worlds to explore",
      "Thriller and mystery books",
      "Children's books",
      "Search by your choice of Title, Author, Year",
    ];

    const [currentSuggestions, setCurrentSuggestions] = useState(
      suggestionsArray.slice(0, 5)
    );

    useEffect(() => {
      const updateSuggestions = () => {
        const randomSuggestions = [];
        while (randomSuggestions.length < 5) {
          const randomIndex = Math.floor(Math.random() * suggestionsArray.length);
          const suggestion = suggestionsArray[randomIndex];
          if (!randomSuggestions.includes(suggestion)) {
            randomSuggestions.push(suggestion);
          }
        }
        setCurrentSuggestions(randomSuggestions);
      };

      const interval = setInterval(updateSuggestions, 10000);
      return () => clearInterval(interval);
    }, [suggestionsArray]);

    return (
      <div className="col">
        <p>Suggestions:</p>
        <div className="d-flex flex-wrap gap-2">
          {currentSuggestions.map((suggestion, index) => (
            <span
              key={index}
              className="badge bg-danger text-light p-2 rounded-pill"
            >
              {suggestion}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="search-page-container">
      <Helmet>
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
      </Helmet>
      <div className="card row">
        <Suggestions />
        <div className="row justify-content-center mt-5 p-5">
          <div className="col-12 col-md-8 col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Book Details"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                  handleSearch();
                }
              }}
            />
          </div>
          <div className="col-12 col-md-3 col-lg-2 mt-3 mt-md-0">
            <select
              className="form-control"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Title</option>
              <option value="author">Author</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div className="col-12 col-md-2 mt-3 mt-md-0">
            <button
              className="btn btn-outline-success rounded-pill w-100"
              id="search-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="search-results mt-4">
          <h5>Search Results:</h5>
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : results.length === 1 ? (
            <div className="d-flex justify-content-center">
              <div
                className="card"
                style={{
                  width: "18rem",
                }}
                onClick={() => openBookInNewTab(results[0].url)}
              >
                <img
                  src={results[0].img_url}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                  alt={results[0].book_title}
                />
                <h6 className="card-title text-center mt-2">{results[0].book_title}</h6>
                <p className="card-text text-center">
                  <strong>Author:</strong> {results[0].author}
                </p>
                <p className="card-text text-center">
                  {results[0].description
                    ? results[0].description.slice(0, 100) + "..."
                    : "No description available."}
                </p>
              </div>
            </div>
          ) : (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {results.map((result, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                    }}
                    onClick={() => openBookInNewTab(result.url)}
                  >
                    <img
                      src={result.img_url}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                      alt={result.book_title}
                    />
                    <h6>{result.book_title}</h6>
                    <p>
                      <strong>Author:</strong> {result.author}
                    </p>
                    <p>
                      {result.description
                        ? result.description.slice(0, 100) + "..."
                        : "No description available."}
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
