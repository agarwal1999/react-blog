import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author : <b>Saurabh</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione maxime temporibus pariatur amet ex quis! Excepturi consectetur fugit non vero eaque tempora porro provident, eligendi, beatae libero nesciunt adipisci!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
