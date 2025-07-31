import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailLayout from "../layout/detailLayout.jsx";
import taskAPI from "../APIStore/taskAPI.js";

const DetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        createTaskRequest,
        getTaskByIdRequest,
        updateTaskRequest,
        deleteTaskRequest
    } = taskAPI();

    const [formData, setFormData] = useState({
        category: "",
        role: "",
        status: "",
        endDate: ""
    });

    const categoryOptions = [
        "Arts and crafts",
        "Family",
        "Friends",
        "Nature",
        "Meditation",
        "Sports"
    ];

    const statusOptions = [
        "Ongoing",
        "Pending",
        "Colaboration",
        "Done"
    ];

    useEffect(() => {
        if (id) {
            (async () => {
                const res = await getTaskByIdRequest(id);
                if (res?.status === "success") {
                    setFormData(res.data);
                }
            })();
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (id) {
            await updateTaskRequest(id, formData);
        } else {
            await createTaskRequest(formData);
        }
        navigate("/");
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this task?")) {
            await deleteTaskRequest(id);
            navigate("/");
        }
    };

    return (
        <DetailLayout>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>{id ? "Task Detail" : "Create a New Task"}</h5>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-secondary btn-sm"
                >
                    ← Back
                </button>
            </div>

            <div className="mb-4">
                {/* Category */}
                <div className="mb-3 row align-items-center">
                    <label className="col-sm-2 col-form-label">
                        <img src="/categoryIcon.svg" alt="Category" style={{ width: 24, height: 24 }} />
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Select Category</option>
                            {categoryOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Role */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Role"
                        className="form-control"
                    />
                </div>

                {/* End Date */}
                <div className="mb-3">
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate?.split("T")[0] || ""}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                {/* Status */}
                <div className="mb-3">
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select Status</option>
                        {statusOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-between mt-4">
                    {id && (
                        <button
                            onClick={handleDelete}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    )}
                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary ms-auto"
                    >
                        {id ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </DetailLayout>
    );
};

export default DetailPage;
