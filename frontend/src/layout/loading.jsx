import React, { useEffect, useState } from 'react';

const Loading = ({ loading }) => {
    const [countdown, setCountdown] = useState(25);

    useEffect(() => {
        if (!loading) return;

        setCountdown(25); // Reset when loading starts

        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [loading]);

    if (!loading) return null;

    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-transparent border-0 shadow-none d-flex justify-content-center align-items-center">
                    <div
                        className="spinner-border text-light"
                        role="status"
                        style={{ width: '3rem', height: '3rem' }}
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="text-white text-center mt-3">
                        Connecting to the backend render server...
                        <br />
                        Count Down {countdown} second(s) approximately.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
