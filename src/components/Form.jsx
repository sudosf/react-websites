import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            comments: "",
            isChecked: false,
            favColor: ""
        }
    );

    function handleChange(event){
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target;
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form 
            className="m-5 d-flex flex-column"
            onSubmit={handleSubmit}
        >

            
            <p className="m-1">{formData.lastName}</p>

            <input className="m-1"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={FormData.firstName}
                onChange={handleChange}
            />
            
            <input className="m-1"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={FormData.lastName}
                onChange={handleChange}
            />

            <textarea className="m-1"
                value={formData.comments}
                name="comments"
                placeholder="comment here"
                onChange={handleChange}
            />

            <div className="m-1">
                <input
                    type="checkbox"
                    id="isChecked"
                    name="isChecked"
                    checked={formData.isChecked}
                    onChange={handleChange}
                />
                <label className="mx-2" htmlFor="isChecked">Are we Checked Bro?</label>
            </div>

            <div className="m-1 d-flex flex-column">
                <div className="d-flex align-items-center">
                    <p className="h6 me-2">select an option:</p>
                    <p className="h4 p-2 border">{formData.favColor}</p>
                </div>
                <select 
                    name="favColor" 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                >
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </div>

            <button className="btn btn-primary m-1">Submit</button>

        </form>
    );
}