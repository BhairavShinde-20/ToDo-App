import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Addnewcategories.css"


const Addnewcategories = () => {

    const navigate = useNavigate();
    const [categoriesName, setCategories] = useState();



    const submitCategories = (e) => {
        e.preventDefault();


        const categoriesObj = {
            categoriesName
        }
        console.log(submitCategories);
        axios.post("http://localhost:4000/categories", categoriesObj);
        setCategories("");
        alert("Categories is Added");
        navigate("/categories")

    }


    return (
        <>
            <div className="con">
                <div className="content">
                    <form onSubmit={submitCategories}>
                        <label>Add New Categories</label>
                        <input className='in' type="text" placeholder='Enter New Categories '
                            onChange={(e) => setCategories(e.target.value)} value={categoriesName} />
                        <div className="subm">
                            <button className='sub' type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Addnewcategories;