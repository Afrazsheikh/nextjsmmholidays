"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Package {
  id: string;
  name: string;
  offerPrice?: number;
}

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search packages..." }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Package[]>([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (pkg: Package) => {
    setQuery("");
    setShow(false);
    router.push(`/packages/${pkg.id}`);
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <TextField
        fullWidth
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        InputProps={{
          endAdornment: loading ? <CircularProgress size={20} /> : null,
        }}
      />

      {show && results.length > 0 && (
        <Paper
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            maxHeight: "250px",
            overflowY: "auto",
            marginTop: 4,
          }}
        >
          <List dense>
            {results.map((pkg) => (
              <ListItem key={pkg.id} disablePadding>
                <ListItemButton onMouseDown={() => handleSelect(pkg)}>
                  <ListItemText
                    primary={pkg.name}
                    secondary={pkg.offerPrice ? `₹${pkg.offerPrice}` : ""}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
