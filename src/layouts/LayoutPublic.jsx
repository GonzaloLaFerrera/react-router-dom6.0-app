import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <>
            <div className="container">
                <Outlet />
                <footer className="text-center small mt-4 mb-4">Copyright 2023 - Gonzalo La Ferrera</footer>
            </div>
        </>
    );
};

export default LayoutPublic;