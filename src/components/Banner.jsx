import React, { useEffect, useState } from "react";
import "./banner.css";
import bgImg from "../images/bg-transformer.jpg";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http;//localhost:3000/data/movieData.json")
      .then((res) => res.json)
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src={bgImg} alt="Background Image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content active">
                <img src="" alt="Movie Title" className="movie-title" />
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>lenght</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="button">Button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="date">
                <h2>On 15th August</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
