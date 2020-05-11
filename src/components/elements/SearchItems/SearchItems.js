import React from "react";
import "./SearchItems.scss";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
const SearchItems = ({ searchs, searchData }) => {
  return (
    <div className="searchitem-container">
      <div className="search-header">
        <h2>Search Results for {searchData.name}</h2>
      </div>
      <hr></hr>
      <div className="searchwrapper-container">
        {searchs.data.results.map((item) => {
          return item.poster_path ? (
            <div key={item.id} className="searchwrap-box">
              <img
                className="search-image"
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}`}
              />
              <div className="search-title">{item.title}</div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SearchItems;
