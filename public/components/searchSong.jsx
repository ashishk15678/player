"use client";
import React from "react";
const SearchSong = () => {
  const submitSong = async (e) => {
    e.preventDefault();
    const link = "https://saavn.me/search/songs?query=";
    var response = await fetch(
      link + new URLSearchParams(document.querySelector("input").value),
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then(async (response) => await response.json)
      .then(async (data) => await console.log(data));
    console.log(
      link + new URLSearchParams(document.querySelector("input").value)
    );
    console.log(response);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id="searchSongText"
        placeholder="Name of the song"
      />

      <button type="submit" onClick={submitSong}>
        Submit
      </button>
    </div>
  );
};

export default SearchSong;
