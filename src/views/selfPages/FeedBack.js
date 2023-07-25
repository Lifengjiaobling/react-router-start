import React from 'react';
//函数式组件

function FeedBack () {
  // const [feedContent,setFeedContent] = React.useState([""]);
  const [contentLength,setContentLength] = React.useState([0]);
  const onTextareaChange = e => {
    setContentLength(e.target.value.length)
  }

  return (
      <div style={styles.feedBackPage}>
        <div>
          <div style={{display:"flex"}}>
            <img style={styles.Img} src={require("../../assets/icon_feedback_write.png")} alt=""/>
            <span style={styles.title}>问题描述</span>
          </div>
          <div style={styles.questionDesTextarea}>
            <textarea
              style={styles.textarea}
              maxLength={500}
              placeholder={"请输入您要反馈的信息，以便我们更好地为您提供帮助..."}
              onChange={onTextareaChange}
            />
            <div style={styles.inputNum}>
              <div>
                <span style={styles.inputNumBox}>
                  已输入<span style={styles.inputTextNum}>{contentLength}</span>/500
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default FeedBack

const styles = {
  feedBackPage:{
    padding: '16px 16px 16px 8px',
    height: "100%",
    width: "100%",
    backgroundColor: '#fff'
  },
  title:{
    fontWeight: '600',
    fontSize: '14px',
    alignItems: 'center'
  },
  Img:{
    width:'20px',
    height: '20px',
    marginRight: '4px'
  },
  questionDesTextarea:{
    position: 'relative'
  },
  textarea: {
    width: '343px',
    height: '176px',
    backgroundColor: '#F9F9F9FF',
    border: '1px solid #F2F2F2',
    marginTop: '8px',
    padding: '8px',
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    resize: 'none',
    position: 'relative',
    boxSizing: 'border-box'
  },
  inputNum:{
    position: 'absolute',
    right: '16px',
    bottom: '5px',
    width: '100%',
    textAlign: 'right',
    backgroundColor: '#F9F9F9FF'
  },
  inputNumBox:{
    textAlign: 'right',
    padding: '2px 4px',
    color: '#999999',
    fontSize: '12px',
    backgroundColor: '#eee',
    fontWeight: '400 !important',
    transform: 'scale(0.83333)',
    lineHeight: '14px'
  },
  inputTextNum:{
    color:'#447BD7FF',
    fontSize: '12px',
    transform: 'scale(0.83333)',
    fontWeight: '400 !important'
  }
}