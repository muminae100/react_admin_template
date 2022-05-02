import React from 'react';
import Images from '../../assets/images';

const RecentMessages = () => {
  return (
    <>
    <div className="col-xl-12">
    <div className="card message-bx">
    <div className="card-header d-sm-flex d-block shadow-sm">
    <div>
    <h4 className="fs-20 mb-0 font-w600 text-black mb-sm-0 mb-2">Recent Messages</h4>
    </div>
    <a href="#" className="btn btn-primary rounded">+ New Message</a>
    </div>
    <div className="card-body">
    <div className="media mb-4">
    <div className="image-bx mr-sm-4 mr-2">
    <img src={Images.User1} alt="person" className="rounded-circle img-1" />
    <span className="active"></span>
    </div>
    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
    <div className="mr-sm-3 mr-0">
    <h6 className="fs-16 font-w600 mb-sm-2 mb-0"><a href="#" className="text-black">Chandara Kiev</a></h6>
    <p className="text-black mb-sm-3 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
    <span className="fs-14">5m ago</span>
    </div>
    <a href="#" className="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
    </div>
    </div>
    <div className="media mb-4">
    <div className="image-bx mr-sm-4 mr-2">
    <img src={Images.User2} alt="person" className="rounded-circle img-1" />
    <span className="active"></span>
    </div>
    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
    <div className="mr-sm-3 mr-0">
    <h6 className="fs-16 font-w600 mb-sm-2 mb-0"><a href="#" className="text-black">Samuel Quequeee</a></h6>
    <p className="text-black mb-sm-3 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
    <span className="fs-14">41m ago</span>
    </div>
    <a href="#" className="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
    </div>
    </div>
    <div className="media">
    <div className="image-bx mr-sm-4 mr-2">
    <img src={Images.User3} alt="person" className="rounded-circle img-1" />
    </div>
    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
    <div className="mr-sm-3 mr-0">
    <h6 className="fs-16 font-w600 mb-sm-2 mb-0"><a href="#" className="text-black">Laurenz Jumawa</a></h6>
    <p className="text-black mb-sm-3 mb-1">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
    <span className="fs-14">25m ago</span>
    </div>
    <a href="#" className="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default RecentMessages;