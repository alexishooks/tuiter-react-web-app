import React from "react";
import "../index.css"
import {faComment, faRetweet, faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



  const TuitStat = (
      {
        tuit = {}
      }
  ) => {

    // function myFunction() {
    //   if (tuit.liked) {
    //     document.getElementById("liked").innerHTML = "<FontAwesomeIcon id=\"#liked\" icon={faShare} className={}/>";
    //   }
    //   else {
    //     return`<FontAwesomeIcon id="#notliked" icon={faShare} className="me-1"/>`;
    //   }
    // }

    return(
      <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
            <FontAwesomeIcon icon={faComment} className="me-1"/>
            {tuit.replies}
          </div>

          <div className="col-3">
            <div>
            <FontAwesomeIcon icon={faRetweet} className="me-1"/>
              {tuit.retuits}
            </div>
          </div>

          <div className="col-3">
            <FontAwesomeIcon id="#liked" icon={faHeart}/>
            {tuit.likes}
          </div>

          <div className="col-3">
            <FontAwesomeIcon icon={faShare} className="me-1"/>
          </div>
        </div>
      </li>
        </>
  );
};
export default TuitStat;