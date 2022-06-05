import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const [move, setMove] = useState("");
  useEffect(() => {
    setMove(movies.find((el) => el.id == id));
  }, [id]);

  return (
    <div>
      <h1>{move.title}</h1>
      <h1>{move.description}</h1>
      <iframe
        width="560"
        height="315"
        src={move.trailer}
        allowfullscreen
      ></iframe>
      <Link to="/">
        <button>
          <i className="fas fa-play" /> Go Back
        </button>
      </Link>
    </div>
  );
};

export default MovieDetails;
