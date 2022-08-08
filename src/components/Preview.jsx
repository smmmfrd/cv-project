export default function Preview(props){

    const expElements = props.data.experience.map(exp => {
        return (<div key={exp.id}>
            <h2>{exp.company}</h2>
            <h3>{exp.position}</h3>
            <h4>{exp.length}</h4>
            <p>{exp.description}</p>
        </div>)
    })

    const eduElements = props.data.education.map(edu => {
        return (<div key={edu.id}>
            <h2>{edu.course}</h2>
            <h3>{edu.school}</h3>
            <h4>{edu.length}</h4>
        </div>)
    })
    
    return(
        <div className="cv--preview">
            <div className="preview--header">
                <div className="preview--header-name">
                    <h1>{props.data.name ? props.data.name : "-" }</h1>
                    <h2>{props.data.title ? props.data.title : "-" }</h2>
                </div>
                <div className="preview--header-contact">
                    <p>{props.data.phone ? props.data.phone : "-" }</p>
                    <p>{props.data.email ? props.data.email : "-" }</p>
                    <p>{props.data.location ? props.data.location : "-" }</p>
                </div>
            </div>
            <hr/>
            <p>{props.data.about ? props.data.about : "-" }</p>
            <h1 className="preview-title">Work</h1>
            <div className="cv--preview-experience">{expElements.length ? expElements : "-"}</div>
            <h1 className="preview-title">Education</h1>
            <div className="cv--preview-experience">{eduElements.length ? eduElements : "-"}</div>
        </div>
    )
}