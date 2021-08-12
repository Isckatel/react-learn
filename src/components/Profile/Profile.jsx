import css from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return(
    <div className="main" className="white-block">
      <div className={css.imgIntro}>
      </div>
      <div className={css.prefyu}>
        <img className={`${css.ava} ${css.brdSilver}`} src="https://pbs.twimg.com/profile_images/433687863247790082/uXU1HydH.jpeg" />
        <div className={css.description}>
          <h3>Ivan E</h3>
          <p>Здесь всякая информация о профиле</p>
        </div>
      </div>

      <MyPosts />

    </div>
  );
}

export default Profile;
