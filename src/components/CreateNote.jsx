import React,{useState} from "react";

function CreateNote(props){

    const [note,setNote] = useState({title:"" ,content: ""})

    function change(event){
        const {value, name} = event.target;
        
        setNote((prev)=>{
            return {
                ...prev,
                [name]: value
            };
        });
    }

    function submit(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });

    }


    return <div className="create">

        <form autoComplete="off">
            <input name="title" placeholder="Title" className="title" onChange={change} value={note.title}></input><br></br>

            <textarea name="content" placeholder="Content" className="content" onChange={change} value={note.content}></textarea>

            <button id="add-button" onClick={submit}>
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 57.75C45.9975 57.75 57.75 45.9975 57.75 31.5C57.75 17.0025 45.9975 5.25 31.5 5.25C17.0025 5.25 5.25 17.0025 5.25 31.5C5.25 45.9975 17.0025 57.75 31.5 57.75Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.5 21V42" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 31.5H42" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </button>
        </form>

    </div>

}

export default CreateNote;