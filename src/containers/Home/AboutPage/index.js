import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieItem from "../components/MovieItem"
export default function AboutPage() {
  // componentDidMount
  const [state, setState] = useState({
    movieList: [],
    isStatus: false,
    username: "Hoang"
  });
  useEffect(() => {
    axios(
      {
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET"
      }
    ).then((result) => {
      console.log(result.data);
      setState({
        // Giữ lại các thuộc tính ở trong state
        // Do lúc đầu chỉ set lại 1 cái state thì sẽ bị ghi đè
        ...state,
        movieList: result.data
      });
    })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const renderHTML = () => {
    const { movieList } = state;
    if (movieList && movieList.length > 0) {
      return movieList.map((item) => {
        return (
          <div key={item.maPhim} className="col-sm-3">
            <MovieItem data={item} />
          </div>
        )
      })
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Username : {state.username}</h1>
        {renderHTML()}
      </div>
    </div>
  )
}
