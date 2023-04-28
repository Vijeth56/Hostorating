import React from "react";
import './CollegeInfo.css';
import ReviewBox from "./ReviewBox";
import ReviewPost from "./ReviewPost.js";
function CollegeInfo(props) {
    return (
        <>
            <div className="college-image" style={{ backgroundColor: 'aqua' }}>
                <h1>{props.collegeName}</h1>
                <h3 style={{ marginLeft: 'auto' }}>{props.collegeCity}</h3>
            </div>
            <div className="row">
                <div className="col-lg-8">
                <div>
                    Reviews
                </div>
                

                <ReviewBox />
                <ReviewPost />
                </div>
                <div className="col-lg-4 about-college">
                <div className="row">
                    <div className="col-lg-12 info-college">
                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '80%' }}>
                        <div className="card-header">About College</div>
                            <div className="card-body">
                                <h5 className="card-title">{props.collegeName}</h5>
                                <p className="card-text">{props.discription}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default CollegeInfo;