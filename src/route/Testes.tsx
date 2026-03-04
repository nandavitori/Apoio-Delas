import { useState, type JSX } from 'react'
import { ClipboardList, AlertCircle, CheckCircle, ArrowRight, ArrowLeft, Heart, Sparkles } from 'lucide-react'

type Question = {
  id: number
  text: string
  encouragement: string
  options: {
    text: string
    value: number
  }[]
}

type Test = {
  id: number
  title: string
  subtitle: string
  icon: JSX.Element
  color: string
  bgColor: string
  questions: Question[]
  interpretation: {
    low: { range: string; title: string; message: string; color: string }
    medium: { range: string; title: string; message: string; color: string }
    high: { range: string; title: string; message: string; color: string }
  }
}

const Testes = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [showResult, setShowResult] = useState(false)

  const encouragements = [
    "💜 Você é corajosa por buscar entender sua situação",
    "🌟 Reconhecer o problema é o primeiro passo",
    "💪 Sua força está em buscar clareza",
    "✨ Você merece um relacionamento saudável",
    "🦋 Respire fundo, você está no controle",
    "💝 Sua intuição é válida e importante",
    "🌸 Cuidar de si mesma é um ato de coragem",
    "🌈 Cada resposta te aproxima da verdade",
    "💎 Você merece respeito e amor genuíno",
    "🕊️ Não há julgamento aqui, apenas acolhimento"
  ]

  const tests: Test[] = [
    {
      id: 1,
      title: 'Seu Relacionamento é Saudável?',
      subtitle: 'Faça um teste e verifique se seu relacionamento possui traços tóxicos',
      icon: <ClipboardList size={40} />,
      color: 'from-[#FF7552] to-[#FF5F37]',
      bgColor: 'bg-gradient-to-br from-[#FF7552] to-[#FF5F37]',
      questions: [
        {
          id: 1,
          text: 'Seu parceiro(a) controla onde você vai, com quem fala ou o que veste?',
          encouragement: encouragements[0],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 2,
          text: 'Você sente medo de contrariar ou discordar do seu parceiro(a)?',
          encouragement: encouragements[1],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 3,
          text: 'Ele(a) faz você se sentir culpado(a) quando passa tempo com amigos ou família?',
          encouragement: encouragements[2],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 4,
          text: 'Seu parceiro(a) critica constantemente sua aparência, comportamento ou decisões?',
          encouragement: encouragements[3],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 5,
          text: 'Você se sente pressionado(a) a fazer coisas que não quer (inclusive sexualmente)?',
          encouragement: encouragements[4],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 6,
          text: 'Ele(a) verifica suas mensagens, redes sociais ou celular sem sua permissão?',
          encouragement: encouragements[5],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 7,
          text: 'Você evita certos assuntos para não irritá-lo(a)?',
          encouragement: encouragements[6],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 8,
          text: 'Seu parceiro(a) já te humilhou ou xingou, mesmo "brincando"?',
          encouragement: encouragements[7],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 9,
          text: 'Ele(a) controla seu dinheiro ou te impede de trabalhar/estudar?',
          encouragement: encouragements[8],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 10,
          text: 'Você já se sentiu ameaçado(a) fisicamente ou emocionalmente?',
          encouragement: encouragements[9],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Uma ou duas vezes', value: 1 },
            { text: 'Algumas vezes', value: 2 },
            { text: 'Muitas vezes', value: 3 },
            { text: 'Constantemente', value: 4 }
          ]
        },
        {
          id: 11,
          text: 'Seu parceiro(a) isola você de pessoas importantes da sua vida?',
          encouragement: encouragements[0],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 12,
          text: 'Ele(a) alterna entre ser amoroso e agressivo, fazendo você sentir confuso(a)?',
          encouragement: encouragements[1],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 13,
          text: 'Você sente que anda "pisando em ovos" perto dele(a)?',
          encouragement: encouragements[2],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 14,
          text: 'Sua autoestima diminuiu desde que começou o relacionamento?',
          encouragement: encouragements[3],
          options: [
            { text: 'Não diminuiu', value: 0 },
            { text: 'Um pouco', value: 1 },
            { text: 'Moderadamente', value: 2 },
            { text: 'Bastante', value: 3 },
            { text: 'Muito', value: 4 }
          ]
        },
        {
          id: 15,
          text: 'Você já pensou em terminar mas tem medo das consequências?',
          encouragement: encouragements[4],
          options: [
            { text: 'Nunca pensei em terminar', value: 0 },
            { text: 'Pensei, mas sem medo', value: 1 },
            { text: 'Às vezes, com algum receio', value: 2 },
            { text: 'Frequentemente, com medo', value: 3 },
            { text: 'Sempre, com muito medo', value: 4 }
          ]
        }
      ],
      interpretation: {
        low: {
          range: '0-20 pontos',
          title: 'Relacionamento Aparentemente Saudável',
          message: 'Seu relacionamento parece ter bases saudáveis. Continue investindo em comunicação, respeito mútuo e diálogo aberto. Lembre-se: em um relacionamento saudável, ambos se sentem livres, respeitados e felizes.',
          color: 'from-green-500 to-green-600'
        },
        medium: {
          range: '21-40 pontos',
          title: 'Sinais de Alerta - Atenção Necessária',
          message: 'Seu relacionamento apresenta alguns sinais preocupantes que merecem atenção. Converse abertamente sobre os problemas e, se possível, considere buscar apoio psicológico para o casal. Relacionamentos podem melhorar com diálogo e esforço mútuo, mas é importante que ambos estejam dispostos a mudar.',
          color: 'from-yellow-500 to-orange-500'
        },
        high: {
          range: '41-60 pontos',
          title: 'Relacionamento Abusivo - Busque Ajuda',
          message: 'Seu relacionamento apresenta múltiplos sinais de abuso. Você não merece ser tratado(a) assim. É importante buscar ajuda imediatamente. Converse com pessoas de confiança, procure apoio psicológico e considere entrar em contato com serviços de proteção. Lembre-se: você não está sozinha e a culpa NUNCA é sua.',
          color: 'from-red-600 to-red-700'
        }
      }
    },
    {
      id: 2,
      title: 'Você Está em Situação de Risco?',
      subtitle: 'Realize este teste se você estiver buscando entender o grau de risco que está sofrendo',
      icon: <ClipboardList size={40} />,
      color: 'from-[#C62828] to-[#E53935]',
      bgColor: 'bg-gradient-to-br from-[#C62828] to-[#E53935]',
      questions: [
        {
          id: 1,
          text: 'Seu parceiro(a) já te agrediu fisicamente (empurrões, tapas, socos)?',
          encouragement: encouragements[5],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Uma vez', value: 2 },
            { text: 'Algumas vezes', value: 3 },
            { text: 'Muitas vezes', value: 4 }
          ]
        },
        {
          id: 2,
          text: 'As agressões estão se tornando mais frequentes ou mais violentas?',
          encouragement: encouragements[6],
          options: [
            { text: 'Não há agressões', value: 0 },
            { text: 'Não, permanecem iguais', value: 1 },
            { text: 'Sim, um pouco', value: 2 },
            { text: 'Sim, muito', value: 4 }
          ]
        },
        {
          id: 3,
          text: 'Ele(a) possui armas ou já ameaçou usá-las contra você?',
          encouragement: encouragements[7],
          options: [
            { text: 'Não possui armas', value: 0 },
            { text: 'Possui, mas nunca mencionou', value: 1 },
            { text: 'Mencionou de forma vaga', value: 3 },
            { text: 'Ameaçou diretamente', value: 5 }
          ]
        },
        {
          id: 4,
          text: 'Seu parceiro(a) já ameaçou te matar ou matar a si mesmo?',
          encouragement: encouragements[8],
          options: [
            { text: 'Nunca', value: 0 },
            { text: '"Brincando"', value: 2 },
            { text: 'Em momentos de raiva', value: 4 },
            { text: 'Com seriedade', value: 5 }
          ]
        },
        {
          id: 5,
          text: 'Ele(a) tem acesso fácil a você (mora junto, sabe onde você está sempre)?',
          encouragement: encouragements[9],
          options: [
            { text: 'Não tem acesso fácil', value: 0 },
            { text: 'Acesso moderado', value: 1 },
            { text: 'Moramos juntos', value: 2 },
            { text: 'Me persegue/vigia', value: 3 }
          ]
        },
        {
          id: 6,
          text: 'Você está grávida ou tem filhos pequenos?',
          encouragement: encouragements[0],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Sim, tenho filhos maiores', value: 1 },
            { text: 'Sim, tenho filhos pequenos', value: 2 },
            { text: 'Sim, estou grávida', value: 2 }
          ]
        },
        {
          id: 7,
          text: 'Seu parceiro(a) usa drogas ou álcool em excesso?',
          encouragement: encouragements[1],
          options: [
            { text: 'Não usa', value: 0 },
            { text: 'Usa socialmente', value: 1 },
            { text: 'Usa com frequência', value: 2 },
            { text: 'Uso problemático/vício', value: 3 }
          ]
        },
        {
          id: 8,
          text: 'Ele(a) já tentou te estrangular ou sufocar?',
          encouragement: encouragements[2],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Uma vez', value: 3 },
            { text: 'Algumas vezes', value: 5 },
            { text: 'Muitas vezes', value: 5 }
          ]
        },
        {
          id: 9,
          text: 'Você está pensando seriamente em terminar o relacionamento?',
          encouragement: encouragements[3],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Às vezes penso', value: 1 },
            { text: 'Sim, frequentemente', value: 2 },
            { text: 'Sim, estou planejando', value: 3 }
          ]
        },
        {
          id: 10,
          text: 'Ele(a) persegue você, vigia suas atividades constantemente?',
          encouragement: encouragements[4],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Constantemente', value: 4 }
          ]
        },
        {
          id: 11,
          text: 'Seu parceiro(a) tem um histórico de violência com outras pessoas?',
          encouragement: encouragements[5],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Não tenho certeza', value: 1 },
            { text: 'Sim, com outras pessoas', value: 2 },
            { text: 'Sim, com ex-parceiras', value: 3 }
          ]
        },
        {
          id: 12,
          text: 'Ele(a) apresenta ciúmes extremos e possessividade?',
          encouragement: encouragements[6],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Um pouco', value: 1 },
            { text: 'Bastante', value: 2 },
            { text: 'Extremo e controlador', value: 3 }
          ]
        },
        {
          id: 13,
          text: 'Você sente que sua vida está em perigo?',
          encouragement: encouragements[7],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Às vezes me preocupo', value: 2 },
            { text: 'Sim, frequentemente', value: 4 },
            { text: 'Sim, estou com muito medo', value: 5 }
          ]
        },
        {
          id: 14,
          text: 'Ele(a) descumpriu medidas protetivas ou ordens judiciais?',
          encouragement: encouragements[8],
          options: [
            { text: 'Não há medidas', value: 0 },
            { text: 'Há medidas e ele respeita', value: 0 },
            { text: 'Descumpriu uma vez', value: 3 },
            { text: 'Descumpre frequentemente', value: 4 }
          ]
        },
        {
          id: 15,
          text: 'Seu parceiro(a) tem acesso a informações pessoais suas (senhas, documentos)?',
          encouragement: encouragements[9],
          options: [
            { text: 'Não', value: 0 },
            { text: 'Algumas informações', value: 1 },
            { text: 'Muitas informações', value: 2 },
            { text: 'Acesso total', value: 2 }
          ]
        }
      ],
      interpretation: {
        low: {
          range: '0-15 pontos',
          title: 'Risco Baixo - Mas Fique Atenta',
          message: 'Embora o teste indique risco baixo, qualquer forma de violência é inaceitável. Se você identificou qualquer comportamento abusivo, é importante buscar orientação. Converse com pessoas de confiança e conheça seus direitos.',
          color: 'from-blue-500 to-blue-600'
        },
        medium: {
          range: '16-35 pontos',
          title: 'Risco Moderado - Ação Necessária',
          message: 'Você está em uma situação de risco que requer atenção imediata. É fundamental criar um plano de segurança: tenha documentos importantes em lugar seguro, mantenha contatos de emergência salvos, e considere solicitar medidas protetivas. Procure a Delegacia da Mulher ou ligue 180.',
          color: 'from-orange-500 to-orange-600'
        },
        high: {
          range: '36-55 pontos',
          title: 'RISCO ALTO - Aja Imediatamente',
          message: 'VOCÊ ESTÁ EM PERIGO REAL. Sua segurança é prioridade absoluta. Ligue 190 se estiver em perigo iminente. Procure ajuda AGORA: vá até uma delegacia, acione a rede de apoio, solicite medidas protetivas urgentes. Não enfrente isso sozinha. Vá para um lugar seguro o mais rápido possível.',
          color: 'from-red-700 to-red-900'
        }
      }
    },
    {
      id: 3,
      title: 'Reconhece Sinais de Manipulação?',
      subtitle: 'Faça um teste e verifique se seu relacionamento possui traços de manipulação emocional',
      icon: <ClipboardList size={40} />,
      color: 'from-[#6A1B9A] to-[#8E24AA]',
      bgColor: 'bg-gradient-to-br from-[#6A1B9A] to-[#8E24AA]',
      questions: [
        {
          id: 1,
          text: 'Seu parceiro(a) te faz duvidar da sua própria memória ou sanidade? (Gaslighting)',
          encouragement: encouragements[0],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Constantemente', value: 4 }
          ]
        },
        {
          id: 2,
          text: 'Ele(a) frequentemente se faz de vítima para conseguir o que quer?',
          encouragement: encouragements[1],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 3,
          text: 'Você se sente constantemente culpado(a) por coisas que não são sua responsabilidade?',
          encouragement: encouragements[2],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 4,
          text: 'Seu parceiro(a) usa chantagem emocional (ameaça terminar, se machucar, etc.)?',
          encouragement: encouragements[3],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 5,
          text: 'Ele(a) te convence de que suas reações emocionais são exageradas ou erradas?',
          encouragement: encouragements[4],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 6,
          text: 'Você costuma ceder para evitar brigas, mesmo quando está certo(a)?',
          encouragement: encouragements[5],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 7,
          text: 'Seu parceiro(a) distorce situações para fazer você parecer o(a) errado(a)?',
          encouragement: encouragements[6],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 8,
          text: 'Ele(a) alterna entre ser extremamente carinhoso e frio/distante?',
          encouragement: encouragements[7],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 9,
          text: 'Você sente que precisa da aprovação dele(a) para tomar decisões?',
          encouragement: encouragements[8],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 10,
          text: 'Seu parceiro(a) usa informações pessoais suas contra você?',
          encouragement: encouragements[9],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 11,
          text: 'Ele(a) nega ter dito ou feito coisas que você sabe que aconteceram?',
          encouragement: encouragements[0],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 12,
          text: 'Você se sente confuso(a) sobre o que é real e o que é exagero?',
          encouragement: encouragements[1],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Constantemente', value: 4 }
          ]
        },
        {
          id: 13,
          text: 'Seu parceiro(a) invalida seus sentimentos dizendo que você é sensível demais?',
          encouragement: encouragements[2],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 14,
          text: 'Ele(a) te faz sentir em dívida emocional constante?',
          encouragement: encouragements[3],
          options: [
            { text: 'Nunca', value: 0 },
            { text: 'Raramente', value: 1 },
            { text: 'Às vezes', value: 2 },
            { text: 'Frequentemente', value: 3 },
            { text: 'Sempre', value: 4 }
          ]
        },
        {
          id: 15,
          text: 'Você perdeu a confiança em seu próprio julgamento desde que está nesse relacionamento?',
          encouragement: encouragements[4],
          options: [
            { text: 'Não perdi', value: 0 },
            { text: 'Um pouco', value: 1 },
            { text: 'Moderadamente', value: 2 },
            { text: 'Bastante', value: 3 },
            { text: 'Completamente', value: 4 }
          ]
        }
      ],
      interpretation: {
        low: {
          range: '0-20 pontos',
          title: 'Baixa Manipulação Detectada',
          message: 'Seu relacionamento não apresenta sinais significativos de manipulação emocional. Continue observando e priorizando a comunicação honesta e o respeito mútuo. Em caso de dúvidas, sempre confie em sua intuição.',
          color: 'from-green-500 to-green-600'
        },
        medium: {
          range: '21-40 pontos',
          title: 'Sinais de Manipulação Presentes',
          message: 'Você está sendo manipulado(a) emocionalmente em seu relacionamento. Isso não é normal nem saudável. Considere conversar com um psicólogo para entender melhor essas dinâmicas e recuperar sua autonomia emocional. Você tem o direito de confiar em si mesmo(a).',
          color: 'from-yellow-500 to-orange-500'
        },
        high: {
          range: '41-60 pontos',
          title: 'Manipulação Severa - Busque Ajuda',
          message: 'Você está sendo severamente manipulado(a). Essa é uma forma de violência psicológica que causa danos profundos à autoestima e saúde mental. É urgente buscar apoio psicológico e considerar se afastar dessa relação. Você não está "louco(a)" - você está sendo abusado(a). Procure ajuda profissional.',
          color: 'from-red-600 to-red-700'
        }
      }
    }
  ]

  const handleSelectTest = (testId: number) => {
    setSelectedTest(testId)
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
  }

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    const test = tests.find(t => t.id === selectedTest)
    if (test && currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleBack = () => {
    setSelectedTest(null)
    setAnswers({})
    setCurrentQuestion(0)
    setShowResult(false)
  }

  const calculateScore = () => {
    const test = tests.find(t => t.id === selectedTest)
    if (!test) return 0

    let score = 0
    test.questions.forEach(question => {
      const answer = answers[question.id]
      if (answer !== null && answer !== undefined) {
        score += answer
      }
    })
    return score
  }

  const getInterpretation = () => {
    const test = tests.find(t => t.id === selectedTest)
    if (!test) return null

    const score = calculateScore()
    const maxScore = test.questions.reduce((sum, q) => {
      const maxOptionValue = Math.max(...q.options.map(o => o.value))
      return sum + maxOptionValue
    }, 0)
    const percentage = (score / maxScore) * 100

    if (percentage <= 33) return test.interpretation.low
    if (percentage <= 66) return test.interpretation.medium
    return test.interpretation.high
  }

  const getCurrentTest = () => tests.find(t => t.id === selectedTest)

  if (selectedTest && !showResult) {
    const test = getCurrentTest()
    if (!test) return null

    const question = test.questions[currentQuestion]
    const progress = ((currentQuestion + 1) / test.questions.length) * 100

    return (
      <section className="px-6 py-16 bg-[#F4F8F7] min-h-screen">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#056881] mb-8 hover:text-[#FF5F37] transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para testes
          </button>

          {/* Cabeçalho do teste */}
          <div className={`${test.bgColor} rounded-3xl p-8 text-white shadow-xl mb-8`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center">
                {test.icon}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">{test.title}</h1>
            </div>
            <p className="text-white/90">{test.subtitle}</p>
          </div>

          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Questão {currentQuestion + 1} de {test.questions.length}</span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-[#056881] to-[#5fa8a8] h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Mensagem motivacional */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-6 border border-purple-100">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-purple-600 shrink-0" />
              <p className="text-sm text-purple-900 font-medium">{question.encouragement}</p>
            </div>
          </div>

          {/* Pergunta */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-[#09083D] mb-8">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all text-left hover:shadow-md ${
                    answers[question.id] === option.value
                      ? 'border-[#056881] shadow-md'
                      : 'border-gray-200 hover:border-[#056881]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium text-gray-800">{option.text}</span>
                    {answers[question.id] === option.value && (
                      <CheckCircle size={24} className="text-[#056881] shrink-0 ml-3" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-all"
            >
              <ArrowLeft size={20} />
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={answers[question.id] === null || answers[question.id] === undefined}
              className="flex items-center gap-2 bg-[#FF5F37] text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#e04820] transition-all"
            >
              {currentQuestion === test.questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (showResult) {
    const test = getCurrentTest()
    const interpretation = getInterpretation()
    if (!test || !interpretation) return null

    const score = calculateScore()
    const maxScore = test.questions.reduce((sum, q) => {
      const maxOptionValue = Math.max(...q.options.map(o => o.value))
      return sum + maxOptionValue
    }, 0)

    return (
      <section className="px-6 py-16 bg-[#F4F8F7] min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#056881] mb-8 hover:text-[#FF5F37] transition-colors"
          >
            <ArrowLeft size={20} />
            Fazer outro teste
          </button>

          {/* Resultado */}
          <div className={`bg-gradient-to-br ${interpretation.color} rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12`}>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{interpretation.title}</h1>
              <p className="text-2xl font-semibold mb-2">{interpretation.range}</p>
              <p className="text-5xl font-bold">{score} / {maxScore} pontos</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <p className="text-lg leading-relaxed">{interpretation.message}</p>
            </div>

            {score > maxScore * 0.33 && (
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50">
                <div className="flex items-start gap-3">
                  <AlertCircle size={24} className="shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Importante:</h3>
                    <p className="text-sm leading-relaxed">
                      Este teste é apenas orientativo e não substitui avaliação profissional. Se você identificou sinais preocupantes, busque ajuda de profissionais especializados.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Recursos */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-[#09083D] mb-6 text-center">
              Busque Ajuda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F4F8F7] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#056881] mb-3">📞 Central 180</h3>
                <p className="text-gray-700 mb-2">Central de Atendimento à Mulher</p>
                <p className="text-sm text-gray-600">24 horas, todos os dias. Ligação gratuita.</p>
              </div>
              <div className="bg-[#F4F8F7] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#056881] mb-3">🚨 Polícia 190</h3>
                <p className="text-gray-700 mb-2">Em caso de emergência</p>
                <p className="text-sm text-gray-600">Ligue imediatamente se estiver em perigo.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/preciso-ajuda"
                className="bg-[#FF5F37] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#e04820] transition-all shadow-md text-center flex items-center gap-2 justify-center"
              >
                Ver Mais Recursos de Ajuda
                <ArrowRight size={20} />
              </a>
              <a
                href="/tipos-violencia"
                className="bg-[#056881] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#044d63] transition-all shadow-md text-center flex items-center gap-2 justify-center"
              >
                Entender Tipos de Violência
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-16 bg-[#F4F8F7]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5F37]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#FF5F37] font-semibold text-sm uppercase tracking-wide">Autoconhecimento</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#09083D] mb-4">
            Testes de Orientação
          </h1>
          <p className="text-xl text-[#056881] max-w-3xl mx-auto leading-relaxed">
            Responda aos questionários abaixo para identificar sinais de relacionamento abusivo
          </p>
        </div>

        {/* Alerta */}
        <div className="bg-gradient-to-r from-[#056881] to-[#5fa8a8] rounded-3xl p-8 text-white shadow-xl mb-12">
          <div className="flex items-start gap-4">
            <Heart size={32} className="shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Importante Saber:</h2>
              <p className="text-lg leading-relaxed mb-2">
                Estes testes são ferramentas de orientação e autoconhecimento. Eles NÃO substituem avaliação profissional de psicólogos, assistentes sociais ou outros especialistas.
              </p>
              <p className="text-white/90 leading-relaxed">
                Se você identificar sinais preocupantes, busque ajuda de profissionais qualificados e serviços especializados.
              </p>
            </div>
          </div>
        </div>

        {/* Cards dos testes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tests.map((test) => (
            <div
              key={test.id}
              onClick={() => handleSelectTest(test.id)}
              className={`${test.bgColor} rounded-3xl p-8 text-white shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                {test.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{test.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6 text-center">
                {test.subtitle}
              </p>
              <div className="text-center">
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all inline-flex items-center gap-2">
                  Iniciar Teste
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-[#09083D] mb-6">
            Por Que Fazer Estes Testes?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Muitas pessoas vivem relacionamentos abusivos sem perceber. A violência nem sempre começa de forma física - ela é construída gradualmente através de manipulação, controle e violência psicológica.
            </p>
            <p>
              Estes questionários foram desenvolvidos com base em critérios utilizados por profissionais da área de psicologia e assistência social para identificar padrões de abuso e manipulação em relacionamentos.
            </p>
            <p className="font-semibold text-[#FF5F37]">
              Lembre-se: reconhecer o problema é o primeiro passo para sair dele. Você não está sozinha.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testes
