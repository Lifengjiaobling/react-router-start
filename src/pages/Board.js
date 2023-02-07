//HOME首页
import {Link} from "react-router-dom";
import React from "react";

function Board () {
  return (
      <div>
        <p>Home主页</p>
        <p>
          <Link to="/selfPages/FeedBack">意见反馈</Link>
        </p>
        <p>
          <Link to="/selfPages/AntUse">组件调用</Link>
        </p>
        <p>
          <Link to="/selfPages/List">卡片列表</Link>
        </p>

      </div>
  )
}
export default Board