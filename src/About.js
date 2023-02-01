import { useParams } from "react-router-dom";

function About () {
  //searchParams 传参
  // const [params] = useSearchParams()
  // //params 是一个对象，使用get方法获取参数
  // const id = params.get('id');
  // const name = params.get('name');
  // console.log(id, name);

  //params传参
  const params = useParams()
  //params 是一个对象 可直接获取参数
  const id = params.id;
  const name = params.name;
  console.log(id, params,name)
  return (
      <div>about</div>
  )
}
export default About