"use client";

import React, { useState, useMemo, useEffect } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  readTime: string;
  date: string;
}

interface SearchableBlogListProps {
  posts: Post[]; // List of blog posts passed from the server
}

const SearchableBlogList: React.FC<SearchableBlogListProps> = ({ posts }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get page from URL params or default to 1
  const pageParam = searchParams.get('page');
  const initialPage = pageParam ? parseInt(pageParam) : 1;
  
  // Get search query from URL params or default to empty string
  const queryParam = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [focused, setFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const postsPerPage = 12;

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [posts]);

  // Memoize filtered posts
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedPosts, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get the posts for the current page
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Update URL when page or search changes
  useEffect(() => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams();
    
    // Add current parameters
    if (currentPage > 1) {
      params.set('page', currentPage.toString());
    }
    
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    
    // Build the new URL with updated params
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    
    // Update URL without reload
    window.history.replaceState({ path: newUrl }, '', newUrl);
    
    // Dispatch a custom event to trigger canonical URL update
    const event = new CustomEvent('urlchange', { detail: { page: currentPage } });
    window.dispatchEvent(event);
  }, [currentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 when search changes
  };

  const maxPageButtons = 5;
  const startButton = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endButton = Math.min(totalPages, startButton + maxPageButtons - 1);
  const pageButtons = Array.from(
    { length: endButton - startButton + 1 },
    (_, i) => startButton + i
  );

  return (
    <>
      {/* Search Bar */}
      <div
        className="container d-flex justify-content-center mb-4"
        style={{ maxWidth: "600px" }}
      >
        <TextField
          label="Search anything about drivers"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch style={{ color: "#2c2e35" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: "6px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "6px", // Apply border-radius
              fieldset: {
                borderColor: "#2c2e35", // Default border color
                borderWidth: "2px", // Default border width
              },
              "&:hover fieldset": {
                borderColor: "#2c2e35", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#2c2e35", // Focused border color
                borderWidth: "2px", // Focused border width
              },
            },
            "& .MuiInputLabel-root": {
              color: "#2c2e35", // Label color
              "&.Mui-focused": {
                color: "#2c2e35", // Label color on focus
              },
            },
          }}
        />
      </div>

      {/* Blog Cards */}
      <div className="container">
        <div className="row">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <Link href={`/${post.slug}`} className="blog-card-new d-block h-100">
                  <div
                    className="card shadow-none overflow-hidden h-100"
                    style={{ borderRadius: "24px", border: "1px solid" }}
                  >
                    <img
                      src={post.image}
                      className="card-img-top p-3"
                      alt={post.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "30px",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h2 className="card-title m-0 mb-2">{post.title}</h2>
                      <p
                        className="card-text text-muted mb-3"
                        style={{ fontSize: "14px" }}
                      >
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto w-100 d-flex justify-content-between align-items-end">
                        <p
                          className="text-decoration-underline mb-0"
                          style={{ color: "#2c2e35", fontSize: "13px" }}
                        >
                          Read More
                        </p>
                        <div
                          className="text-end"
                          style={{ fontSize: "12px" }}
                        >
                          {post.date} <br />{" "}
                          <span
                            className="bg-warning p-1 px-2 rounded-pill d-inline-block mt-1"
                            style={{ lineHeight: "normal", border: "1px solid" }}
                          >
                            {post.readTime} read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No posts found</p>
          )}
        </div>

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className="blog-pagination d-flex justify-content-center mt-4">
            {pageButtons.map((page) => (
              <Button
                key={page}
                aria-label={`Go to page ${page}`}
                variant={currentPage === page ? "contained" : "outlined"}
                onClick={() => handlePageChange(page)}
                sx={{
                  mx: 0.5,
                  bgcolor: currentPage === page ? "#2c2e35" : "inherit",
                  color: currentPage === page ? "#fff" : "#2c2e35",
                }}
              >
                {page}
              </Button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchableBlogList;