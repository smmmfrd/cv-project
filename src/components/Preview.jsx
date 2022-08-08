export default function Preview(props){

    const expElements = props.data.experience.map(exp => {
        return (<div className="cv--preview-experience" key={exp.id}>
            <h1>{exp.company}</h1>
            <h2>{exp.position}</h2>
            <h3>{exp.length}</h3>
            <p>{exp.description}</p>
        </div>)
    })

    const eduElements = props.data.experience.map(edu => {
        return (<div className="cv--preview-education" key={edu.id}>
            <h1>{edu.course}</h1>
            <h2>{edu.school}</h2>
            <h3>{edu.length}</h3>
        </div>)
    })
    
    return(
        <div className="cv--preview">
            <h1>{props.data.name ? props.data.name : "-" }</h1>
            <h2>{props.data.title ? props.data.title : "-" }</h2>
            <p>{props.data.phone ? props.data.phone : "-" }</p>
            <p>{props.data.email ? props.data.email : "-" }</p>
            <p>{props.data.location ? props.data.location : "-" }</p>
            <p>{props.data.about ? props.data.about : "-" }</p>
            <hr/>
            <h3>Experience</h3>
            {expElements.length ? expElements : "-"}
            <h3>Education</h3>
            {eduElements.length ? eduElements : "-"}
        </div>
    )
}