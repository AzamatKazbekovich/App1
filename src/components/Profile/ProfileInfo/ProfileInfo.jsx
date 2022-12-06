import s from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader.js';


const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

    return <div>
    <div>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'/>
    </div>
    <div className={s.descriptionBlock}>
      <img  src={props.profile.photos.large}/>
      ava + description
    </div>
     </div>
}

export default ProfileInfo;