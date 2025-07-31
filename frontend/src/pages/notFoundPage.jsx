import React from 'react';
import OtherLayout from "../layout/otherLayout.jsx";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <OtherLayout>
            <div className={'text-center h-100'}>
                <img className={'h-75 '} src="/notFound.svg" alt="page not found"/>
                <br/>
                <Link to={'/'} className={'btn btn-primary'}>Go To Home</Link>
            </div>
        </OtherLayout>
    );
};

export default NotFoundPage;