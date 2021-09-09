import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tech</span>
        <span className="headerTitleLg">Diaries</span>
      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1489348988052-b34e1c7da1e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80" alt="" />
    </div>
  )
}

export default Header
