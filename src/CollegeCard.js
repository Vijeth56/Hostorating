import React from 'react';
import './CollegeCard.css';

function CollegeCard(props) {
    return (
        <div>
        <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.collegeName}</h5>
            <p>{props.collegeCity}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default CollegeCard;