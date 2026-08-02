import { useState } from 'react';

const stages = [
  {
    label: 'Criar um MVP rapidamente',
    text: 'O projeto começou como scripts em Python. Para validar rapidamente a solução com os usuários, optamos por construir um MVP em Streamlit antes de investir em uma interface definitiva.',
  },
  {
    label: 'Traduzir linguagem técnica',
    text: 'Transformei conceitos complexos de geotecnia em funcionalidades intuitivas, equilibrando necessidades técnicas, experiência do usuário e viabilidade de desenvolvimento.',
  },
  {
    label: 'Priorizar funcionalidades',
    text: 'Nem todas as melhorias podiam ser desenvolvidas ao mesmo tempo. As funcionalidades foram priorizadas considerando valor para o usuário, impacto no negócio e esforço técnico.',
  },
  {
    label: 'Equipe Reduzida',
    text: 'Atuei em diferentes frentes do produto: levantamento de requisitos, prototipação, desenvolvimento em Python, documentação técnica, validação com especialistas e acompanhamento das entregas.',
  },
  {
    label: 'Aprender React durante o projeto',
    text: 'Recebi uma interface desenvolvida em React, tecnologia que ainda não dominava. Analisei sua arquitetura, documentei as telas, propus melhorias e adaptei a estrutura para facilitar a evolução do produto.',
  },
  {
    label: 'Integrar diferentes tecnologias',
    text: 'Estruturei a comunicação entre backend e frontend por meio de APIs, permitindo que a nova interface consumisse as funcionalidades já desenvolvidas em Python sem necessidade de reescrever toda a lógica do sistema.',
  },
  {
    label: 'Garantia de Qualidade',
    text: 'Cada entrega era validada antes da disponibilização aos usuários. Realizei testes funcionais, conferência dos resultados, análise dos dados gerados e identificação de oportunidades de melhoria.',
  },
  {
    label: 'Escalar o Produto',
    text: 'Durante o Desenvolvimento, o produto passou por ciclos de evolução, incorporando novas funcionalidades, novas telas e melhorias sugeridas pelos usuários e especialistas da área.',
  },
];

export default function ProcessFlowApp() {
  const [active, setActive] = useState(0);

  return (
    <section className="timeline">
      <div className="timeline__steps">
        <div className="timeline__steps-track">
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
      </div>

      <div className="timeline__detail">
        <h3>{stages[active].label}</h3>
        <p>{stages[active].text}</p>
      </div>
    </section>
  );
}