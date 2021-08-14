import css from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const ProfileInfo = () => {
  return (
    <div>
      <div className={css.imgIntro}>
      </div>
      <div className={css.prefyu}>
        <img className={`${css.ava} ${css.brdSilver}`} src="https://pbs.twimg.com/profile_images/433687863247790082/uXU1HydH.jpeg" />
        <div className={css.description}>
          <h3>Ivan E</h3>
          <p>Здесь всякая информация о профиле</p>
          </div>
        </div>
    </div>
  );
}

const Profile = (props) => {
  return(
    <div className="main">

      <ProfileInfo />
      <MyPosts postData = {props.profilePage.postData}/>

    </div>
  );
}

export default Profile;
