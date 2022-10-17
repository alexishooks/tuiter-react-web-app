import post from "../PostSummaryList/post.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
  <ul>
  ${post.map(post => {
    return(PostSummaryItem(post));
  }).join('')
  }
</ul>
  `);
}
export default PostSummaryList;