import React from 'react'
import bug from "../bug1.png";
import { Link } from 'react-router-dom';
const StartPage = () => {

return (

<>

<div className="bg_image_home">
<div>
<section id="header" className="d-flex align-items-center">
<div className="container-fluid nav_bg">
<div className="row">
<div className="col-20 mx-auto">
<div className="row">
<div className="col-md-7 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1 className="ml-3">
Welcome to Bug Tracking System
</h1>
<h5 className="my-3 ml-3"> Ebug Tracker is a system which aims in helping the customers resolve their bugs encountered in their projects.</h5>
<h6 className="mt-0 ml-3 text-danger" > Click on 'Get Started' to get into the Application </h6>

<div className="mt-3">

<Link to={"/login"} className="btn btn-lg btn-primary ml-3" >Get Started</Link>

</div>

</div>
<div className="col-lg-5 order-1 order-lg-2 header-img">

<img src={bug} className="img-fluid animated "

       style={

         {  height : "450px",

            width : "750px" 

         }

       } alt="home img" />

</div>

</div>

</div>

</div>

</div>

</section>

</div>

</div>

</>

);

}

export default StartPage