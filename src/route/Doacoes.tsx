import { Heart, DollarSign, CreditCard, QrCode, Gift, Users, Sparkles, ArrowRight, Shield, Phone } from 'lucide-react'
import { useState } from 'react'

const Doacoes = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const donationAmounts = [10, 25, 50, 100, 200, 500]

  const impactExamples = [
    {
      amount: 10,
      impact: 'Ajuda a manter nossos canais de atendimento online ativos por 1 hora',
      icon: <Phone size={24} />
    },
    {
      amount: 25,
      impact: 'Contribui para materiais educativos impressos que salvam vidas',
      icon: <Gift size={24} />
    },
    {
      amount: 50,
      impact: 'Apoia a manutenção da plataforma por uma semana',
      icon: <Shield size={24} />
    },
    {
      amount: 100,
      impact: 'Financia workshops de prevenção para comunidades',
      icon: <Users size={24} />
    }
  ]

  const waysToDonate = [
    {
      title: 'PIX',
      icon: <QrCode size={40} />,
      color: 'from-[#32BCAD] to-[#4CD3C2]',
      description: 'Rápido, fácil e seguro',
      details: 'Escaneie o QR Code ou use a chave PIX'
    },
    {
      title: 'Cartão de Crédito',
      icon: <CreditCard size={40} />,
      color: 'from-[#6A1B9A] to-[#8E24AA]',
      description: 'Doação única ou recorrente',
      details: 'Aceita todas as bandeiras'
    },
    {
      title: 'Transferência',
      icon: <DollarSign size={40} />,
      color: 'from-[#FF5F37] to-[#FF7552]',
      description: 'Depósito ou TED',
      details: 'Dados bancários disponíveis'
    }
  ]


  return (
    <section className="px-6 py-16 bg-[#F4F8F7]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5F37]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#FF5F37] font-semibold text-sm uppercase tracking-wide">Seja Parte da Mudança</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#09083D] mb-4">
            Doe e Transforme Vidas
          </h1>
          <p className="text-xl text-[#056881] max-w-3xl mx-auto leading-relaxed">
            Sua contribuição ajuda a manter esta plataforma gratuita e acessível para todas as mulheres que precisam
          </p>
        </div>

        {/* Por que doar */}
        <div className="bg-gradient-to-r from-[#056881] to-[#5fa8a8] rounded-3xl p-8 md:p-12 text-white shadow-xl mb-12">
          <div className="text-center mb-8">
            <Heart size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Por Que Sua Doação é Importante?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">100% Gratuito</h3>
              <p className="text-white/90 text-sm">
                Mantemos todos os recursos acessíveis gratuitamente para quem mais precisa
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">Educação e Prevenção</h3>
              <p className="text-white/90 text-sm">
                Criamos conteúdo educativo e ferramentas que salvam vidas
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">Rede de Apoio</h3>
              <p className="text-white/90 text-sm">
                Conectamos mulheres a recursos essenciais e comunidades de apoio
              </p>
            </div>
          </div>
        </div>

        {/* Quanto doar */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-[#09083D] mb-2 text-center">
            Escolha o Valor da Sua Doação
          </h2>
          <p className="text-gray-600 text-center mb-8">Qualquer quantia faz diferença!</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount('')
                }}
                className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                  selectedAmount === amount
                    ? 'border-[#FF5F37] bg-[#FF5F37]/10 shadow-md'
                    : 'border-gray-200 hover:border-[#FF5F37]/50'
                }`}
              >
                <div className="text-3xl font-bold text-[#09083D]">
                  R$ {amount}
                </div>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ou escolha outro valor:
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                R$
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                placeholder="0,00"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-xl font-semibold focus:outline-none focus:border-[#FF5F37] transition-all"
              />
            </div>
          </div>

          {/* Impacto da doação */}
          {(selectedAmount || customAmount) && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles size={24} className="text-purple-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-900 mb-2">Impacto da sua doação:</h3>
                  <p className="text-purple-800 text-sm">
                    {selectedAmount 
                      ? impactExamples.find(ex => ex.amount <= selectedAmount)?.impact || 'Sua doação ajuda a manter o projeto funcionando!'
                      : 'Sua contribuição faz diferença real na vida de mulheres em situação de vulnerabilidade!'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            disabled={!selectedAmount && !customAmount}
            className="w-full bg-gradient-to-r from-[#FF5F37] to-[#FF7552] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Continuar para Pagamento
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Formas de doar */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#09083D] mb-8 text-center">
            Formas de Doar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waysToDonate.map((way, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${way.color} rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition-all cursor-pointer`}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{way.title}</h3>
                <p className="text-white/90 mb-2 text-center">{way.description}</p>
                <p className="text-white/70 text-sm text-center">{way.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informações PIX */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#32BCAD]/10 p-4 rounded-2xl mb-4">
              <QrCode size={48} className="text-[#32BCAD]" />
            </div>
            <h2 className="text-3xl font-bold text-[#09083D] mb-4">
              Doar via PIX
            </h2>
            <p className="text-gray-600">A forma mais rápida e prática de contribuir</p>
          </div>

          <div className="max-w-md mx-auto">
            {/* QR Code placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 mb-6 flex items-center justify-center">
              <div className="text-center">
                <QrCode size={200} className="text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-500">QR Code para doação</p>
              </div>
            </div>

            {/* Chave PIX */}
            <div className="bg-[#F4F8F7] rounded-2xl p-6 mb-4">
              <p className="text-sm text-gray-600 mb-2">Chave PIX (Telefone):</p>
              <div className="flex items-center justify-between bg-white rounded-xl p-4">
                <code className="font-mono text-[#09083D] font-semibold">
                  91985974341
                </code>
                <button className="text-[#056881] hover:text-[#FF5F37] font-semibold text-sm">
                  Copiar
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Após realizar a doação via PIX, você receberá um comprovante por email
            </p>
          </div>
        </div>

        {/* Doação recorrente */}
        <div className="bg-gradient-to-br from-[#6A1B9A] to-[#8E24AA] rounded-3xl p-8 md:p-12 text-white shadow-xl mb-12">
          <div className="text-center mb-8">
            <Heart size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Seja um Apoiador Recorrente</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Doações mensais nos ajudam a planejar melhor e expandir nosso impacto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">R$ 10/mês</div>
              <p className="text-white/80 text-sm">Apoiador Bronze</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-white/30">
              <div className="text-3xl font-bold mb-2">R$ 25/mês</div>
              <p className="text-white/80 text-sm">Apoiador Prata</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">R$ 50/mês</div>
              <p className="text-white/80 text-sm">Apoiador Ouro</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-[#6A1B9A] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all inline-flex items-center gap-2">
              Tornar-me Apoiador Mensal
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Transparência */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-[#09083D] mb-6 text-center">
            Transparência Total
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#056881] mb-4">Como usamos as doações:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#056881] text-white rounded-lg w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                    60%
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Desenvolvimento e Manutenção</p>
                    <p className="text-sm text-gray-600">Plataforma, servidores e melhorias</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#056881] text-white rounded-lg w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                    25%
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Conteúdo Educativo</p>
                    <p className="text-sm text-gray-600">Materiais, pesquisas e parcerias</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#056881] text-white rounded-lg w-8 h-8 flex items-center justify-center shrink-0 font-bold">
                    15%
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Divulgação e Alcance</p>
                    <p className="text-sm text-gray-600">Marketing social e conscientização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outras formas de ajudar */}
        <div className="bg-gradient-to-r from-[#056881] to-[#5fa8a8] rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Outras Formas de Ajudar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">Divulgue</h3>
              <p className="text-white/90 text-sm">
                Compartilhe nosso site com quem precisa. Cada divulgação salva vidas.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">Seja Voluntário</h3>
              <p className="text-white/90 text-sm">
                Tem habilidades para oferecer? Entre em contato para fazer parte do time.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl font-bold mb-2">Parceria Empresarial</h3>
              <p className="text-white/90 text-sm">
                Empresas podem apoiar através de responsabilidade social corporativa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Doacoes
