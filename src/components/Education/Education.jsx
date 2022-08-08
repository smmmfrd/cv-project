import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import EducationExperience from "./EducationExperience";

export default function Education(props){
    const [education, setEducation] = useState(props.education);

    const educationInputs = education.map(edu => {
        const newKey = edu.id;
        return (
            <EducationExperience
                key={newKey}
                id={newKey}
                handleInput={handleChange}
                handleDelete={handleDelete}
                data={edu}
            />
        )
    });

    useEffect(() =>{
        props.handleChange(null, "education", education);
    },[education])

    function handleChange(event, id){
        const {name, value} = event.target;
        setEducation(oldEdu => oldEdu.map(edu => edu.id === id ? {
            ...edu,
            [name]: value
        } : edu));
    }

    function handleDelete(id){
        setEducation(oldEdu => oldEdu.filter(edu => edu.id != id));
    }

    function addEducation(){
        setEducation(oldEdu => [...oldEdu, {
            id: nanoid(),
            course: "",
            school: "",
            length: ""
        }]);
    }

    return(
        <div className="cv--input">
            <h1>Education</h1>
            {educationInputs}
            <button onClick={addEducation}>Add New Education</button>
        </div>
    )
}