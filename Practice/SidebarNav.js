import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // You can create your own CSS file for styling

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
// console.log(sidebarOpen)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // console.log(sidebarOpen)
    console.log(!sidebarOpen)
  };

  return (
   <div className={`d-flex ${sidebarOpen ? '' : 'toggled'}`} id="wrapper">
   {/* Sidebar */}
   <div className='bg-dark border border-5 border-danger'>
   <div className="bg-light border-right" id="sidebar-wrapper">
     {/* <div className="sidebar-heading">Sidebar</div> */}
     <i class="fa-solid fa-bars fa-2x ml-2" onClick={toggleSidebar}></i>

     {
      sidebarOpen ?
     <div className="list-group list-group-flush  ">
       <a href="#" className="list-group-item list-group-item-action">D</a>
       <a href="#" className="list-group-item list-group-item-action">P</a>
       <a href="#" className="list-group-item list-group-item-action">M</a>
       <a href="#" className="list-group-item list-group-item-action">S</a>
     </div>:
     <div className="list-group list-group-flush">
       <a href="#" className="list-group-item list-group-item-action ">Dashboard</a>
       <a href="#" className="list-group-item list-group-item-action">Profile</a>
       <a href="#" className="list-group-item list-group-item-action">Messages</a>
       <a href="#" className="list-group-item list-group-item-action">Services</a>
     </div>
     }
      
   </div>
   </div>
   {/* /Sidebar */}

   {/* Page Content */}
   <div id="page-content-wrapper">
   
     <div className="container-fluid">
       <h1 className="mt-4">Content Goes Here</h1>
       <p>This is an example of a Bootstrap side navbar with React.js.</p>
     </div>
   </div>
   {/* /Page Content */}
 </div>

  );
}

export default App;
