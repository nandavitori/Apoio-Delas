import {Plus, Edit2, MessageCircle, Trash2, X, Send} from 'lucide-react'
import { mocksRelatos, statusColor, type Relato, type Status } from '../data/card';
import { useState } from 'react';


type Modal = 
| {type: 'create'}
| {type: 'edit'; relato: Relato}
| {type: 'comments'; relato: Relato}
| {type: 'delete'; relato: Relato}

const UserDashboard = () => {
    const [relatos, setRelatos] = useState<Relato[]>(mocksRelatos)
    const [modal, setModal] = useState<Modal | null>(null)
    const [texto, setTexto] = useState('')
    const [newComment, setNewComment] = useState('')

    const closeModal = () => {
        setModal(null)
        setTexto('')
        setNewComment('')
    }

    const handleCreate = () => {
        if(!texto.trim()) return
        const novo: Relato = {
            id: Date.now().toString(),
            codigo: `REL-${Math.floor(Math.random()*900 + 100)}`,
            texto: texto.trim(),
            date: new Date().toLocaleDateString('pt-BR'),
            status: 'Pendente',
            comments: []
        }

        setRelatos((prev) => [novo, ...prev])
        closeModal()
    }

    const handleEdit = (relato: Relato) => {
    setRelatos((prev) =>
      prev.map((r) => (r.id === relato.id ? { ...r, texto: texto.trim() } : r))
    )
    closeModal()
  }

  const handleDelete = (id: string) => {
    setRelatos((prev) => prev.filter((r) => r.id !== id))
    closeModal()
  }

  const handleAddComment = (relato: Relato) => {
    if (!newComment.trim()) return
    const comment = {
      author: 'Você',
      text: newComment.trim(),
      date: new Date().toLocaleDateString('pt-BR'),
    }
    setRelatos((prev) =>
      prev.map((r) =>
        r.id === relato.id ? { ...r, comments: [...r.comments, comment] } : r
      )
    )
    setNewComment('')
  }

  return (
    <div className='px-4 py-10'>
      <div className='max-w-3xl mx-auto flex flex-col gap-6'>
        {/* Botão novo Relato */}
        <button onClick={() => {setModal({type: 'create'}); setTexto('')}}
            className='self-start flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold text-sm transition-all shadow-sm'>
                <Plus size={18}/> Novo Relato
        </button>

        {/* Lista de Relatos */}
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4'>
            <h2 className='text-lg font-bold text-[#09083D]'>Meus Relatos</h2>
            {relatos.length === 0 && (
                <p className="text-gray-400 text-sm">Nenhum Relato Ainda</p>
            )}

            {relatos.map((relato) => (
                <div key={relato.id} className="border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
                    {/* Header do card */}
                    <div className='flex items-center justify-between flex-wrap gap-2'>
                        <div className='flex items-center gap-2'>
                            <span className='font-mono text-sm font-bold text-gray-500'>#{relato.codigo}</span>
                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColor[relato.status as Status]}`}> Status: {relato.status}</span>
                        </div>
                        <span className='text-xs text-gray-400 bg-[#e0f4f7] px-3 py-1 rounded-full'>
                            {relato.date}
                        </span>
                    </div>

                     {/* Texto */}
                     <p className="text-sm text-gray-600 leading-relaxed">{relato.texto}</p>

                     {/* Ações */}
                     <div className='flex gap-2 justify-end flex-wrap'>
                        <button onClick={() => { setModal({ type: 'edit', relato }); setTexto(relato.texto) }} className="flex items-center gap-1 px-4 py-2 bg-[#d4eef5] text-[#056881] rounded-xl text-xs font-semibold hover:bg-[#b8e3ee] transition-colors">
                            <Edit2 size={14} /> Editar
                        </button>
                        <button onClick={() => setModal({ type: 'comments', relato })} className="flex items-center gap-1 px-4 py-2 bg-[#e8f5e9] text-green-700 rounded-xl text-xs font-semibold hover:bg-[#c8e6c9] transition-colors">
                            <MessageCircle size={14} /> Comentários ({relato.comments.length})
                        </button>
                        <button onClick={() => setModal({ type: 'delete', relato })} className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-semibold hover:bg-red-100 transition-colors">
                            <Trash2 size={14} /> Excluir
                        </button>
                     </div>
                </div>
            ))}
        </div>
      </div>
      {/* ── MODAIS ── */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          {/* Criar / Editar */}
          {(modal.type === 'create' || modal.type === 'edit') && (
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#09083D]">
                  {modal.type === 'create' ? 'Novo Relato' : 'Editar Relato'}
                </h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
              </div>
              <textarea
                rows={6}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escreva seu relato..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#056881]"
              />
              <div className="flex justify-end gap-2">
                <button onClick={closeModal} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Cancelar</button>
                <button
                  onClick={() => modal.type === 'create' ? handleCreate() : handleEdit(modal.relato)}
                  className="px-6 py-2 bg-[#056881] text-white rounded-xl text-sm font-semibold hover:bg-[#044f61] transition-colors"
                >
                  {modal.type === 'create' ? 'Publicar' : 'Salvar'}
                </button>
              </div>
            </div>
          )}

          {/* Comentários */}
          {modal.type === 'comments' && (
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#09083D]">Comentários</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
              </div>

              {modal.relato.comments.length === 0 && (
                <p className="text-gray-400 text-sm">Nenhum comentário ainda.</p>
              )}

              {relatos.find(r => r.id === modal.relato.id)?.comments.map((c, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                  <p className="text-sm text-gray-700">{c.text}</p>
                  <span className="text-xs text-gray-400">{c.author} · {c.date}</span>
                </div>
              ))}

              <div className="flex gap-2 pt-2">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Escreva um comentário..."
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#056881]"
                />
                <button
                  onClick={() => handleAddComment(modal.relato)}
                  className="bg-[#FF5F37] text-white px-4 py-2 rounded-xl hover:bg-[#e04820] transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Confirmar exclusão */}
          {modal.type === 'delete' && (
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm flex flex-col gap-4 shadow-xl text-center">
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
              </div>
              <Trash2 size={40} className="text-red-400 mx-auto" />
              <h3 className="font-bold text-[#09083D]">Excluir relato?</h3>
              <p className="text-sm text-gray-500">Esta ação não pode ser desfeita.</p>
              <div className="flex gap-2 justify-center">
                <button onClick={closeModal} className="px-5 py-2 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50">Cancelar</button>
                <button
                  onClick={() => handleDelete(modal.relato.id)}
                  className="px-5 py-2 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors"
                >
                  Excluir
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserDashboard
