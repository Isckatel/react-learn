import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElem = props.postData.map ( (p) => <Post massage={p.massage}/> );

  return(
      <div className={css.posts}>
        <div className={css.newpost}>
            <textarea></textarea>
            <button>Добавить запись</button>
        </div>
        {postsElem}
      </div>
  );
}

export default MyPosts;
