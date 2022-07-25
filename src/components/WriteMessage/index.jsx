function WriteMessage(props) {
    return (props.trigger) ? (
        <div className="messageWrapper">
            <button></button>
            <button></button>
        </div>
    ) : "";
}


export default WriteMessage
