import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoToFollowList
  from "../../src/tuiter/who-to-follow-list/index";
import ExploreComponent from "../../src/tuiter/explore/index";


function Tuiter() {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <ExploreComponent/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
  );

}
export default Tuiter