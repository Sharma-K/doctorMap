import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {

    useEffect(()=> {
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/home'
        }
    })

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        hospital: "",
        phone: 0,

    })
    const changeHandler = (event) => {

        const { value, name } = event.target;



        setUser({
            ...user,
            [name]: value
        })

    }


    async function submitHandler(e){
        e.preventDefault();

        // const result = await (await axios.post('/register', ))
        const result = await (await axios.post('/login',user)).data;

    if(result)
    {
        window.location.href='/home';
    }
    else{
        window.location.href='/';
    }
    }


    return(
        <div>
            Login
            <form action="" onSubmit={submitHandler}>
                <input type="name" placeholder="name" name="name" onChange={changeHandler} />
                <input type="email" placeholder="email" name="email" onChange={changeHandler}  />
                <input type="password" placeholder="password" name="password" onChange={changeHandler}  />
                <input type="hospital" placeholder="hospital" name="hospital" onChange={changeHandler} />
                
               
                <button>Submit</button>
            </form>

            New to account?<Link to="/register" >Register</Link> 
        </div>
    )
}

export default Login;