export default function EducationExperience(props){
    const id = props.id;
    return(
        <div className="cv--input-experience">
            <input 
                type="text"
                name="course"
                placeholder="Course / Program"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.course}
            />
            <input 
                type="text"
                name="school"
                placeholder="School"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.school}
            />
            <input 
                type="text"
                name="length"
                placeholder="Start Date - End Date"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.length}
            />
            <button onClick={() => props.handleDelete(id)}>Delete</button>
        </div>
    )
}