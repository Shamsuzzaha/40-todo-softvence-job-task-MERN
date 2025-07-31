import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import userAPI from "../APIStore/userAPI.js";

const Navbar = () => {
    const {logoutRequest} = userAPI()

    const navigate = useNavigate();

    const logoutBtn = async ()=>{
        const res = await logoutRequest()
        if(res.status === 'success'){
            navigate('/login');
        }
    }

    return (
        <div className="container-fluid py-2" style={{ background: 'transparent' }}>
            <div className="row align-items-center">
                {/* Left: Logo (col-2) */}
                <div className="col-2 text-start">
                    <Link to="/">
                        <img src="/tasko.svg" alt="Logo" style={{ height: '20px' }} />
                    </Link>
                </div>

                {/* Center: Tabs (col-8) */}
                <div className="col-8 d-flex justify-content-center gap-4">
                    <Link to="/">
                        <img src="/taskList.svg" alt="Task List" style={{ height: '20px', cursor: 'pointer' }} />
                    </Link>
                    <Link to="/spin">
                        <img src="/spin.svg" alt="Spin" style={{ height: '20px', cursor: 'pointer' }} />
                    </Link>
                </div>

                {/* Right: Person Button (col-2) */}
                <div className="col-2 text-end">
                    <button onClick={()=>logoutBtn()} className="btn btn-sm text-white d-flex align-items-center gap-2 ms-auto">
                        <i className="bi bi-person-circle"></i>
                        <span>Person</span>
                        <i className="bi bi-caret-down-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
