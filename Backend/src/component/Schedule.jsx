import React, { useEffect, useState } from 'react';
import * as Icon from 'react-icons/fa';
import * as Icons from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import "./Schedule.css";
import DatePicker from "react-date-picker";


const Schedule = () => {
    const navigate = useNavigate();
    const [newtaskdata, setNewTaskData] = useState([]);
    const [userData, setuserData] = useState();




    useEffect(() => {
        axios.get("http://localhost:4000/task")
            .then(async (res) => {
                const taskData = await res.data;
                //    console.log(taskData);
                setNewTaskData(taskData);

            }).catch((err) => console.log(err));

    }, []);
    // console.log(newtaskdata);

    // get all task data with filter via date

    const [value, onChange] = useState(new Date());

    let seldate = value.toLocaleDateString()

    let fliterList = newtaskdata.filter(row => {
        let newdate = row.date;
        let d = new Date(newdate)
        let da = d.toLocaleDateString()
        if (da == "All") {
            return (row)
        }
        else {
            return (da == seldate)
        }

    })




    const deleteData = (_id) => {
        axios.delete(`http://localhost:4000/task/${_id}`)
        alert("Data is deleted");

        const filData = userData.filter((row) => {
            return (
                row._id !== _id
            )
        })
        setuserData(filData);

    }

    return (
        <>
            <div className='main'>


                <div className='top'>
                    <button className='plusSquare' onClick={() => navigate("/categories")}><Icon.FaBars size={40} /></button>

                    <h1 className='title'>Schedule</h1>
                    <button className='plusSquare' onClick={() => navigate("/task")}><Icon.FaRegPlusSquare size={40} /></button>
                </div>
                <div className="fil">
                    <DatePicker onChange={onChange} value={value} />
                </div>
                {

                    fliterList.map((row) => {
                        // for gating time
                        // const today = row.date
                        // const D =  new Date(today);
                        // const  time = D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
                        // console.log(row)
                        const newDate = row.date
                        const d = new Date(newDate);
                        // console.log(newDate);
                        // const MonthVal = D.toLocaleString("en-us", { month: "long" });
                        // const date = D.getFullYear();
                        // const DateDay = D.getDate();



                        return (
                            <>
                                <div className="main-2">

                                    <div className='dates'>
                                        <div className="date-box">
                                            <p>{d.getHours()}:{d.getMinutes()}</p>
                                        </div>
                                    </div>


                                    <div className='names'>
                                        <h3 className='task'>{row.taskName}</h3>
                                        <h5>{row.categoriesName}

                                            {/* <span class="badge bg-primary rounded-pill">14</span> */}

                                        </h5>

                                        {/* <p>{MonthVal}</p> */}
                                        {/* <p>{date}</p> */}
                                    </div>
                                    <div className="edit">
                                        <button className='detbtn' onClick={() => deleteData(row._id)}><Icon.FaTimes />Delete</button>
                                        <button className='editbtn' onClick={() => navigate(`/edit/${row._id}`)}><Icon.FaPenSquare />Edit</button>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>

        </>
    );
};

export default Schedule;
