import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editcat = () => {
    const { userID } = useParams();
    const navigate = useNavigate();


    const [categoriesName, setCategories] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/categories/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                // console.log(rawData);
                setCategories(rawData.categoriesName)
            }).catch((err) => console.log(err));

    }, [])

    const submitCategories = (e) => {
        e.preventDefault();


        const categoriesObj = {
            categoriesName
        }
        console.log(submitCategories);
        axios.put(`http://localhost:4000/categories/${userID}`, categoriesObj);
        alert("Categories is updated");
        navigate("/categories")

    }
    console.log(submitCategories);

    return (
        <>
            <div className="con">

                <div className="content">
                    <form onSubmit={submitCategories}>
                        <label>Update Categories</label>
                        <input className='in' type="text" placeholder='Enter Your Categories Name'
                            onChange={(e) => setCategories(e.target.value)} value={categoriesName} />
                        <div className="subm"><button className='sub' type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Editcat;