import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
  return(`
<div class="wd-row">
      <div class="wd-input-and-search">
           <input
            class="wd-input mt-1 mb-2 ms-3 ps-md-4 bg-dark"
            placeholder="Search Twitter"/>  
            
            <div>
              <span class="wd-input-search-icon">
                <i class="fa-solid fa-magnifying-glass ms-4 mt-sm-2 small"></i>  
              </span>
            </div>  
       </div>  
       
        <div><i class="fa-solid fa-gear ms-2 mt-1"></i></div>
</div>     
   
   <div class="wd-explore-navbar mb-1 ms-3">

          <ul class="nav nav-tabs border-thin  border-secondary">
            <li class="nav-item d-inline-table">
              <a class="nav-link border-thin border-dark active bg-primary text-bg-danger" href="for-you.html">For You</a>
            </li>
            <li class="nav-item d-inline-table">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item d-inline-table">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item sticky-top">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block d-inline-table">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
          </ul>
   </div>
        <div><img class="ms-3 wd-explore-main-img " src="../../images/spacex.jpeg"></div>
         <div class="temp">${PostSummaryList()}</div>
    `)
      ;
}
export default ExploreComponent;
