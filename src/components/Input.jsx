import PersonalDetails from "./PersonalDetails";
import Work from "./Work/Work";
import Education from "./Education/Education";
export default function Input(props){
    return(
        <div className="cv--input-container">
            {/* <PersonalDetails handleChange={props.handleChange} data={props.data} /> */}
            {/* <Work handleChange={props.handleChange} experience={props.data.experience}/> */}
            <Education handleChange={props.handleChange} education={props.data.education}/>
        </div>
    )
}