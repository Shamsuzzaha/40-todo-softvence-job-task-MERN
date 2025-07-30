import React from 'react';
import Navbar from "./navbar.jsx";
import NameHeader from "./nameHeader.jsx";

const DashLayout = ({children}) => {
    return (
        <div>
            <div
                className="d-flex align-items-center justify-content-between px-3"
                style={{
                    height: '30vh',
                    background: 'linear-gradient(to right, #000000 0%, #222222 60%, #eeeeee 100%)'

                }}
            >
                <Navbar />
                <img src="/image1.svg" alt="Logo" style={{ height: '100%' }} />
            </div>

            <div>
                <NameHeader/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashLayout;