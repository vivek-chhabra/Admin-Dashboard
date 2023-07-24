import React, { useState } from "react";
import "./Products.scss";
import { products } from "../../data";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";

function Products() {
    const [addUser, setAddUser] = useState(false);
    const navigate = useNavigate() 

    const handleDelete = () => {};

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        {
            field: "img",
            headerName: "Image",
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
            field: "title",
            type: 'string',
            headerName: "Title",
            width: 120,
            editable: true,
        },
        {
            field: "color",
            type: 'string',
            headerName: "Color",
            width: 130,
        },
        {
            field: "price",
            type: 'string',
            headerName: "Price",
            type: "string",
            width: 180,
        },
        {
            field: "producer",
            headerName: "Producer",
            type: "string",
            width: 130,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            type: "string",
            width: 110,
        },
        {
            field: "inStock",
            headerName: "In Stock",
            type: "boolean",
            editable: true,
            width: 90,
        },
        // {
        //     field: "action",
        //     headerName: "Action",
        //     renderCell: (params) => {
        //         return (
        //             <div className="action-btns">
        //                 <i className="fa-regular fa-edit" onClick={() => navigate(`user/${params.row.id}`)}></i>
        //                 <i className="fa-regular fa-trash-can" onClick={() => handleDelete(params.row.id)}></i>
        //             </div>
        //         );
        //     },
        //     width: 90,
        // },
    ];
    return (
        <>
            <div className="Products flex-column">
                <div className="head space-between">
                    <h1>Products</h1>
                    <button className="btn btn-primary add" onClick={() => setAddUser(true)}>
                        Add New User
                    </button>
                </div>
                <DataTable rows={products} columns={columns} />
            </div>
            {/* {addUser && <AddUser setAddUser={setAddUser} addUser={addUser} />} */}
        </>
    );
}

export default Products;
