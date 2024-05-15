import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => { 
  //courses naam ke variable ke andr hmne data store krwa lia hai
  const [courses, setCourses] = useState(null);
  //loading naam ke variable ke andr hmne data stor krwa liya hai
  const [loading, setLoading] = useState(true);
  //category naam ke variable ke andr hmne filter me set kiya hua data store kra liya hai aur initially all wale category set hai
  const [category, setCategory] = useState(filterData[0].title);
//data ko leke ayenge aur usko json format me convert krk output me store krdenge
//error hua to toast show krenge 
//jbtk ye kaam hora hoga tbtk loading display krenge
//jaisi data ajayega vaisi loading htake ui me render krdenge
  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Something went wrong");
    }
    setLoading(false);
  }
//useEffect hook ko use krk hum apiUrl ko fetch krenge 
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
