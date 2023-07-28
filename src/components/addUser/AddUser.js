import React from "react";
import "./AddUser.scss";

const userInfo = [
    { name: "First Name", placeHolder: "First name", type: "text" },
    { name: "Last Name", placeHolder: "Last name", type: "text" },
    { name: "Email", placeHolder: "Email", type: "email" },
    { name: "Phone", placeHolder: "Phone", type: "text" },
    { name: "Created At", placeHolder: "Created at", type: "date" },
    { name: "Verified", placeHolder: "Verified", type: "text" },
    { name: "Upload an image", placeHolder: "", type: "file" },
];

const productInfo = [
    { name: "Title", type: "text" },
    { name: "Color", type: "text" },
    { name: "Price", type: "email" },
    { name: "Producer", type: "text" },
    { name: "Created At", type: "date" },
    { name: "In Stock", type: "text" },
];

const handleSubmit = (e) => {
    e.preventDefault();
};

export default function AddUser({ setAddUser, addUser }) {
    return (
        <div className="AddUser flex-column">
            <form action="" onSubmit={handleSubmit} style={addUser ? { animation: "zoom-in 0.3s ease 1 forwards" } : { animation: "zoom-out 0.3s ease 1 forwards" }}>
                <div className="head flex">
                    <h1>
                        {window.location.href.includes("users") && "Add New User"}
                        {window.location.href.includes("products") && "Add New Products"}
                    </h1>
                    <i className="fa-solid fa-xmark" onClick={() => setAddUser(false)}></i>
                </div>
                <div className="user-info flex">
                    {window.location.href.includes("users") &&
                        userInfo.map((info, idx) => {
                            return (
                                <>
                                    <div className="item flex-column" id={`item-${idx + 1}`}>
                                        <label htmlFor={`item-${idx}-input`}>{info.name}</label>
                                        <input type={info.type} id={`item-${idx}-input`} />
                                    </div>
                                </>
                            );
                        })}
                    {window.location.href.includes("products") &&
                        productInfo.map((info, idx) => {
                            return (
                                <>
                                    <div className="item flex-column" id={`item-${idx + 1}`}>
                                        <label htmlFor={`item-${idx}-input`}>{info.name}</label>
                                        <input type={info.type} id={`item-${idx}-input`} />
                                    </div>
                                </>
                            );
                        })}
                </div>
                <div className="btn btn-primary">Save</div>
            </form>
        </div>
    );
}
