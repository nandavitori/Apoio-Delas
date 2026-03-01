import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Mail, Lock, User, Eye, EyeOff} from 'lucide-react'

type Mode = 'login' | 'register'

const LoginUser = () => {
    const [mode, setMode] = useState<Mode>('login')
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState({name: '', email:'', password:''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        if(mode === 'login'){
          console.log('Login:', {email: form.email, password: form.password});
        }else{
          console.log('Cadastro:', form);
          
        }
    }
  return (
    <div className='min-h-screen bg-linear-to-r from-[#056881] to-[#a0dcc0] flex items-center justify-center px-4 pt-7 pb-6'>
      <div className='bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6 border border-white/30'>
      {/* Icone */}
        <div className='flex justify-center'>
          <div className='bg-white/30 rounded-full p-4 border border-white/40'>
            <User size={40} className='text-[#09083d]'/>
          </div>
        </div>

        {/* Login / Cadastro */}

        <div className='flex bg-white/20 rounded-2xl p-1'>
          <button className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${mode === 'login' ? 'bg-white text-[#056881] shadow' : 'text-[#051881]'}`} onClick={() => setMode('login')}>
            Entrar
          </button>
          <button className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${mode === 'register' ? 'bg-white text-[#056881] shadow' : 'text-[#051881]'}`} onClick={() => setMode('register')}>
            Criar Conta
          </button>
        </div>

        {/* Campos */}
        <div className='flex flex-col gap-4'>
          {/* Nome - só no cadastro */}
          {mode === 'register' && (
            <div className='flex flex-col gap-1'>
              <label className='text-xs text-white/80 flex items-center gap-1'>
                <User size={12}/> Nome
              </label>
              <input 
              type="text"
              name='name'
              placeholder='Digite seu nome'
              value={form.name}
              onChange={handleChange}
              className="bg-[#3ab8cc] text-white placeholder-white/70 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
               />
            </div>
          )}

          {/* email */}
          <div className='flex flex-col gap-1'>
            <label className="text-xs text-white/80 flex items-center gap-1">
              <Mail size={12} /> Email
            </label>
            <input 
              type="text"
              name='name'
              placeholder='Digite seu nome'
              value={form.email}
              onChange={handleChange}
              className="bg-[#3ab8cc]/60 text-[#0b0a66] placeholder-[#0b0a66]/70 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
               />
          </div>

          {/* Senha */}
          <div className='flex flex-col gap-1'>
            <label className="text-xs text-white/80 flex items-center gap-1">
              <Lock size={12} /> Senha
            </label>
            <div className='relative'>
              <input 
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Digite sua senha'
              value={form.password}
              onChange={handleChange} 
              className="w-full bg-[#3ab8cc]/60 text-[#0b0a66] placeholder-[#0b0a66]/70 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white'>
                {showPassword ? <EyeOff size={16}/> : <Eye size={16}/>}
              </button>
            </div>
          </div>
        </div>

        {/* Botão principal */}
        <button onClick={handleSubmit} className="w-full bg-[#0581706c] hover:bg-[#058170] text-[#15166b] font-semibold py-3 rounded-2xl transition-all duration-200 border border-white/40">
          {mode === 'login' ? 'Entrar' : 'Criar Conta'}
        </button>

        {/* Divisor */}

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/30" />
          <span className="text-xs text-white/60">ou</span>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        {/* Login com Google */}
        <button className='w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm text-sm cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
           {mode === 'login' ? 'Entrar com Google' : 'Criar com Google'}
        </button>

        {/* Link admin */}
        <p className="text-center text-xs text-white/60">
          É administradora?{' '}
          <Link to="/login-admin" className="text-white font-semibold hover:underline">
            Acesse aqui
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginUser
