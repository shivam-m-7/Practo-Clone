
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Otp({otp,generateOtp}) {
    const [val,setValue]=useState();
    useEffect(()=>{
        set();
    },[val]);

   const set=()=>setTimeout(()=>{
        setValue(otp);
    },5000)

const resend=()=>{
    setValue("");
    generateOtp();
}

    return (
        <div>
            <input  placeholder='Enter Otp' value={val} type="number"/>
            <Link to="/payment"><button>CLick</button></Link> 
            <button onClick={resend}>Resend Otp</button>
        </div>
    );
}

export default Otp;