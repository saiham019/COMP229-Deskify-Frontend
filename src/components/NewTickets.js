import React from 'react'
import Navbar from './Navbar';


export default function NewTickets() {
  return (
    <div style={{backgroundColor:'rgb(183, 56, 120)'}} >
        <Navbar/>

       <center> 

        <div style={{backgroundColor:'rgb(237, 201, 219)', height: '700px', width: '600px'}}>
            <h1>Create a new ticket</h1>
            <label> Title: </label>
            <br></br>
            <input type='text' />
            <br></br>

            
            
            <label> Description  </label>
            <br></br>
            <textarea rows="10" cols="50"> 

            </textarea>
            <br></br>
            <button type="button" class="btn btn-success">Submit</button>




            </div>




       </center>

      
    </div>
  )
}
