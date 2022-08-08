export default function Preview(props){

    const expElements = props.data.experience.map(exp => {
        return (<div className="cv--preview-experience" key={exp.id}>
            <h1>{exp.company}</h1>
            <h2>{exp.position}</h2>
            <h3>{exp.length}</h3>
            <p>{exp.description}</p>
        </div>)
    })

    return(
        <div className="cv--preview">
            <h1>{props.data.name}</h1>
            <h2>{props.data.title}</h2>
            <p>{props.data.phone}</p>
            <p>{props.data.email}</p>
            <p>{props.data.location}</p>
            <p>{props.data.about}</p>
            <hr/>
            {expElements}
        </div>
    )
}