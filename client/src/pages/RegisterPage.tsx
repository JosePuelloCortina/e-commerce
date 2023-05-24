import React, { useState, useEffect } from 'react'
import { useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerRequest } from '../api/auth'
import Alert from "../components/Alert";
import { AxiosError } from 'axios';

type RegisterUser = {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

function RegisterPage() {
  
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors }, getValues, setValue } = useForm<RegisterUser>();
  const password = React.useRef<string>('');
  const [alert, setAlert] = useState<{ message: string; type: 'green' | 'yellow' | 'red' } | null>(null);
  
  const onData = async (data: RegisterUser) => {
    try {
      const { name, last_name, phone, email, password, role } = data
      await registerRequest(name, last_name, phone, email, password, parseInt(role))
      setAlert({ message:"Registro con exito", type: 'green' })
      setTimeout(function(){navigate('/login')},1500)
      
    }   catch (error: any) {
      if (error instanceof Error) {
        if (error instanceof AxiosError && error.response) {
          const errorMessage = error.response.data.message || 'Error en la solicitud';
          setAlert({ message: errorMessage, type: 'red' });
          console.error(errorMessage, 'este es el error del servidor');
        }
      }
    }
  }
  
  const validatePasswordConfirmation = (value: string) => {
    const password = getValues('password');
    return value === password || 'Password and Confirm Password do not match.';
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('password', e.target.value);
    setValue('confirmPassword', ''); 
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="/images/shopall-2.png"
              alt="Your Company"
            />
          </a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className='space-y-6' method="POST" onSubmit={handleSubmit(onData)}>
            <div className="relative">
                <div className='relative mt-2 rounded-md shadow-sm'>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Name
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {required: 'Please enter your name'})}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Jonh"
                      />
                    </div>
                      {errors.name && <span className='mt-2 text-pink-600 text-sm'>{errors.name.message}</span>}
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Last Name
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="last_name"
                        {...register("last_name", {required: 'Please enter your Last Name'})}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Wick"
                      />
                    </div>
                    {errors.last_name && <span className='mt-2 text-pink-600 text-sm'>{errors.last_name.message}</span>}
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>

                        </span>
                      </div>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {required: 'Please enter your email'})}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="example@example.com"
                      />
                    </div>
                    {errors.email && <span className='mt-2 text-pink-600 text-sm'>{errors.email.message}</span>}
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Phone
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="number"
                        id="phone"
                        {...register("phone", {required: 'Please enter your Phone Number'})}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="3001234567"
                      />
                    </div>
                    {errors.phone && <span className='mt-2 text-pink-600 text-sm'>{errors.phone.message}</span>}
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Tipo de usuario
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                      </div>
                      <select id="role" {...register("role")} className='block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                        <option value="2">Buyer</option>
                        <option value="3" selected>Supplier</option>
                      </select>
                    </div>
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Password
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="password"
                        maxLength={18}
                        minLength={8}
                        id="password"
                        {...register("password", {required: 'Please enter your password'})}
                        onChange={handlePasswordChange}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Hola123@."
                      />
                    </div>
                    {errors.password && <p className='mt-2 text-pink-600 text-sm'>{errors.password.message}</p>}
                  </label>

                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Confirm Password
                    </span>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="password"
                        maxLength={18}
                        minLength={8}
                        {...register("confirmPassword",{
                          required: 'Please enter Confirm Password',
                          validate: validatePasswordConfirmation
                        })}
                        className="block mb-4 p-2 w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Hola123@."
                      />
                    </div>
                    {errors.confirmPassword && <p className='mt-2 text-pink-600 text-sm'>{errors.confirmPassword.message}</p>}
                  </label>
                </div>
                <div>
                  <button type='submit' className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Save
                  </button>
                </div>
            </div>
            {alert && <Alert message={alert.message} type={alert.type} />}
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterPage