// import Home from './Home'
import About from './About'
import Login from './views/Login'
import Layout from "./views/components/Layout";
import Board from "./views/Board";
import Article from "./views/Article";
// import Content from "./views/Content";
import { HashRouter, BrowserRouter, Link, Routes, Route } from "react-router-dom";
import FeedBack from "./views/selfPages/FeedBack";
import AntUse from "./views/selfPages/AntUse";
import List from "./views/selfPages/List";
import TransformSkew from './views/selfPages/TransformSkew'
import ReduxTest from './views/selfPages/ReduxTest'
import ReduxTest2 from './views/selfPages/ReduxTest2'
function App() {
  return (
      // 声明当前使用非hasn模式的路由  初始化路由
    // <HashRouter>
    //   {/*指定跳转的组件 to配置路由地址*/}
    //   <Link to="/">首页</Link>
    //   <Link to="/about">关于</Link>
    //   {/*路由出口 对应组件在这里渲染*/}
    //   <Routes>
    //     {/*path代表路径  element代表组件  path=>element 完成路由匹配*/}
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/about/:id/:name" element={<About/>}></Route>
    //     <Route path="/login" element={<Login/>}></Route>
    //   </Routes>
    // </HashRouter>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
           {/*  定义二级路由嵌套*/}
           {/*  默认二级路由*/}
           <Route index element={<Board/>}></Route>
           <Route path="/article" element={<Article/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           </Route>
           <Route path="/selfpages/FeedBack" element={<FeedBack/>}></Route>
           <Route path="/selfpages/AntUse" element={<AntUse/>}></Route>
           <Route path="/selfpages/List" element={<List/>}></Route>
           <Route path="/selfpages/TransformSkew" element={<TransformSkew/>}></Route>
           <Route path="/selfpages/ReduxTest" element={<ReduxTest/>}></Route>
           <Route path="/selfpages/ReduxTest2" element={<ReduxTest2/>}></Route>
           {/*<Route path="/content" element={<Content/>}></Route>*/}
         </Routes>
      </BrowserRouter>
  );
}

export default App;
