import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faImage, faChartSimple, faFaceSmile, faLocationDot, faFile}
from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {createTuit} from "../reducers/tuits-reducer";



const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuit(newTuit))
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img alt="temp" src="/images/nasa.png" width={60}/>
        </div>
        <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <FontAwesomeIcon className="me-3" icon={faImage} />
              <FontAwesomeIcon className="me-3" icon={faFile} />
              <FontAwesomeIcon className="me-3" icon={faChartSimple} />
              <FontAwesomeIcon className="me-3" icon={faFaceSmile} />
              <FontAwesomeIcon className="me-3" icon={faLocationDot} />
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
  );
}
export default WhatsHappening;