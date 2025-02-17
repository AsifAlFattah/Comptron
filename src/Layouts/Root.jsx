import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedSection/Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto relative">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;