import React,{useState} from 'react'


function Button(props) {
  const [value,setValue] = useState('')
  const handleClick = ()=>{
    setValue(props.currentTurn)
    props.onAction();
  }
  return (
   <button
    disabled={value!== ''? true : false}
    style={{
        background:'transparent',
        border:'none',
        fontSize:20,
        width:'100%',
        minHeight:30,
        color:'black'
    }}
    onClick={handleClick}
    >{value}</button>
  );
}

export default Button;
