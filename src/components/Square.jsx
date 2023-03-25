const Square = (props)=>{
    return (
        <button disabled={props.done} onClick={props.square} >{props.value}</button>
    )
}
export default Square