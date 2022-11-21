import React from "react";
import "../index.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleCheck, faX } from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux";
import TuitStat from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
      tuit = {}
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">

          <div className="col-2">
            <img alt="temp" className="wd-avatarIcon float-start" src={`../images/${tuit.image}`}/>
          </div>

          <div className="col-10">
            <div>

              <FontAwesomeIcon icon={faX} className="float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}/>
              {tuit.userName}
              <FontAwesomeIcon icon={faCircleCheck} className="wd-verified ms-1 me-1"/>
              {tuit.handle} . {tuit.time}
            </div>

            <div>{tuit.tuit}</div>
          </div>
          <TuitStat tuit={tuit}/>
        </div>

      </li>
  );
};
export default TuitItem;