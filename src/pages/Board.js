//HOME首页
import {Link} from "react-router-dom";
import React from "react";

function Board () {
  return (
      <div>
        <p>Home主页</p>
        <p>
          <Link to="/selfpages/FeedBack">意见反馈</Link>
        </p>
        <p>
          <Link to="/selfpages/AntUser">组件调用</Link>
        </p>

      </div>
  )
}
export default Board