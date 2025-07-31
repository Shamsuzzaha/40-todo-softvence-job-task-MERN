import React from 'react';
import userAPI from "../APIStore/userAPI.js";
import taskAPI from "../APIStore/taskAPI.js";

const NameHeader = () => {
    const {fullName} = taskAPI()


    return (
        <div className={'my-3 px-3'}>
           <h4 className={'text-white'}>Hi {fullName}</h4>
            <h3 className={'text-white fw-bold'}>Welcome to DashBoard</h3>
        </div>
    );
};

export default NameHeader;