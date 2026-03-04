import {Heart} from 'lucide-react'
import { pilares } from '../data/card'

const Us = () => {
  return (
    <>
        <section className='bg-linear-to-r from-[#056881] to-[#a0dcc0] px-6 py-24 text-center relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2'>
            </div>
            <div className='absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/3 -translate-y-1/3'>
            </div>

            <div className='relative z-10 max-w-xl mx-auto flex flex-col items-center gap-4'>
                <span className='text-xs font-bold tracking-widest uppercase text-white/70'>Nossa Decisão</span>
                <h1 className='text-4xl md:text-6xl font-bold text-white leading-tigh'>Quem  <span className='text-[#09083D]'>Somos</span>?</h1>
                <p className='text-white/80 text-lg leading-relaxed'>
                    O <span className='text-[#09083D]'>Apoio Delas</span> nasceu de uma ideia para disciplina de Analise e Projeto de Software e do inconformismo — da certeza de que toda mulher merece ter acesso a informação, proteção e uma rede de apoio.
                </p>
            </div>
        </section>

        {/* Surgimento */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Texto */}
          <div className="flex-1 flex flex-col gap-5">
            <span className="text-xs font-bold tracking-widest uppercase text-[#056881]">Como tudo começou</span>
            <h2 className="text-3xl font-bold text-[#09083D] leading-snug">
              Uma ideia que nasceu da <span className="text-[#7b0692]">necessidade real</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
             Durante nossos estudos para a disciplina Análise e Projeto de Software, ministrada pelo professor Anderson Costa, nos deparamos com dados alarmantes sobre violência contra a mulher no Brasil. Percebemos que muitas vítimas não sabiam a quem recorrer, quais eram seus direitos ou onde buscar ajuda.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Foi nesse momento que decidimos construir o <strong className="text-[#056881]">Apoio Delas</strong> — uma plataforma que centraliza informação, acolhe relatos e conecta mulheres a serviços de apoio de forma simples e segura.
            </p>
             <p className="text-gray-600 leading-relaxed text-sm">
              O projeto foi idealizado e desenvolvido por <strong className='text-[#056881]'>Ananda Nunes, Driele Carvalho, Thaylan Fonseca, Iam Melo e Filipe Cruz</strong>, estudantes comprometidas em usar a tecnologia como ferramenta de transformação social.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Mais do que um projeto acadêmico, é um compromisso com a dignidade e a segurança de todas as mulheres.
            </p>
          </div>

          {/* Card destaque */}
          <div className="shrink-0 w-full md:w-72 bg-linear-to-r from-[#056881] to-[#A0DCC0] rounded-3xl p-8 text-white flex flex-col gap-4 shadow-lg">
            <div className="text-5xl font-black opacity-20">"</div>
            <p className="text-sm leading-relaxed italic">
              Tecnologia só tem valor quando transforma vidas. Decidimos colocar isso em prática.
            </p>
            <div className="mt-auto pt-4 border-t border-white/20 text-xs text-white/70">
              — Time Apoio Delas
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#056881]">Nossos valores</span>
            <h2 className="text-3xl font-bold text-[#09083D] mt-2">O que nos move</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pilares.map((p) => (
              <div key={p.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 bg-[#F4F8F7] rounded-xl p-3 h-fit">
                  {p.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#09083D] text-base">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
          <Heart size={36} className="text-[#7b0692]" />
          <h2 className="text-2xl font-bold text-[#09083D]">Faça parte desta rede</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Se você quer compartilhar sua história, buscar apoio ou simplesmente saber que não está sozinha — este espaço foi feito para você.
          </p>
          <a
            href="/preciso-ajuda"
            className="bg-[#FF5F37] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#e04820] transition-all shadow-sm hover:shadow-md"
          >
            Preciso de Ajuda
          </a>
        </div>
      </section>

    </>
  )
}

export default Us