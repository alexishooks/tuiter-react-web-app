import React from "react";
import "../index.css"
import {faComment, faRetweet, faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


  const TuitStat = (
      {
        tuit = {}
      }
  ) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
            <FontAwesomeIcon icon={faComment} />
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faRetweet} />
            {tuit.retuits}
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faHeart} />
            {tuit.likes}
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
      </li>
  );
};
export default TuitStat;