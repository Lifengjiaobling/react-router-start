//此页面用于使用redux mapStateToProps
import { connect } from "react-redux";
import { weatherName } from "../../store/action";
import React from "react";
const ReduxTest = (props) => {

  function changeWeatherLocal (name) {
    props.changeWeather(name)
  }
  return(
      <div style={styles.box}>
        <span onClick={() => changeWeatherLocal("kk")}>{props.weather}</span>
        <span onClick={props.changeWeather("dd")}>{props.weather}</span>
      </div>
  )
}
const mapStateToProps = state => ({
    weather: state.weatherReducer.weather
})
// 不走action 直接通过reducer 修改状态
const mapDispatchToProps = (dispatch) => {
  return {
    changeWeather: (name) => {
      dispatch({type: 'SUNNY', payload:name})
    }
  }
}
//通过dispatch分发action
// function mapDispatchToProps(dispatch) {
//   return {
//     changeWeather: function(name) {
//       dispatch(weatherName(name));
//     }
//   };
// }
export default connect(mapStateToProps,mapDispatchToProps)(ReduxTest);
const styles = {
  box: {
    padding: '16px 16px 16px 8px',
    height: "100px",
    width: "100px",
    backgroundColor: '#d9eaf6',
    color: "#333"
  }
}