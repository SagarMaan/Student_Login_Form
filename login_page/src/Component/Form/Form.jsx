import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.css"


export default function Form() {

    const navigate = useNavigate()
    const [ form , setForm ] = useState({
        Full_Name: "" ,
        Roll_No: "" ,
        DOB : "" ,
        EmailId : "" ,
        Mobile_Number : "" 
    })

    const handleSubmit = ( event ) => {
        setForm({ ...form , [event.target.name] : event.target.value })
    }

    const submitForm = async ( event ) => {
       
        event.preventDefault();
        navigate("/table",{ state : form })
    }

    return (
        <div className = "container" >
            <h1> Student Form </h1>
            <form onSubmit={(event) => {submitForm(event)}}>
                <section className="student_data">
                    <input onChange={ handleSubmit } id = "Full_Name" name = "Full_Name" type = "text" placeholder="Full Name" required />
                     </section>
                     
                     <section className="student_data">
                    <label htmlFor="Roll_No"></label>
                    <input onChange={handleSubmit} id="Roll_No" name="Roll_No" type="text" placeholder='RollNo.' required />
                </section>

                <section className="student_data">
                    <input onChange={handleSubmit} id="DOB" name="DOB" type="text" placeholder='D.O.B.' required />
                </section>

                <section className="student_data">
                    <input onChange={handleSubmit} id="EmailId" name="EmailId" type="text" placeholder='EmailId' required />
                </section>

                <section className="student_data">
                    <input onChange={handleSubmit} id="Mobile_Number" name="Mobile_Number" type="text" placeholder='Mobile Number' required />
                </section>

                <button type = "sumbit" >Submit</button>

                </form>
        </div>
    )
}