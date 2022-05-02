import React from 'react';

const ProjectStats = () => {
  return (
    <>
    <div className="col-xl-12">
    <div className="card">
    <div className="card-header mb-0 d-sm-flex flex-wrap d-block shadow-sm border-0 align-items-center">
    <div className="mr-auto pr-3 mb-3">
    <h4 className="text-black fs-20 mb-sm-0 mb-2">Project Created</h4>
    </div>
    <div className="card-action card-tabs mb-3">
    <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item">
    <a className="nav-link active" data-toggle="tab" href="#Daily" role="tab" aria-selected="false">
    Daily
    </a>
    </li>
    <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#Weekly" role="tab" aria-selected="false">
    Weekly
    </a>
    </li>
    <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#Monthly" role="tab" aria-selected="true">
    Monthly
    </a>
    </li>
    </ul>
    </div>
    </div>
    <div className="card-body">
    <div className="tab-content">
    <div className="tab-pane show active" id="Daily" role="tabpanel">
    <div className="d-flex align-items-center">
    <span className="fs-36 text-black font-w600 mr-4">0,45%</span>
    <div>
    <svg className="mr-2" width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.435L13.435 0L26.8701 13.435H0Z" fill="#2FCA51" />
    </svg>
    <span>last month $563,443</span>
    </div>
    </div>
    <div id="chartTimeline"></div>
    </div>
    <div className="tab-pane" id="Weekly" role="tabpanel">
    <div className="d-flex align-items-center">
    <span className="fs-36 text-black font-w600 mr-4">5,75%</span>
    <div>
    <svg className="mr-2" width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.435L13.435 0L26.8701 13.435H0Z" fill="#2FCA51" />
    </svg>
    <span>last month $563,443</span>
    </div>
    </div>
    <div id="chartTimeline2"></div>
    </div>
    <div className="tab-pane" id="Monthly" role="tabpanel">
    <div className="d-flex align-items-center">
    <span className="fs-36 text-black font-w600 mr-4">1,20%</span>
    <div>
    <svg className="mr-2" width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 13.435L13.435 0L26.8701 13.435H0Z" fill="#2FCA51" />
    </svg>
    <span>last month $563,443</span>
    </div>
    </div>
    <div id="chartTimeline3"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ProjectStats;