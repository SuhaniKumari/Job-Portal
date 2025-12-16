import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
export default function Login() {
    const [user, setUser] = useState({
      
        email: "",

        password: "",




    });
    const navigate = useNavigate();
    const handleInput = (e) => {
       console.log(e);
       let name = e.target.name;
       let value = e.target.value;

       setUser({
        ...user,
        [name] : value,  //dynamic value of name

       })
    };
//handling form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(user);
    try {
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if(response.ok){
            const res_data = await response.json();
                console.log("res  login from server", res_data);
            setUser({ email: "", password: ""});
            toast.success("User Login Successfully");
            navigate("/candidatedashboard");
        }
        console.log(response);
    } catch (error) {
        console.log("login", error);
    }
};

    return (
        <div>
            <Navbar></Navbar>

            <div className ="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className ="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className ="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className ="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className ="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className ="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor ="email" className ="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className ="mt-2">
                                <input id="email" name="email" type="email" value={user.email} onChange={handleInput} autoComplete="email" required className ="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className ="flex items-center justify-between">
                                <label htmlFor ="password" className ="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className ="text-sm">
                                    <a href="#" className ="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className ="mt-2">
                                <input id="password" name="password" type="password" value={user.password} onChange={handleInput} autoComplete="current-password" required className ="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className ="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className ="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link to="/register" className ="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register User</Link>
                    </p>
                </div>
            </div>


        </div>



    )
}
