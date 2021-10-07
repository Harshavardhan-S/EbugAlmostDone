import { React,  Component } from 'react';

import { Link } from 'react-router-dom';



import bug from "../bug1.png"



const NavigateLogin = () => {



 



    return (

        <div class="">

           <center>   <img src={bug} className="center"

       style={

         {  height : "450px",

            width : "750px",

            marginTop : "-8%"

         }

       } alt="home img" /> </center>

       



     <table class="table table-bordered table-striped container">  

      

        <tbody>

    <tr>

    <td>

     <div className='mb-2 d-flex justify-content-center align-items-center'>

     <Link to={"/admin-login"} className="btn btn-lg btn-primary" >Admin Login</Link>

     </div>

    </td>

   </tr>



   <tr>

<td>

<div className='mb-2 d-flex justify-content-center align-items-center'>

<Link to={"/customer-login"} className="btn btn-lg btn-primary" >Customer Login</Link>

</div>

</td>

</tr>



<tr>

<td>

<div className='mb-2 d-flex justify-content-center align-items-center'>

<Link to={"/staff-login"} className="btn btn-lg btn-primary" >Staff Login</Link>

</div>

</td>

</tr>



   </tbody>



</table>



</div>



);

}



export default NavigateLogin