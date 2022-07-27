import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
import "./Categories.css";
// import Img from './Img';



const Categories = () => {
    const navigate = useNavigate();

    const [newData, setNewdata] = useState([]);
    const [userData, setuserData] = useState();

//    useEffect(()=>{
//     axios.get("http://localhost:4000/task")
//     .then((res)=>{
//       const taskData = res.data;
//       console.log(taskData); 
//     })
//     .catch((err)=>console.log(err))

//    },[])

    useEffect(() => {
        axios.get("http://localhost:4000/categories")
            .then(async (res) => {
                const backendData = await res.data;
                //  console.log(backendData);
                setNewdata(backendData);
            }).catch((err) => console.log(err));
    }, []);

    // console.log(newData);
    const deleteData = (_id) => {
        axios.delete(`http://localhost:4000/categories/${_id}`)
        alert("Categories is deleted");

        const filData = userData.filter((row) => {
            return (
                row._id !== _id
            )
        })
        setuserData(filData);

    }

    return (
        <>
        {/* <Img/> */}
            <div className='main'>
                <div className='top'>
                    <button
                    className='plusSquare' onClick={() => navigate("/schedule")}><Icon.FaBars size={40} /></button>

                    <h1 className='title'>Categories</h1>
                    <button className='plusSquare' onClick={() => navigate("/addnewcategories")}><Icon.FaRegPlusSquare size={40} /></button>
                </div>
                {
                    newData.map((row) => {
                        return (
                            <>
                                <div className="main-2">
                                    <div className="symbol"><p><Icon.FaDotCircle /></p>
                                    </div>
                                    <div className="catg">
                                        <h3>{row.categoriesName.toUpperCase()}</h3>
                                        {/* <h5>{row.taskName}</h5> */}
                                        </div>
                                    <div className="edit">
                                        <button className='detbtn' onClick={() => deleteData(row._id)}><Icon.FaTimes size={20} /> Delete</button>
                                        <button className='editbtn' onClick={() => navigate(`/editcat/${row._id}`)}><Icon.FaPenSquare size={20} /> Edit</button>
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

export default Categories;