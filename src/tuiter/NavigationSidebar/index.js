import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css'
import '../index.css'

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
          <div className="d-none d-lg-block">Home</div>
        </a>
        <a className={`list-group-item d-none d-lg-block
                    ${active === 'explore'?'active':''}`}>
          <div className="d-none d-lg-block">Explore</div>
        </a>
        <a className={`list-group-item d-none d-lg-block
                    ${active === 'notifications'?'active':''}`}>
          <div className="d-none d-lg-block">Notifications</div>
        </a>
        <a className={`list-group-item 
                    ${active === 'messages'?'active':''}`}>
          <div className="d-none d-lg-block">Messages</div>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <div className="d-none d-lg-block">Bookmarks</div>
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <div className="d-none d-lg-block">Lists</div>
        </a>
        <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <div className="d-none d-lg-block">Profile</div>
        </a>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <div className="d-none d-lg-block">More</div>
        </a>
      </div>
  );
};
export default NavigationSidebar;
