import {useState} from "react";
import "../../assets/list.css"
import Card from "./components/Card";
const CardList = () => {
  const [list] = useState([
    {
      title: "上海板块",
      content: "供沪深两市各板块的资金流向，及时了解各行业的概念或地域板块的资金金柳如情况"
    },
    {
      title: "深圳板块",
      content: "供沪深两市各板块的资金流向，及时了解各行业的概念或地域板块的资金金柳如情况"
    },
    {
      title: "广州板块",
      content: "供沪深两市各板块的资金流向，及时了解各行业的概念或地域板块的资金金柳如情况"
    },
    {
      title: "北京板块",
      content: "供沪深两市各板块的资金流向，及时了解各行业的概念或地域板块的资金金柳如情况"
    },
  ]);
  let [clickNum,setClickNum] = useState([0]);
  const getClickNum = () => {
    console.log(clickNum,"clickNum");
    clickNum++
    setClickNum(clickNum)
  };
  return(
      <div className="list-page">
        <ul>
          {list.map((item,index)=>(
            <li key={index}>
              <Card cardItem={item} getClick={getClickNum}/>
            </li>
          ))}
        </ul>
        <div>点击次数{clickNum}</div>
      </div>
  )
}
export default  CardList