import { useState } from "react";
import Input from "./components/Input";
import Preview from "./components/Preview";

export default function App() {
  const [data, setData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    about: ""
  });

  function handleChange(event){
    const {name, value} = event.target;

    setData(oldData => {
      return {
        ...oldData,
        [name]: value
      }
    })
  }

  return (
    <div className="App">
      <Input handleChange={handleChange} data={data} />
      <Preview data={data}/>
    </div>
  )
}