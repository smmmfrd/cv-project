export default function Preview(props){
    return(
        <div className="cv--preview">
            <h1>{props.data.name}</h1>
            <h2>{props.data.title}</h2>
            <p>{props.data.phone}</p>
            <p>{props.data.email}</p>
            <p>{props.data.location}</p>
            <p>{props.data.about}</p>
        </div>
    )
}