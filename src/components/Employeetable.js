import React from 'react'
import { Link } from 'react-router-dom'


export const Employeetable = ({datas,Data,setData,edit,del,search,setSearch}) => {
  return (
    <div className='ADD'>
      <br/>
      <Link to="/add"><button className="btn btn-outline-info fs-3 fw-bolder button" >ADD Employee</button></Link>
      <br/>
      <br/>
      <form>
     
        <input className=" form-control form-control-lg" type='search'  value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }} placeholder='Search.....'/>
      </form>
      <br/>
      
      <table className="table table-hover">
        <thead>
          <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.filter((data)=>search===''? data:(data.id).toString().toLowerCase().includes(search.toString().toLowerCase())||(data.f_name).toString().toLowerCase().includes(search.toString().toLowerCase())||(data.l_name).toString().toLowerCase().includes(search.toString().toLowerCase())||(data.email).toString().toLowerCase().includes(search.toString().toLowerCase())).map((data)=>{
              return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.f_name}</td>
                <td>{data.l_name}</td>
                <td>{data.email}</td>
                <td><button className="btn btn-warning" onClick={()=>{
                  setData(data)
                }} onDoubleClick={()=>{
                    edit(Data)
                }} >Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{
                  setData(data)
                }} onDoubleClick={()=>{
                    del(Data)
                }} >Delete</button></td>
              </tr>);
            })
          }
        </tbody>
      </table>

    </div>
  )
}
