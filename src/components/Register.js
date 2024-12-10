import React,{useState} from 'react';
import axios from 'axios';
// import "./Signupstyle.css";
function Register(){

    
    const[values,setValues]=useState({name:" ",email:" ",password:" "})

    const handleChange=(e)=>{
        const{name,value}=e.target

        setValues({...values,[name]:value});
    }
console.log(values);


    
      const handleClick = (e) => {
   e.preventDefault();
         axios.post("http://localhost:8082/Register",values)
         .then(res=> console.log("sucess"))
         .catch(err=>console.log(err));

        }
    
        //   .then((response)=>{window.alert(JSON.stringify(response,values))
    //        window.location.reload();
    //   })
    //       .catch(err=>console.log(err))
    //     }
       
    

return( 

    <body className='body'>

        <div className='con'>
            <div className='left'> <h1>Welcome pack !</h1>
            

            <p className='para'>

                Welcome back! <br></br>we are so happy to have you here.<br></br>
                it's great to see you again.<br></br>
                we hope you had  safe and enjoyable<br></br> time away.
            </p>
            <button className='bn' onClick={handleClick}>No acount yet? Sign up</button>


            </div>
    <div className="container">
        
    

    <h1 className='header'>SIGN UP</h1>

    <div className="inputbox">
    <i className="fa fa-user"></i>
  <label for="">User Name</label>
  <input type="text"onChange={handleChange}value={values.name}name="name" required/>
 
</div>


    <div className="inputbox">
        
       
    <i className="fa fa-envelope"></i>
    <label for="">email</label>
    <input  type="email"  onChange={handleChange}  name='email' value={values.email} required></input>
    
    </div>

    <div className="inputbox">
       
    <i className="fa fa-lock"></i>
    <label for="">password</label>
        
    <input label="password" onChange={handleChange} name='password' value={values.password} ></input>
    
    </div>
    

    
    

   
    <button className='bn' onClick={handleClick}>Sign Up</button>

    </div>
    </div>
</body>
    





)
}
export default Register;
