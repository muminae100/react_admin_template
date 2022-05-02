import React from 'react';

const Card = ({ title, number, svg }) => {
  return (
    <>
    <div className="col-sm-6">
    <div className="card">
    <div className="card-body">
    <div className="media align-items-center">
    <div className="media-body mr-3">
    <h2 className="num-text text-black font-w600">{number}</h2>
    <span className="fs-14">{title}</span>
    </div>
    {svg}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Card;