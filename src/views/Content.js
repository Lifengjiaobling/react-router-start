import {useParams} from "react-router-dom";

function Content () {
  const params = useParams()
  //params 是一个对象 可直接获取参数
  const id = params.id;
  // const name = params.name;
  console.log(id, params)
  return(
      <div>主要内容主要内容</div>
  )
}

export default Content