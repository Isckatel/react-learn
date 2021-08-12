import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return(
      <div className={css.posts}>
        <div className={css.newpost}>
            <textarea></textarea>
            <button>Добавить запись</button>
        </div>
        <Post massage="Как дела?"/>
        <Post massage="Все хорошо"/>
        <Post massage="Я рад за вас"/>
      </div>
  );
}

export default MyPosts;
