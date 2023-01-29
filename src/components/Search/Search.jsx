import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search.js";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { SearchBar, SearchWrapper } from "./SearchStyled";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <SearchWrapper component="form" onSubmit={onhandleSubmit}>
      <IconButton
        type="submit"
        sx={{ p: "15px", color: "#000" }}
        aria-label="search"
      >
        <SearchIcon sx={{ fontSize: 30, color: "black" }} />
      </IconButton>
      <SearchBar
        placeholder="введите запрос, что нужно сделать, для поиска исполнителя"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "15px", color: "#000" }}
        aria-label="search"
      >
        <MicIcon sx={{ fontSize: 30, color: "black" }} />
      </IconButton>
    </SearchWrapper>
  );
};

export default Search;
