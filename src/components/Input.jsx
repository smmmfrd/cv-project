import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
export default function Input(props){
    return(
        <div className="cv--input-container">
            {/* <PersonalDetails handleChange={props.handleChange} data={props.data} /> */}
            <WorkExperience handleChange={props.handleChange} exp={props.data.experience}/>
        </div>
    )
}