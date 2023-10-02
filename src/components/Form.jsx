import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    );

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            };
        });
    }

    return (
        <form className="m-5">
            <input className="m-1"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
            />
            
            <input className="m-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />

            <p className="m-1">{formData.firstName}</p>
            <p className="m-1">{formData.lastName}</p>
        </form>
    );
}