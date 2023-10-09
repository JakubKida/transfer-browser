import React, { useState } from "react";

function SearchBar() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      View as:{" "}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <p>{user}</p>
    </div>
  );
}

export default SearchBar;
