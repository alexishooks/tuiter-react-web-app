import who from "../WhoToFollowList/who.js";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return (`
  <ul>
  ${who.map(who => {
    return(WhoToFollowListItem(who));
  }).join('')
  }
</ul>
  `);
}
export default WhoToFollowList;