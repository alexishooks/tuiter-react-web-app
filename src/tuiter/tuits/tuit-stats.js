import React from "react";
import "../index.css"
import {faComment, faRetweet, faHeart, faShare, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

  const TuitStat = (
      {
        tuit = {}
      }
  ) => {
    const dispatch = useDispatch();
    return(
      <>
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-2">
            <FontAwesomeIcon icon={faComment} className="me-1"/>
            {tuit.replies}
          </div>

          <div className="col-sm-3">
            <div>
            <FontAwesomeIcon icon={faRetweet} className="me-1"/>
              {tuit.retuits}
            </div>
          </div>

          <div className='col-sm-3'>
          <div>
            <FontAwesomeIcon id="#liked" icon={faHeart} onClick={() => dispatch(updateTuitThunk({
              ...tuit,
              likes: tuit.likes + 1
            }))} />
            {tuit.likes}
          </div>
        </div>

          <div className="col-1">
            <div>
              <FontAwesomeIcon id="#liked" icon={faThumbsDown} onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1
              }))} />
              {tuit.dislikes}
            </div>
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