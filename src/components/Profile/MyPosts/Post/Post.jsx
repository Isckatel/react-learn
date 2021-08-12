import css from "./Post.module.css";

const Post = (props) => {
  return(
    <div className={css.post}>
        <div className="imgPost">
          <img src="https://cdn0.youla.io/files/images/780_780/5f/3e/5f3e67c87eab053c4d56898d-1.jpg" />
        </div>
        <div className={css.textPost}>
          {props.massage}
        </div>
    </div>
  );
}

export default Post;
