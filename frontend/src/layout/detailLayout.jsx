import React from 'react';
import Navbar from "./navbar.jsx";
import NameHeader from "./nameHeader.jsx";

const DetailLayout = ({ children }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* Header Background Section */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100px',
                    zIndex: 0,
                    overflow: 'hidden',
                    background: 'linear-gradient(to right, #000000 0%, #222222 60%, #eeeeee 100%)'
                }}
            >
                <img
                    src="/image1.svg"
                    alt="Logo"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: '100%',
                        opacity: 0.3,
                        zIndex: 0
                    }}
                />

                <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <Navbar />
                </div>
            </div>

            {/* Modal children on top */}
            <div className={''}
                 style={{
                     position: 'fixed',
                     top: '50px',
                     left: 0,
                     right: 0,
                     bottom: '20px',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                     marginBottom: 'auto',
                     width: '90%',
                     backgroundColor: 'white',
                     zIndex: 10,
                     boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                     borderRadius: '8px',
                     overflow: 'auto',
                     padding: '20px',
                 }}

            >
                {children}
            </div>
        </div>
    );
};

export default DetailLayout;
