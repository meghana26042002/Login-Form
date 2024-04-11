import axios from "axios";
import React, { useEffect, useState } from "react";
import './users.css'
import { MdDelete } from "react-icons/md";

const Users = () => {
    const [users, setUsers] = useState([])
    const getAllusers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/getData")
            if (response?.data) {
                setUsers(response?.data)
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAllusers();
    }, [])


    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/delete-user/${id}`);
            if (response?.data?.msg === "User deleted") {
                // Update the user list after deletion
                getAllusers();
                alert("User deleted successfully.");
            } else {
                alert("Failed to delete user.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while deleting user.");
        }
    }
    return (
        <div className="back">
            <h1 className="line"> All Users Data</h1>
            <div>
                {
                    users.map((item) => {
                        return (
                            <div key={item.id} className="user">
                                <div className="data">
                                    <h2>Name:{item?.name}</h2>
                                    <button onClick={() => deleteUser(item.id)}>
                                        <MdDelete className="delbtn" />
                                    </button>
                                </div>
                                <div className="data" >
                                    <h2>Email_ID:{item.email}</h2>
                                </div>
                                <div className="data">
                                    <h2>Phone_Number:{item?.phone}</h2>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;