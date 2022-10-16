import s from './Post.module.css';

const Post = (props) => {
    return <div>
     <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuOQjQha-WK-zqvyTmYwa75MWDnikIpSyQA&usqp=CAU' />
          <div>{props.message}</div>
          
          <div>
            <span>like</span> { props.likesCount }
          </div>
        </div>
      </div>
    
  
}

export default Post;