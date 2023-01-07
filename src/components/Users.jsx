import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import UserItem from "./UserItem";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions";
import { useSelector } from "react-redux";
function Users() {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.appReducer.users);
    // const [users, setUsers] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div id="users">
            {users?.map((user, index) => (
                <UserItem key={index} {...user} />
            ))}
        </div>
    );
}

export default Users;
