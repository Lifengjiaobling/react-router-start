//HOME首页
import {Link} from "react-router-dom";
import React from "react";

function Board () {
  return (
      <div>
        <p>Home主页</p>
        <p>
          <Link to="/selfPages/FeedBack">意见反馈git测试测试</Link>
        </p>
        <p>
          <Link to="/selfPages/AntUse">组件调用git测试</Link>
        </p>
        <p>
          <Link to="/selfPages/List">卡片列表再测一遍</Link>
        </p>
        <p>
          <Link to="/selfpages/TransformSkew">斜切方块</Link>
        </p>
        <p>
          <Link to="/selfpages/ReduxTest">关于状态管理 改变天气</Link>
          <Link to="/selfpages/ReduxTest2">关于状态管理 改变主题</Link>
        </p>
      </div>
  )
}
export default Board