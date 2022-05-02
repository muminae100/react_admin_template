import React from 'react';

const MonthlyTarget = () => {
  return (
    <>
    <div className="col-xl-6 col-xxl-12 col-md-6">
    <div className="card">
    <div className="card-header border-0 shadow-sm">
    <h4 className="fs-20 text-black font-w600">Monthly Target</h4>
    <div className="dropdown">
    <a href="#" data-toggle="dropdown" aria-expanded="false">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    </a>
    <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#">Edit</a>
    <a className="dropdown-item" href="#">Delete</a>
    </div>
    </div>
    </div>
    <div className="card-body text-center">
    <div id="radialChart"></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default MonthlyTarget;