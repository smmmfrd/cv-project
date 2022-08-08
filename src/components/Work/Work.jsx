import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";

export default function Work(props){
    const [experience, setExperience] = useState(props.experience);

    const experienceInputs = experience.map(exp => {
        const newKey = exp.id;
        return (
            <WorkExperience
                key={newKey}
                id={newKey}
                handleInput={handleChange}
                handleDelete={handleDelete}
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

    function handleDelete(id){
        setExperience(oldExp => oldExp.filter(exp => exp.id != id));
    }

    function addExperience(){
        setExperience(oldExp => [...oldExp, {
            id: nanoid(),
            company: "",
            position: "",
            length: "",
            description: ""
        }]);
    }

    return(
        <div className="cv--input">
            <h1>Work Experience</h1>
            {experienceInputs}
            <button onClick={addExperience}>Add New Work Experience</button>
        </div>
    )
}