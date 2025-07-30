import React from 'react';
import Navbar from "./navbar.jsx";

const DetailLayout = ({children}) => {
    return (
        <div>
            <div
                className="d-flex align-items-center justify-content-between px-3"
                style={{
                    height: '10vh',
                    background: 'linear-gradient(to right, #000000, #eeeeee)'
                }}
            >
                {/*<Navbar />*/}
                <img src="/image1.svg" alt="Logo" style={{ height: '100%' }} />
            </div>

            <div>
                {children}
            </div>
        </div>
    );
};

export default DetailLayout;