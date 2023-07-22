import React from "react";
import "./Users.scss";
import profile from "../../assets/pic_vivek.jpg";
import button from "../../assets/delete.svg";
import button2 from "../../assets/note.svg";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import { useNavigate } from "react-router-dom";
import AddUser from "../../components/addUser/AddUser";

function Users() {
    const navigate = useNavigate();
    const [addUser, setAddUser] = useState(false);

    const handleDelete = (id) => {
        console.log(id + "has been deleted");
    };

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        {
            field: "avatar",
            headerName: "Avatar",
            width: 90,
            renderCell: (params) => {
                return (
                    <>
                        <div className="img">
                            <img src={params.row.img || require("../../assets/noavatar.png")} alt="" />
                        </div>
                    </>
                );
            },
        },
        {
            field: "firstName",
            headerName: "First name",
            width: 120,
            editable: true,
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 130,
            editable: true,
        },
        {
            field: "email",
            headerName: "Email",
            type: "text",
            width: 180,
        },
        {
            field: "phone",
            headerName: "Phone",
            type: "number",
            editable: true,
            width: 130,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            type: "date",
            width: 110,
        },
        {
            field: "verified",
            headerName: "Verified",
            type: "boolean",
            editable: true,
            width: 90,
        },
        {
            field: "action",
            headerName: "Action",
            renderCell: (params) => {
                return (
                    <div className="action-btns">
                        <i className="fa-regular fa-edit" onClick={() => navigate(`user/${params.row.id}`)}></i>
                        <i className="fa-regular fa-trash-can" onClick={() => handleDelete(params.row.id)}></i>
                    </div>
                );
            },
            width: 90,
        },
    ];

    return (
        <div className="Users flex-column">
            <div className="head space-between">
                <h1>Users</h1>
                <button className="btn btn-primary add" onClick={() => setAddUser(true)}>
                    Add New User
                </button>
            </div>
            <DataTable rows={userRows} columns={columns} />
            {addUser && <AddUser setAddUser={setAddUser} />}
        </div>
    );
}

export default Users;
