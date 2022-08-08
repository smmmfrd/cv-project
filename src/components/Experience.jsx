import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";

export default function Experience(props){
    const [experience, setExperience] = useState(props.experience);

    const experienceInputs = experience.map(exp => {
        const newKey = exp.id;
        return (
            <WorkExperience
                key={newKey}
                id={newKey}
                handleInput={handleChange}
                
                data={exp}
            />
        )
    });

    useEffect(() =>{
        props.handleChange(null, "experience", experience);
    },[experience])

    function handleChange(event, id){
        const {name, value} = event.target;
        setExperience(oldExp => oldExp.map(exp => exp.id === id ? {
            ...exp,
            [name]: value
        } : exp));
    }

    function addExperience(){
        setExperience(oldExp => [{
            id: nanoid(),
            company: "",
            position: "",
            length: "",
            description: ""
        }, ...oldExp]);
    }

    return(
        <div className="cv--input">
            {experienceInputs}
            <button onClick={addExperience}>Add</button>
        </div>
    )
}