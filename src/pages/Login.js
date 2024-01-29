import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { loginUser } from "../store/userSlice";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";


export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {

        if(user.loggedIn) navigate('/home')
      }, [user, navigate])
     

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Logging on")
        // const text = inputRef.current.value
        if (formData.email === ""){
        }else{
            dispatch(loginUser(
                {
                    email: formData.email,
                    password: formData.password
                }
            ))
        }
    }

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <div className="flex items-center justify-center h-screen">
      <div className="border w-1/3 rounded overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-semibold text-gray-700 mt-3">Login</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={formData.email} required onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" value={formData.password} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div className='mt-4'>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}