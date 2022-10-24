import React from "react";
import "../index.css"

const WhoToFollowListItem = (
  {
    who = {}
  }
) =>
  {
    if (who.avatarIcon === '') {
      return (
          <div className="border bg-light border-secondary p-1">
            <div className="wd-userName-text m-1">{who.userName}</div>
          </div>
      );
    } else {
      return (
          <div className="border bg-light border-secondary border-thin p-1">
            <div className="d-inline-flex">
              <img alt="temp" className="wd-avatarIcon ms-1 me-2"
                   src={`/images/${who.avatarIcon}`}/>

              <div className="m-0">
                <div className="d-inline-flex">
                  <div className="wd-userName-text me-1">{who.userName}</div>
                  <i className="fa-solid fa-check me-1 align-self-center text-white"></i>
                </div>

                <div className="wd-handle-text">{who.handle}</div>
              </div>
            </div>
            <a href="#"
               className="btn btn-primary rounded-pill m-1 float-end">
              Follow</a>
          </div>
      );

    }
  };

export default WhoToFollowListItem;