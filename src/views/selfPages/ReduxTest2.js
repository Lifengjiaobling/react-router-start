//此页面用于使用redux 使用hook useSelector useDispatch
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import login from "../Login";
const ReduxTest = (props) => {
  const dispatch = useDispatch();
  const themeName = useSelector(state => state.theme.themeName)

  function changeWeatherLocal (theme) {
    dispatch({type:"SET_THEME",payload:theme})
  }
  return(
      <div style={styles.box}>
        <span onClick={changeWeatherLocal("主题2")}>{themeName}</span>
      </div>
  )
}
export default ReduxTest
const styles = {
  box: {
    padding: '16px 16px 16px 8px',
    height: "100px",
    width: "100px",
    backgroundColor: '#d9eaf6',
    color: "#333"
  }
}