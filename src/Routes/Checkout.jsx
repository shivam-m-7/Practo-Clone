
import React, { useState } from 'react';
import "../checkout.css"
import MobileNumber from './MobileNumber';
import Form from '../Components/Form';

function Checkout() {
const [s,setS]=useState(true);

const upi=()=>{
    setS(false);
}
const card=()=>{
    setS(true);
}

    return (
        <div>
             <div id="flex_u">

<div id="img_u">
    <img src="https://www.bellanaija.com/wp-content/uploads/2015/08/World-Bank-logo.jpg" alt="World-Bank-logo" onClick={card}/>
    <img src="https://1.bp.blogspot.com/-PIHlQoDf33M/XRhoGQU1SHI/AAAAAAAAARQ/_Qc_aA4Sxa8-YYaYThenUrSe5CTl5NjRACLcBGAs/s1600/Public%2Bor%2BPrivate%2BSector%2BKe%2BAll%2BIndian%2BBanks%2BName%2BKi%2BList.png"
        alt="bankimage3" onClick={card}/>
    <img src="https://i2.wp.com/innovation-village.com/wp-content/uploads/2020/01/photos-of-Nigerian-Banks.jpg?fit=1024%2C610&ssl=1"
        alt="bankimage1" onClick={card}/>
    <img src="https://th.bing.com/th/id/OIP.KUB7vl5HrU-yxi626hP5ugHaDb?pid=ImgDet&rs=1" alt="bankimage2" onClick={card}/>
</div>
<div>
    <form action="">
       {s?<Form />:<MobileNumber />}
    </form>
</div>
<div id="interval">
    <img src="https://cdn.kalingatv.com/wp-content/uploads/2020/07/upi-payment.jpg" alt="upi" />
    <div id="">
        <div id="phonepay"><img
                src="https://i0.wp.com/www.plansinfo.com/blog/wp-content/uploads/2018/01/phonepe-e1520537823958.png?fit=200%2C200&ssl=1"
                alt="upi1st" onClick={upi}/></div>
        <div id="paytm"> <img
                src="https://th.bing.com/th/id/R.7891803c3389e055c54dd7441adec0e9?rik=r66Adr4%2bYa0rYw&riu=http%3a%2f%2ffeedmystartup.com%2fwp-content%2fuploads%2f2018%2f04%2fPaytm_logo-300x164.png&ehk=ApQRtA7cklIcGWtW4sUuujcj6ywaWWxA7%2bgAUl6e%2buU%3d&risl=&pid=ImgRaw&r=0"
                alt="upi2nd" onClick={upi}/></div>
        <div id="amazon"> <img
                src="https://www.bing.com/th?id=OIP.ciELcTgvSog9sUAKVrDlIQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt="upi3rd" onClick={upi}/></div>
        <div id="gpay">
            <img src="https://th.bing.com/th/id/OIP.t0r0NAChbqY1pM-nbBq3AwHaHZ?pid=ImgDet&rs=1" alt="upi4th" onClick={upi}/>
        </div>
    </div>
</div>
</div>
            
        </div>
    )
}

export default Checkout;