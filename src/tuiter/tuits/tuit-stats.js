import React from "react";
import "../index.css"
import {faComment, faRetweet, faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



  const TuitStat = (
      {
        tuit = {}
      }
  ) => {
    let liked;
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
            <script>
              {
              function myfunction() {
                if (tuit.liked) {
                  `<FontAwesomeIcon icon={faShare} className="me-1 wd-liked"/>`
                }
                else {
                  `<FontAwesomeIcon icon={faShare} className="me-1"/>`
                }
            }
              }
            </script>

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