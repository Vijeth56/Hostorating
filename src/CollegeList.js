import React from 'react';
import './CollegeList.css';
import CollegeCard from './CollegeCard';

function CollegeList() {
  return (
    <div className='row college'>
        <CollegeCard collegeName = "BMS College Of Engineering" collegeCity = "Bangalore"/>
        <CollegeCard collegeName = "RV College Of Engineering" collegeCity = "Bangalore"/>
        <CollegeCard collegeName = "Ramaiah Institute of Technology" collegeCity = "Bangalore"/>
        <CollegeCard collegeName = "PES university " collegeCity = "Bangalore"/>
        <CollegeCard collegeName = "Dayananda Sagar college of engineering" collegeCity = "Bangalore"/>
    </div>
  );
}

export default CollegeList;
