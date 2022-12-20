import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

import TodoList from "./components/AlbumList";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Giáng Sinh Rộn Ràng",
      thumbainlUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/b/9/0/4b9084674d8dbc589ecd097e746e11d9.jpg",
    },
    {
      id: 2,
      name: "Noel Tình Yêu",
      thumbainlUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/5/d/365d7b322aef5290d5ca9fa3987fb250.jpg",
    },
    {
      id: 3,
      name: "Kristmas Party",
      thumbainlUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/3/9/e/f39e408bcec6ea272c05b47b011a17a8.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
