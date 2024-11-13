import React, { useRef } from "react";
import myAppContext from "../context/context"
import validator from "validator";
import { useAppDispatch } from "../../redux/store/hooks";
import { ToastFail } from "../../utility/tostify";

import { Link } from "react-router-dom";
import login, { useAuth } from "../hooks/AuthProvider";
export default function LoginComponent() {

     const usernameInputRef = useRef<HTMLInputElement>(null);
     const passwordInputRef = useRef<HTMLInputElement>(null);
     const dispatch = useAppDispatch();
     const { loginForm, setLoginForm } = React.useContext(myAppContext);
     const { passwordVisibility, setPasswordVisibility } = React.useContext(myAppContext);
     const auth = useAuth();

     function fillLoginPassword(event: any): void {
          let text: string = validator.escape(event.target.value);
          if (validator.isEmpty(text)) {
               setLoginForm({
                    ...loginForm,
                    // password: text,
                    passwordError: "لطفا این قسمت را خالی نگذارید",
                    formIsValid: false,
               });
          } else {
               setLoginForm({
                    ...loginForm,
                    // password: text,
                    passwordError: "",
                    formIsValid: true,
               });
          }
     }

     function fillLoginEmail(event: any): void {
          let text: string = validator.escape(event.target.value);
          if (validator.isEmpty(text)) {
               setLoginForm({
                    ...loginForm,
                    // email: text,
                    emailError: "لطفا این قسمت را خالی نگذارید",
                    formIsValid: false,
               });
          } else {
               setLoginForm({
                    ...loginForm,
                    // email: text,
                    emailError: "",
                    formIsValid: true,
               });
          }
     }

     function tooglePasswordVisibility(event: any): void {
          setPasswordVisibility(!passwordVisibility);
     }
     function handleSubmitEvent() {

          if (usernameInputRef.current && passwordInputRef.current) {

               const data = {
                    email: usernameInputRef.current.value,
                    password: passwordInputRef.current.value,
                    remember_me: true
               }
               
               auth.login(data)
          }

     }

     return (
          <div className="mx-auto  my-20 w-2/3 sm:w-1/3 bg-blue-400  -rotate-3 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-90%">

               <div className="flex w-full flex-col justify-center gap-4 items-center border shadow-gray-400 shadow-sm border-gray-200 rotate-3  bg-white rounded-lg  py-4">
                    <div>
                         <h1 className="font-semibold text-sm mx-2">ورود به سایت</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                         <div className="flex flex-col items-end">
                              <label htmlFor="email" className="w-full text-right mb-2 text-xs font-medium text-gray-900 dark:text-white">نام کاربری</label>
                              <input type="email" name="email" id="email"
                                   onChange={fillLoginEmail}
                                   ref={usernameInputRef}
                                   // value={loginForm.email} 
                                   className="text-xs bg-gray-50 p-2 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right" />
                              <p className="text-red-400 text-xs  text-right  h-4">{loginForm.emailError}</p>
                         </div>

                         <div className="flex flex-col  items-end">
                              <label htmlFor="password" className="w-full text-right mb-2 text-xs font-medium text-gray-900 dark:text-white">کلمه عبور</label>
                              <div className="relative">
                                   <input
                                        ref={passwordInputRef}
                                        type={
                                             passwordVisibility
                                                  ? "text"
                                                  : "password"
                                        } name="password" id="password"
                                        onChange={fillLoginPassword}
                                        // value={loginForm.password} 
                                        className="text-xs bg-gray-50 p-2 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right" />
                                   {passwordVisibility && <svg onClick={tooglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute top-2 left-2 text-gray-500 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                   </svg>}
                                   {!passwordVisibility &&
                                        <svg onClick={tooglePasswordVisibility} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute top-2 left-2 text-gray-500 cursor-pointer">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                   }

                              </div>
                              <p className="text-red-400 text-xs  text-right h-4">{loginForm.passwordError}</p>
                         </div>
                    </div>
                    <div>
                         <button onClick={handleSubmitEvent}>handle</button>
                         <Link to="/dashboard/" className="text-xs bg-white font-semibold text-black border border-gray-300 px-4 py-2 rounded-lg cursor-pointer hover:text-white hover:bg-blue-600 transition-all duration-500" >ورود</Link>

                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1  text-sm">
                         <a>?Don’t have an account yet</a>
                         <a className=" text-blue-600">!Register here</a>
                    </div>
               </div>
          </div >)
}