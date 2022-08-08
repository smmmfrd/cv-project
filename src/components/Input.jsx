import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
export default function Input(props){
    return(
        <div className="cv--input-container">
            {/* <PersonalDetails handleChange={props.handleChange} data={props.data} /> */}
            <Experience handleChange={props.handleChange} experience={props.data.experience}/>
        </div>
    )
}