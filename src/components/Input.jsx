export default function Input(props){
    return(
        <div className="cv--input">
            <h1>Personal Details</h1>
            <input type="text" onChange={props.handleChange} value={props.data.name} name="name" placeholder="Name" />
            <input type="text" onChange={props.handleChange} value={props.data.title} name="title" placeholder="Job Title" />
            <input type="text" onChange={props.handleChange} value={props.data.phone} name="phone" placeholder="Phone #" />
            <input type="text" onChange={props.handleChange} value={props.data.email} name="email" placeholder="Email" />
            <input type="text" onChange={props.handleChange} value={props.data.location} name="location" placeholder="City, State/Country" />
            <textarea rows="4" onChange={props.handleChange} value={props.data.about} name="about" placeholder="About you..." />
        </div>
    )
}