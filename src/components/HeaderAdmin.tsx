import {User, LogOut} from 'lucide-react'
interface HeaderProps {
    username: string,
    role: string
    onLogOut: () => void
}

const HeaderAdmin = ({onLogOut, username, role}: HeaderProps) => {
    
  return (
    <header className='bg-linear-to-r from-[#056881] to-[#a0dcc0]'>
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-3'>
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-purple-700 to-indigo-600 flex items-center justify-center">
                        <User size={20} className='text-[#07137a]'/>
                    </div>

                    <div>
                        <span className='block text-sm font-semibold text-[#07137a]'>{username}</span>
                        <span className='block text-xs text-[#07137a]'>{role}</span>
                    </div>
                </div>

                <button onClick={onLogOut} className='flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-semibold'>
                    <LogOut size={18}/> Sair 
                </button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
