import PersonalDetails from "./PersonalDetails";
import Work from "./Work/Work";
import Education from "./Education/Education";
import { useState } from "react";
export default function Input(props){

    const [section, setSection] = useState(0);

    function handleChange(val){
        var newSection = section + val;
        if(newSection >= 3) {
            newSection = 0;
        } else if(newSection < 0){
            newSection = 2;
        }
        setSection(newSection);
    }

    function renderSwitch(){
        switch (section) {
            case 0:
                return <PersonalDetails handleChange={props.handleChange} data={props.data} />
                break;
            case 1:
                return <Work handleChange={props.handleChange} experience={props.data.experience}/>
                break;
            case 2:
                return <Education handleChange={props.handleChange} education={props.data.education}/>
                break;
        }
    }

    return(
        <div className="cv--input-container">
            {renderSwitch()}
            <div className="cv--input-buttons">
                
                <button onClick={() => handleChange(-1)}>Previous Section</button>
                <button onClick={() => handleChange(1)}>Next Section</button>
            </div>
        </div>
    )
}