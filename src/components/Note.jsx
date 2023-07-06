import React from "react"

function Note(props){
    
    function click(event){
        props.onDelete(props.id)
        
        event.preventDefault();
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={click}>

        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.65365 6.69711H5.65365H21.6536" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.6536 6.69711V20.6971C19.6536 21.2275 19.4429 21.7363 19.0679 22.1113C18.6928 22.4864 18.1841 22.6971 17.6536 22.6971H7.65365C7.12322 22.6971 6.61451 22.4864 6.23943 22.1113C5.86436 21.7363 5.65365 21.2275 5.65365 20.6971V6.69711M8.65365 6.69711V4.69711C8.65365 4.16668 8.86436 3.65797 9.23944 3.2829C9.61451 2.90783 10.1232 2.69711 10.6536 2.69711H14.6536C15.1841 2.69711 15.6928 2.90783 16.0679 3.2829C16.4429 3.65797 16.6536 4.16668 16.6536 4.69711V6.69711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.6536 11.6971V17.6971" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6536 11.6971V17.6971" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        </button>
    </div>
}

export default Note