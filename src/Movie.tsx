import React from "react";
import PropTypes from "prop-types";

interface MovieData {
  title: string;
  id: number;
  year: number;
  summary: string;
  medium_cover_image: string;
}

function Movie({ title, id, year, summary, medium_cover_image }: MovieData) {
  return (
    <div className='movie'>
      <img src={medium_cover_image} alt={title} title={title}></img>
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <p className='movie__summary'>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
};

export default Movie;
