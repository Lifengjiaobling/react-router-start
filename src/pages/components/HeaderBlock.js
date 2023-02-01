// https://www.cloudgn.com/static/logo_guanwang.4271d63d.png
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./headerblock.css"
const headList = [
  { url: "/", id: "1", name:"首页"},
  { url: "/article", id: "2", name:"文章"},
  { url: "/login", id: "3", name:"登录"},
  { url: "", id: "4", name:"其他"}
]
class headerBlock extends Component  {
  render() {
    return (
        <div>
          <ul className="headerContainer">
            {headList.map(item => (
                <li key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
            ))}
          </ul>
        </div>
    )
  }
}

export default headerBlock