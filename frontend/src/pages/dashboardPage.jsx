import React, { useEffect, useState } from 'react';
import DashLayout from "../layout/dashLayout.jsx";
import taskAPI from "../APIStore/taskAPI.js";
import { useNavigate } from "react-router-dom";
import userAPI from "../APIStore/userAPI.js";

const DashboardPage = () => {
    const {checkLoginStatus, isLogin} = userAPI()
    const { getTasksRequest, deleteTaskRequest } = taskAPI();
    const navigate = useNavigate();

    const [category, setCategory] = useState('all');
    const [status, setStatus] = useState('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        (async()=>{
            await checkLoginStatus()
        })()
    }, []);

    useEffect(() => {
        if(isLogin===false){
            navigate("/login");
        }
    }, [isLogin]);

    useEffect(() => {
        (async () => {
            const res = await getTasksRequest(category, status);
            if (res?.status === 'success') {
                setData(res.data);
            }
        })();
    }, [category, status]);

    const deleteBtn = async (id) => {
        const confirm = window.confirm("Are you want to delete this task?")
        if(confirm){
            await deleteTaskRequest(id);
            setData(data.filter(task => task._id !== id));
        }
    }

    return (
        <DashLayout>
            <div className="container py-4">
                {/* Top filter row */}
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                    <h4 className="mb-0 me-auto">All Task List</h4>

                    <select
                        className="form-select w-auto"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="arts and craft">Arts & Craft</option>
                        <option value="nature">Nature</option>
                        <option value="family">Family</option>
                        <option value="sports">Sports</option>
                        <option value="friends">Friends</option>
                        <option value="meditation">Meditation</option>
                    </select>

                    <select
                        className="form-select w-auto"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="pending">Pending</option>
                        <option value="colaborative">Colaborative</option>
                        <option value="done">Done</option>
                    </select>

                    <button className="btn btn-primary" onClick={() => navigate('/create-task')}>
                        <i className="bi bi-plus-lg me-1"></i> Add New Task
                    </button>
                </div>

                {/* Task cards */}
                <div className="row">
                    {data.map((task) => (
                        <div className="col-md-4 mb-4" key={task._id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3">
                                            <img
                                                src="/categoryIcon.svg"
                                                alt="task"
                                                className="rounded-circle"
                                                width="50"
                                                height="50"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-1">{task.category}</h5>
                                            <p className="mb-0 text-muted">{task.role}</p>
                                        </div>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => deleteBtn(task._id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>

                                    <div className="d-flex justify-content-between text-muted small">
                                        <div><i className="bi bi-calendar3 me-1"></i> {task.endDate?.split("T")[0]}
                                        </div>
                                        <div><span className="badge bg-secondary">{task.status}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {data?.length ===0 && (
                        <img className={'w-50 mx-auto'} src="/noTask.svg" alt="no task"/>
                    )}
                </div>
            </div>
        </DashLayout>
    );
};

export default DashboardPage;
