// import Home from './Home'
import About from './About'
import Login from './pages/Login'
import Layout from "./pages/components/Layout";
import Board from "./pages/Board";
import Article from "./pages/Article";
// import Content from "./pages/Content";
import { HashRouter, BrowserRouter, Link, Routes, Route } from "react-router-dom";
import FeedBack from "./pages/selfPages/FeedBack";
import AntUse from "./pages/selfPages/AntUse";
import List from "./pages/selfPages/List";

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
           {/*<Route path="/" element={<Home/>}></Route>*/}
           {/*<Route path="/about" element={<About/>}></Route>*/}
           {/*<Route path="/content" element={<Content/>}></Route>*/}
         </Routes>
      </BrowserRouter>
  );
}

export default App;
