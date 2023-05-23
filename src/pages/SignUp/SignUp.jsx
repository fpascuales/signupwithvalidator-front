import React from 'react'
import "./SignUp.css";
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit } = useForm();
  return (
    <div>
        <form
          // onSubmit={handleSubmit((dataRegister) =>)}
        >
          <input
            {...register("username")}
            placeholder='Usuario'
          />
          <input
            {...register("email")}
            placeholder='Email'
            type='email'
          />
          <input
            {...register("password")}
            placeholder='Contraseña'
            type='password'
          />
          <input
            {...register("password2")}
            placeholder='Confirme contraseña'
            type="password"
          />
          <button>REGISTRARSE</button>
        </form>
    </div>
  )
}

export default SignUp