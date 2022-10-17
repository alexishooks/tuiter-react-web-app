const PostSummaryItem = (post) => {
    return(`
    
<div class="border bg-dark border-secondary ms-0">
  
  <div class="wd-post-summary m-2">
     <div>
        <div class="wd-post-summary-item-topic">${post.topic}</div>
     
        <div class="d-inline-flex">
          <div class="wd-userName-text me-1">${post.userName}</div>
          <i class="fa-solid fa-check me-1 align-self-center text-white"></i>
          <div class="wd-post-summary-item-time"> - ${post.time}</div>
        </div>
        <div class="wd-post-summary-item-title">${post.title}</div>
     </div>
     
    <div>
            <img class="wd-post-summary-item-img m-2" src="${post.image}"> 
    </div>

  </div>
</div>  
  `);
}
export default PostSummaryItem;