const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item bg-dark" href="/#">
       <i class="fab fa-twitter"></i></a>

     <a href="/#" class="list-group-item wd-nav-sidebar-icon-plus-label bg-dark">
       <i class="fa-solid fa-house me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Home</div>
     </a>  
       
     <a href="/#" class="list-group-item active wd-nav-sidebar-icon-plus-label">
       <i class="fa-solid fa-hashtag me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Explore</div>
     </a>
       
       <a href="/#">
       <i classindex.html="fa-solid fa-bell me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Notifications</div>
       </a> 
       
     <a href="/#" class="list-group-item bg-dark wd-nav-sidebar-icon-plus-label">
       <i class="fa-solid fa-envelope me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Messages</div>
     </a>

     <a href="/#" class="list-group-item bg-dark wd-nav-sidebar-icon-plus-label">
       <i class="fa-solid fa-bookmark me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Bookmarks</div>
     </a>
       
     <a href="/#" class="list-group-item bg-dark wd-nav-sidebar-icon-plus-label" >
       <i class="fa-solid fa-list me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Lists</div>
     </a>
       
     <a href="/#" class="list-group-item bg-dark wd-nav-sidebar-icon-plus-label" >
       <i class="fa-solid fa-user me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">Profile</div>      
     </a>
       
     <a href="/#" class="list-group-item bg-dark wd-nav-sidebar-icon-plus-label">
       <i class="fa-solid fa-ellipsis me-1"></i>
       <div class="d-none d-lg-block wd-nav-sidebar-label">More</div>   
     </a>               
       
   </div>
   <div class="d-grid mt-2">
     <a href="/#"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
