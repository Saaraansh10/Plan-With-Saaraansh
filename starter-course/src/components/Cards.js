import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
  //courses ka saaraaa data milgya
    let courses = props.courses;
    let category = props.category;
    //starting me koi bhi course liked ni hai
    const [likedCourses, setLikedCourses] = useState([]);
    //saare courses ke data ko ek single allCourses array ke andr daalke dera hai
    function getCourses() {
      //agr category all hoga to saare cards dikhaunga
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array store krunga  
            return courses[category];      
        }

    }
//cards ke liye bhi map function lgayenge taaki saare cards ek baar bna skte
//hr ek course ke liye card krna hai isliye map krre 
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
