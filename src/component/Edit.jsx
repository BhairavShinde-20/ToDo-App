import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Edit.css"


const Edit = () => {
    const { userID } = useParams();

    const navigate = useNavigate();

    const [taskName, setTaskName] = useState();
    const [date, setDate] = useState();
    const [categoriesName, setCategoriesName] = useState();
    const [editcat, setEditCat] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/task/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                // console.log(rawData);
                setTaskName(rawData.taskName);
                setCategoriesName(rawData.categoriesName);

            }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4000/categories")
            .then((res) => {
                const editCat = res.data;
                // console.log(editCat);
                setEditCat(editCat);
            }).catch((err) => console.log(err));

    }, [])
    // console.log(editcat);

    const submitTask = (e) => {
        e.preventDefault();

        const taskObj = {
            taskName,
            date,
            categoriesName
        }
        // console.log(submitTask);
        axios.put(`http://localhost:4000/task/${userID}`, taskObj);
        alert("Task is updated");
        navigate("/schedule")

    }


    return (
        <>
            <div className="Update-box">
                <h2>Update Your Task</h2>
                <form onSubmit={submitTask}>
                    <div className="user-box">
                    <input type="text" placeholder="update task" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                    </div>

                    <div className="user-box">

                    <input  type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>

                    <select onChange={(e) => setCategoriesName(e.target.value)} value={categoriesName}>

                        <option>Select Categories</option>
                        {
                            editcat.map(row => {
                                return (
                                    <option>{row.categoriesName}</option>
                                )
                            })
                        }</select>
                        <div className="aa">
                    
                    <button type='submit' className='bb'>Update</button></div>
                </form>
            </div>
        </>
    );
};

export default Edit;