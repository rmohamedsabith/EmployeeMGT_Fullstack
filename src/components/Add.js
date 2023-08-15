import React from 'react'
import { Link } from 'react-router-dom'



export const Add = ({register,cancel,fname,setFname,lname,setLname,email,setEmail,id,setId}) => {
  return (
    <div className='ADD'>
      <br></br>
      <Link to="/"><button className='btn btn-outline-warning button fs-3 fw-bolder'>Back</button></Link>
      <br></br>
      <div className="container mt-5 " id='border'>
        <h1>Register Employee</h1>
        <form >
        <div className="form-floating">
          <input type='text'  className="form-control" id="id" value={id} onChange={(e)=>{setId(e.target.value)}} hidden />
        
          </div>
        <div className="form-floating">
          
          <input type='text'  placeholder="ds" className="form-control f" name="Fname" value={fname} onChange={(e)=>{setFname(e.target.value)}} />
          <label htmlFor="Fname">First Name</label>
          </div>
          <div className="form-floating">          
          <input type='text' name="Lname"  className="form-control f" value={lname} onChange={(e)=>{setLname(e.target.value)}} placeholder='Last Name'/>
          <label htmlFor="Lname">Last Name</label>
          </div>
          <div className="form-floating">          
          <input type='email' name="Email" className="form-control f" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
          <label htmlFor="Email">Email</label>
            </div>

 

            <br></br>

          <button className="btn btn-success button" onClick={register} >Register</button>
          <button className="btn btn-danger button" onClick={cancel} >Cancel</button>
        </form>
      </div>
    </div>
  )
}
