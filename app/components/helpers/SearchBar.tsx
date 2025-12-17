"use client";
import React, { useState, useEffect } from "react";

interface Package {
  id: string;
  name: string;
  desc: string;
  location?: string;
  price?: number;
  offerPrice?: number;
}

interface SearchBarProps {
  onSelect: (pkg: Package) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSelect,
  placeholder = "Search packages...",
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Package[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/search?q=${query}`);
        if (!res.ok) throw new Error("Search failed");

        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (pkg: Package) => {
    onSelect(pkg);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <div className="search-container" style={{ position: "relative" }}>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        />

        <span className="search-icon">🔍</span>

        {loading && <div className="search-loading">Searching...</div>}

        {showDropdown && results.length > 0 && (
          <ul className="search-results">
            {results.map((pkg) => (
              <li key={pkg.id} onClick={() => handleSelect(pkg)}>
                {pkg.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
