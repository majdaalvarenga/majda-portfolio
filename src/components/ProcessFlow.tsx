import { useState } from 'react';

const stages = [
  {
    label:'Identificar o Problema',
    text: 'Entender a dor real por trás do pedido — do usuário, do negócio e do time técnico.',
  },
  {
    label: 'Entender o Contexto',
    text: 'Faz sentido como oportunidade de negócio? Quem irá utilizar?',
  },
  {
    label: 'Definir MVP',
    text: 'Com o entendimento da dor e do mercado. Qual é a Visão Inicial que entregaria Valor para o Usuário?',
  },
  {
    label: 'Planejar Roadmap',
    text: 'Organizar a evolução do produto, priorizando aquilo que gera maior valor.',
  },
  {
    label: 'Desenvolvimento',
    text: 'Acompanhamento das entregas. Backlog → Sprint Planning → Desenvolvimento → Testes → Deploy.',
  },
  {
    label: 'Lançar Produto',
    text: 'Validar com quem usa, ajustar com base no feedback e manter o time em direção ao valor.',
  },
  {
    label: 'Medir Resultados',
    text: 'Quantas pessoas usam? Quanto tempo permanecem? Qual funcionalidade utilizam? Estão satisfeitas?',
  },
  {
    label: 'Evoluir Produto',
    text: 'Melhoria contínua. Avaliar o que foi entregue e o que pode evoluir.',
  },
];

export default function ProcessFlow() {
  const [active, setActive] = useState(0);

  return (
    <section className="timeline">
      <div className="timeline__steps">
        {stages.map((stage, index) => (
          <button
            key={stage.label}
            className={`timeline__step ${active === index ? 'active' : ''}`}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h4>{stage.label}</h4>
          </button>
        ))}
      </div>

      <div className="timeline__detail">
        <h3>{stages[active].label}</h3>
        <p>{stages[active].text}</p>
      </div>
    </section>
  );
}