import { useState, useEffect } from "react";

// import "./Frmlogin.css";

export default function Empdetails() {

    const [name, setName] = useState('');
    const [Rating, setRating] = useState('');
    const [Company, setCompany] = useState('');
    const [Interests, setInterests] = useState('');
    const [Designation, setDesignation] = useState('');
    const [Job_descripton, setJob_descripton] = useState('');
    const [view_more, setview_more] = useState('');
    const [company_logo, setcompany_logo] = useState('');
    function getEmplyee() {
        let headersList = {
            "Accept": "*/*"

        }

        fetch("https://retoolapi.dev/H2F0Ui/getemployedetail?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: headersList
        }).then(function (response) {
            return response.text();
        }).then(function (data) {

            console.log(data);
            data = JSON.parse(data)
            setName(data[0].name)
            setRating(data[0].rating)
            setCompany(data[0].company)
            setInterests(data[0].interests)
            setDesignation(data[0].designation)
            setJob_descripton(data[0].job_descripton)
            setview_more(data[0].view_more)
            setcompany_logo(data[0].company_logo)
        })
    }
    useEffect(() => {
        getEmplyee()
    }, [])
    function view_more1() {
        window.open(view_more);

    }
    return (
        <div>
<table><tr><td>
            <img
                src={company_logo}
                alt="new"
            /></td></tr>
    <tr><td>
            <h2>Employee Details</h2></td>
            </tr>
            <tr><td>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="name" name="name" defaultValue={name} placeholder="name@email.com" />
            </div></td><td>
            <div className="input-group">
                <label htmlFor="Rating">Rating</label>
                <input type="Rating" name="Rating" value={Rating} placeholder="name@email.com" />
            </div></td></tr>
            <tr><td>
            <div className="input-group">
                <label htmlFor="Company">Company</label>
                <input type="Company" name="Company" value={Company} placeholder="name@email.com" />
            </div></td><td>
            <div className="input-group">
                <label htmlFor="Company">Interests</label>
                <input type="Company" name="Company" value={Interests} placeholder="name@email.com" />
            </div></td></tr>
<tr><td>
            <div className="input-group">
                <label htmlFor="email">Designation</label>
                <input type="email" name="email" value={Designation} placeholder="name@email.com" />
            </div></td><td>

            <div className="input-group">
                <label htmlFor="Company">Job_descripton</label>
                <input type="Company" name="Company" value={Job_descripton} placeholder="name@email.com" />
            </div></td></tr>
            <tr><td>
            <button className="primary" onClick={(e) => { view_more1() }} >View More</button>
            </td></tr></table>
        </div>
    );

}



