const WhoToFollowListItem = (who) => {
  if (who.avatarIcon === '') {
    return (`
    <div class="border bg-dark  border-secondary p-1">
       <div class="wd-userName-text m-1">${who.userName}</div>
    </div>
    `);
  } else {
    return(`
 <div class="border bg-dark border-secondary border-thin p-1">
  <div class="d-inline-flex">
      <img class="wd-avatarIcon ms-1 me-2" src="${who.avatarIcon}">
    
    <div class="m-0">
    <div class="d-inline-flex">
      <div class="wd-userName-text me-1">${who.userName}</div>
      <i class="fa-solid fa-check me-1 align-self-center text-white"></i>  
    </div>

      <div class="wd-handle-text">${who.handle}</div>
    </div>  
  </div>
       <a href="#"
        class="btn btn-primary rounded-pill m-1 float-end">
        Follow</a>
 </div>
  `);

  }
}
export default WhoToFollowListItem;