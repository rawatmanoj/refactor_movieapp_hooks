import React from "react";
import Search from "./search";
const Header = ({ onSearch }) => {
  const onSubmit = (data) => {
    onSearch(data);
  };

  return (
    <div className="nav-container">
      <Search onSearch={onSubmit} />
    </div>
  );
};

export default React.memo(Header);
