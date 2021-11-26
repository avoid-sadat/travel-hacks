import React from 'react';
import './Testo.css'
const Testo = () => {
    return (
      <center>
     <h1 style={{color:'goldenrod'}}>Our Happy Clients</h1> 
     <div className="row"> 
	<div className="column"> 
        <div className="block">
        	{/* <!-- Add user icon to the counter --> */}
		<p><i className="fa fa-user"></i></p> 
		<h3> 65+ </h3> 
		<p> Projects </p> 
	</div> 
        </div>
        
	<div className="column"> 
        <div className="block">
            	{/* <!-- Add book icon to the counter --> */}
		<p><i className="fa fa-book"></i></p> 
		<h3> 75k+ </h3> 
		<p> Articles </p> 
        </div>
	</div> 
        
	<div className="column"> 
        <div className="block">
           	{/* <!-- Add smilie icon to the counter --> */}
		<p><i className="fa fa-smile-o"></i></p> 
		<h3> 150+ </h3> 
		<p>Clients </p> 
        </div>
	</div> 

	<div className="column"> 
        <div className="block">
           	{/* <!-- Add coffee cup icon to the counter --> */}
		<p><i className="fa fa-coffee"></i></p> 
		<h3> 100+ </h3> 
		<p> Meetings </p> 
        </div>
	</div> 
    </div> 

</center>
    );
};

export default Testo;