import { Route, Routes } from "react-router-dom";
import Payment from "../Components/Payment";
import Dashboard from "./Dashboard";
import MobileNumber from "./MobileNumber";
import Ghh from "../Components/Ghh"

// import SingleProductPage from "./SingleProductPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} />
        <Route path="/mno" element={<MobileNumber /> } />
        <Route path="/payment" element={<Payment />} />
         <Route path="/ghh"  element={<Ghh /> }/> */}
      </Routes>

    </div>
  )
}

export default AllRoutes;
