import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";
import ScalingLogo from "../Pages/SharedSection/ScalingLogo/ScalingLogo";

const Root = () => {
    return (
        <div className="container mx-auto relative">
            <Header></Header>
            <Outlet></Outlet>
            <ScalingLogo></ScalingLogo>
        </div>
    );
};

export default Root;