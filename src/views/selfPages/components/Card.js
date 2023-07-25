import '../../../assets/list.css'
const card  = (props) => {
  const handleTitle = () => {
    props.getClick()
  }
  return(
      <div className="card-wrapper">
        <span className="card-title" onClick={handleTitle}>{props.cardItem.title}</span>
        <p className="card-content">{props.cardItem.content}</p>
      </div>
  )

}
export default card