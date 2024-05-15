import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
//hr ek card ko ek course ka data miljayega
const Card = (props) => {
    let course = props.course;
    //kon konse courses liked hai vo stored hua hai likedCourses naam ke variable me 
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        //liked courses ke andr pehle se id padi hui hai mtlb vo liked hai usko htana hai
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) ) );
            //toast dikhayenge removed wala
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se to purani wali state plus course id add krenge
                setLikedCourses((prev) => [...prev, course.id]);
            }
            //succesfully wala toast show krenge
            toast.success("Liked Successfully");
        }
    }
    //image
    //button ke andr icon hai heart wala
    //heading ya p tag course ke title ke liye
    //description course ke description ke liye
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
