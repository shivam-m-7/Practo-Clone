
import React from 'react';
import { useState } from 'react';
import Otp from '../Components/Otp';

function MobileNumber() {
    const [mno,SetMno]=useState(0);
    const [otp,setOtp]=useState();

    const generateOtp=()=>{
        setOtp(Math.floor(Math.random()*(9998-5897+1)+5897))
    }

    // console.log(otp);

    return (
        <>
            <input  placeholder='Enter Mobile Number'  onChange={(e)=>SetMno(e.target.value)} />
            <button disabled={mno.length==10&&(+mno>0)?false:true}  onClick={generateOtp}>Click</button>
            {
                otp?<Otp otp={otp} generateOtp={generateOtp} />:<></>
            }   
        </>
    );
}

export default MobileNumber;