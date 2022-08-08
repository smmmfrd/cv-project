export default function WorkExperience(props){
    const id = props.id;
    return(
        <div className="cv--input-experience">
            <input 
                type="text"
                name="company"
                placeholder="Company"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.company}
            />
            <input 
                type="text"
                name="position"
                placeholder="Position"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.position}
            />
            <input 
                type="text"
                name="length"
                placeholder="Start Date - End Date"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.length}
            />
            <textarea 
                rows="2"
                name="description"
                placeholder="Details of Position"
                onChange={(event) => props.handleInput(event, id)}
                value={props.data.description}
            />
        </div>
    )
}