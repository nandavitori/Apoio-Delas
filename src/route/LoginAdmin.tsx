import React, {useState} from 'react'
import  {Link} from "react-router-dom"
import {ShieldCheck, Lock, User, Eye, EyeOff} from 'lucide-react'

const LoginAdmin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({username: '', password: ''})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        console.log('Admin login:', form);
        
    }
  return (
    <div className='min-h-screen bg-linear-to-r from-[#056881] to-[#a0dcc0] flex items-center justify-center px-4 '>
      <div className='bg-white/15 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6 border border-white/20'>
      {/* Icone */}
       <div className='flex justify-center'>
          <div className='bg-white/30 rounded-full p-4 border border-white/40'>
            <ShieldCheck size={40} className='text-[#09083d]'/>
          </div>
        </div>

        {/* Titulo */}
        <div className='text-center'>
            <h2 className='text-[#09083d] font-bold text-xl'>Area Administrativa</h2>
            <p className='text-[#09083d] text-xs mt-1'>Acesso Restrito a Administradores</p>
        </div>

        {/* Campos */}
        <div className='flex flex-col gap-4'>
            {/* Usuarios */}
            <div className='flex flex-col gap-1'>
                <label className='text-xs text-white/70 flex items-center gap-1'>
                    <User size={12}/> Usuarios
                </label>
                <input 
                type="text" 
                name='username'
                placeholder='digite seu usuario'
                value={form.username}
                onChange={handleChange}
                className="bg-[#3ab8cc]/60 text-[#0b0a66] placeholder-[#0b0a66]/70 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
            </div>

            {/* Senha */}
            <div className='flex flex-col gap-1'>
                <label className='text-xs text-white/70 flex items-center gap-1'>
                    <Lock size={12}/> Senha
                </label>
                <div className='relative'>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Digite sua senha'
                    value={form.password}
                    onChange={handleChange}
                    className="w-full bg-[#3ab8cc]/60 text-[#0b0a66] placeholder-[#0b0a66]/70 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 pr-10"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white'>
                        {showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}
                    </button>
                </div>
            </div>
        </div>
         {/* Botão principal */}
        <button onClick={handleSubmit} className="w-full bg-[#0581706c] hover:bg-[#058170] text-[#15166b] font-semibold py-3 rounded-2xl transition-all duration-200 border border-white/40">
          Entrar
        </button>

         {/* Link admin */}
        <p className="text-center text-xs text-white/60">
          É Usuaria?{' '}
          <Link to="/login-user" className="text-white font-semibold hover:underline">
            Acesse aqui
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginAdmin
