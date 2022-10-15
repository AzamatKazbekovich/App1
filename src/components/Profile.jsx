import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          Post 1
        </div>
        <div className={s.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;