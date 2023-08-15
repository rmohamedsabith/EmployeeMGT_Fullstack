import { Route, Routes, useNavigate } from "react-router-dom";
import { Employee } from "./components/Employee";
import { Footer } from "./components/Footer";
import { Employeetable } from "./components/Employeetable";
import { Update } from "./components/Update";
import { Add } from "./components/Add";
import { Missing } from "./components/Missing";
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const[id,setId]=useState("")
  const[fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[email,setEmail]=useState("")
  const[datas,setDatas]=useState([])
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  const nav=useNavigate()
  const load=async()=>{
    try {
      const response=await axios.get("http://localhost:8080/api/v1/employee");
      setDatas(response.data);

    } catch (error) {
      console.log(error);
    }
    

  }

  

  useEffect(
    ()=>{
      load();
    }
  ,[])
const edit=(data)=>{
    setFname(data.f_name);
    setLname(data.l_name);
    setEmail(data.email);
    nav('/edit');
}
const del=async(data)=>{
  try {
    const response=await axios.delete("http://localhost:8080/api/v1/employee/delete/"+data.id);
    window.alert(response.data.f_name);
    load();
  } catch (error) {
    console.log(error);
  }
  

}

const register=async (event)=>{
  event.preventDefault();
 try {
  const Json={
    f_name:fname,
    l_name:lname,
    email:email

  };
  if(Json.f_name!==""&&Json.l_name!==""&&Json.email!=="")
  {
    const response=await axios.post("http://localhost:8080/api/v1/employee/save",
  Json
  );
  load();
  setFname("");
  setLname("");
  setEmail("");
  nav('/');
  window.alert(response.data.f_name+" is Registered.");}
  else{
    window.alert("Field is not completed");
  }
 } catch (error) {
   window.alert(error);
 }

}

const update=async(event)=>{
  event.preventDefault();
  try {
   const Json={
     f_name:fname,
     l_name:lname,
     email:email
 
   };
   if(Json.f_name!==""&&Json.l_name!==""&&Json.email!=="")
   {
     const response=await axios.put("http://localhost:8080/api/v1/employee/update",
     {
      id:data.id,
      f_name:fname,
      l_name:lname,
      email:email
  
    }
   );
   load();
   setFname("");
   setLname("");
   setEmail("");
   nav('/');
   window.alert(response.data.f_name+" is Updated.");}
   else{
     window.alert("Field is not completed");
   }
  } catch (error) {
    window.alert(error);
  }
}

const cancel=(event)=>
{
  event.preventDefault();
  setFname("");
  setLname("");
  setEmail("");
}

  return (
    <div className="d-flex flex-column min-vh-100">
      <Employee/>

      <Routes>
         <Route path="/" element={<Employeetable datas={datas} Data={data} setData={setData} edit={edit} del={del} search={search} setSearch={setSearch}/>}/>
         <Route path="/edit" element={<Update fname={fname} lname={lname} email={email} setFname={setFname} setLname={setLname} setEmail={setEmail} update={update} cancel={cancel} id={id} setId={setId}/>}/>
         <Route path="/add" element={< Add fname={fname} lname={lname} email={email} setFname={setFname} setLname={setLname} setEmail={setEmail} register={register} cancel={cancel} id={id} setId={setId}/>}/>
         <Route path="*" element={<Missing/>}/>
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
