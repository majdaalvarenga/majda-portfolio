import { useState } from 'react';

const stages = [
  {
    label: 'Entender a operação',
    text: 'Trabalhei junto às diferentes áreas da empresa para compreender a operação, identificar gargalos e documentar processos, criando uma base para iniciativas de melhoria contínua.',
  },
  {
    label: 'Desenhar processos',
    text: 'Desenhei o processo para um sistema de gestão da ocupação dos profissionais, definindo o fluxo desde o levantamento de requisitos até a homologação da solução.',
  },
  {
    label: 'Implantar indicadores (OKRs)',
    text: 'Liderei a implantação do modelo de OKRs, apoiando as áreas na definição de objetivos, indicadores e planos de ação, além do acompanhamento periódico dos resultados.',
  },
  {
    label: 'Fortalecer a cultura da qualidade',
    text: 'Atuei na revisão de procedimentos internos, auditorias e relacionamento com clientes, disseminando boas práticas de gestão da qualidade e padronização de processos.',
  },
  {
    label: 'Conduzir a preparação para a ISO 9001',
    text: 'Participei da estruturação dos processos necessários para a certificação ISO 9001, promovendo padronização documental, melhoria contínua e aderência aos requisitos da norma.',
  },
];

export default function ProcessFlowProcessos() {
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