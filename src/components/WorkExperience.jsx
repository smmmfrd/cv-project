import { nanoid } from "nanoid";
import { useState, useEffect } from "react"

export default function WorkExperience(props){
    const [currentExperience, setCurrentExperience] = useState({
        id: nanoid(),
        company: "",
        position: "",
        length: "",
        description: ""
    });

    useEffect(() => {
        const newExp = props.exp.filter(exp => exp.id != currentExperience.id);
        props.handleChange(null, "experience", [currentExperience, ...newExp])
    },[currentExperience])

    function handleInput(event){
        const {name, value} = event.target;

        setCurrentExperience(oldExp =>{
            return {
                ...oldExp,
                [name]: value
            }
        })
    }

    return(
        <div className="cv--input">
            <input 
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleInput}
                value={currentExperience.company}
            />
            <input 
                type="text"
                name="position"
                placeholder="Position"
            />
            <input 
                type="text"
                name="length"
                placeholder="Start Date - End Date"
            />
            <textarea 
                rows="2"
                name="description"
                placeholder="Details of Position"
            />
        </div>
    )
}