import React from 'react';
import Images from '../../assets/images';

const TasksProgress = () => {
  return (
    <>
    <div className="card-body loadmore-content height620 dlab-scroll  pb-0" id="RecentActivitiesContent">
    <div className="border-bottom pb-4 mb-4">
    <a href="#" className="btn btn-sm btn-success rounded-xl mb-2">Graphic Deisgner</a>
    <p className="font-w600"><a href="post-details.html" className="text-black">Visual Graphic for Presentation to Client</a></p>
    <div className="row justify-content-between">
    <ul className="users col-6">
    <li><img src={Images.User1} alt="user1" /></li>
    <li><img src={Images.User2} alt="user2" /></li>
    <li><img src={Images.User3} alt="user3" /></li>
    <li><img src={Images.User4} alt="user4" /></li>
    </ul>
    <div className="col-6 pl-0">
    <h6 className="fs-14">Progress
    <span className="pull-right font-w600">24%</span>
    </h6>
    <div className="progress" style={{ "height": "7px"}}>
    <div className="progress-bar bg-primary progress-animated" style={{"width": "24% ", "height" :"7px"}} role="progressbar">
    <span className="sr-only">24% Complete</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="border-bottom pb-4 mb-4">
    <a href="#" className="btn btn-sm btn-secondary rounded-xl mb-2">Digital Marketing</a>
    <p className="font-w600"><a href="post-details.html" className="text-black">Build Database Design for Fasto Admin v2</a></p>
    <div className="row justify-content-between">
    <ul className="users col-6">
    <li><img src={Images.User5} alt="person" /></li>
    <li><img src={Images.User1} alt="person" /></li>
    <li><img src={Images.User2} alt="person" /></li>
    <li><img src={Images.User3} alt="person" /></li>
    </ul>
    <div className="col-6 pl-0">
    <h6 className="fs-14">Progress
    <span className="pull-right font-w600">79%</span>
    </h6>
    <div className="progress" style={{"height":"7px"}}>
    <div className="progress-bar bg-primary progress-animated" style={{"width": "79%", "height":"7px"}} role="progressbar">
    <span className="sr-only">79% Complete</span>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="border-bottom pb-4 mb-4">
    <a href="#" className="btn btn-sm btn-warning rounded-xl mb-2">Programmer</a>
    <p className="font-w600"><a href="post-details.html" className="text-black">Make Promotional Ads for Instagram Fasto’s</a></p>
    <div className="row justify-content-between">
    <ul className="users col-6">
    <li><img src={Images.User1} alt="person" /></li>
    <li><img src={Images.User2} alt="person" /></li>
    <li><img src={Images.User3} alt="person" /></li>
    <li><img src={Images.User4} alt="person" /></li>
    </ul>
    <div className="col-6 pl-0">
    <h6 className="fs-14">Progress
    <span className="pull-right font-w600">36%</span>
    </h6>
    <div className="progress" style={{"height":"7px"}}>
    <div className="progress-bar bg-primary progress-animated" style={{"width": "36%", "height":"7px"}} role="progressbar">
    <span className="sr-only">36% Complete</span>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div className="border-bottom pb-4 mb-4">
    <a href="#" className="btn btn-sm btn-warning rounded-xl mb-2">Programmer</a>
    <p className="font-w600"><a href="post-details.html" className="text-black">Make Promotional Ads for Instagram Fasto’s</a></p>
    <div className="row justify-content-between">
    <ul className="users col-6">
    <li><img src={Images.User1} alt="person" /></li>
    <li><img src={Images.User2} alt="person" /></li>
    <li><img src={Images.User3} alt="person" /></li>
    <li><img src={Images.User4} alt="person" /></li>
    </ul>
    <div className="col-6 pl-0">
    <h6 className="fs-14">Progress
    <span className="pull-right font-w600">36%</span>
    </h6>
    <div className="progress" style={{"height":"7px"}}>
    <div className="progress-bar bg-primary progress-animated" style={{"width": "36%", "height":"7px"}} role="progressbar">
    <span className="sr-only">36% Complete</span>
    </div>
    </div>
    </div>
    </div>
    </div>



    </div>
    </>
  )
}

export default TasksProgress;