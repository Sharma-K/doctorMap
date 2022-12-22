import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {

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
        const result = await (await axios.post('/register',user)).data;
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
            Register
            <form action=""  onSubmit={submitHandler}>
            <input type="name" placeholder="name" name="name" onChange={changeHandler} />
                <input type="email" placeholder="email" name="email" onChange={changeHandler}  />
                <input type="password" placeholder="password" name="password" onChange={changeHandler}  />
                <input type="hospital" placeholder="hospital" name="hospital" onChange={changeHandler} />
                <input type="number" placeholder="phone" name="phone"onChange={changeHandler}/>
                <input type="file" />
                <button>Submit</button>
            </form>

            Already have an account?<Link to="/" >Login</Link> 
        </div>
    )
}

export default Register;