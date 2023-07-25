import "../../assets/list.css"
import { connect } from "react-redux";

const TransformBox = (props) => {
  return(
      <div className="skew-page">
        <div className="skew-box"></div>
        <div>{props.weather}</div>
      </div>
  )
}
const mapStateToProps = (state) => ({
  weather: state.weatherReducer.weather
})
export default connect(mapStateToProps)(TransformBox)