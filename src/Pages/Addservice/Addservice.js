import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addservice.css'



const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset();
                }
        })
    }

    return (
        <div className='addservice'>
            <h1>This is service Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 30 })} placeholder="Name"/>
                <textarea {...register("Description") } placeholder="Descriptions" />
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="Img URL"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;