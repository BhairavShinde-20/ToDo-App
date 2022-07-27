import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Task = () => {
    const navigate = useNavigate();


    const [taskName, setTaskName] = useState();
    const [date, setDate] = useState();
    const [categoriesName, setCategoriesName] = useState();
    const[newcatedata,setNewCateData]=useState([]);

// get  categories api for display select option 
    useEffect(() => {
        axios.get("http://localhost:4000/categories")
            .then(async (res) => {
               const cateData = await res.data;
                // console.log(cateData);
                setNewCateData(cateData);
            }).catch((err) => console.log(err));

    }, [])
// console.log(newcatedata);

    const submitTask = (e) => {
        e.preventDefault();

        const taskObj = {
            taskName,
            date,
            categoriesName
        }
        console.log(submitTask);
        axios.post("http://localhost:4000/task", taskObj);
        setTaskName("");
        setDate("");
        setCategoriesName("");

        alert("Task is Added");
        navigate("/schedule")

    }


    return (
        <>
        <div className="Update-box">

            <h2>Add new Task</h2>

            <form onSubmit={submitTask}>
            <div className="user-box">
                <input type="text" className='textp' placeholder="Enter new task" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                {/* <label className='leb'> Enter new task</label> */}
                </div>
                <div className='user-box'>
                 <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} /></div>
                <select onChange={(e) => setCategoriesName(e.target.value)} value={categoriesName}>
                    <option>Select Categories</option>
                   {
                    newcatedata.map(row=>{
                        return(
                            <option>{row.categoriesName}</option>
                        )
                    })
                   }
                </select>
                <div className="aa">
                <button type='submit' className='bb'>Add Task</button></div>
            </form>
            </div>
        </>
    );
};

export default Task;