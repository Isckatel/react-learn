import css from "./Profile.module.css";
import loader from '../../assets/img/oval.gif';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (props.profile == null || props.profile == undefined) {
    return <img src={loader} />
  } else {
    return (
      <div>
        <div className={css.imgIntro}>
        </div>
        <div className={css.prefyu}>
          <img className={`${css.ava} ${css.brdSilver}`} src={props.profile.photos.small} />
          <div className={css.description}>
            <h3>{props.profile.fullName}</h3>
            <p>{props.profile.aboutMe}</p>
            <ProfileStatus status={props.status} updateStatusThunk = {props.updateStatusThunk} />
            </div>
          </div>
      </div>
    );
  }
}

export default ProfileInfo;
