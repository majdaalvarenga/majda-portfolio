import { useState } from 'react'
import ProcessFlowApp from '../components/ProcessFlow_app'
import ProcessFlow from '../components/ProcessFlow'
import ProcessFlowProcessos from '../components/ProcessFlow_processo'
import { FiChevronDown } from "react-icons/fi";

export default function Casos() {
  const [openCase, setOpenCase] = useState<string | null>(null)

  const toggleCase = (id: string) => {
    setOpenCase(openCase === id ? null : id)
  }

  return (
    <div className="casos container">
      <header className="casos__header">
        <span className="eyebrow">Casos</span>
        <h1 className="casos__title">Meus trabalhos</h1>
      </header>

      <div className="casos__list">
        <article className="case-card">
  <div className="case-card__content">
    <button
      type="button"
      className="case-card__header"
      onClick={() => toggleCase('geotecnia')}
      aria-expanded={openCase === 'geotecnia'}
      aria-controls="case-geotecnia-details"
    >
      <div>
        <span className="eyebrow">Projeto</span>
        <h2 className="case-card__title">App Geotecnia</h2>
      </div>

      <FiChevronDown
        className={`case-card__icon ${openCase === 'geotecnia' ? 'open' : ''}`}
        aria-hidden="true"
      />
    </button>

    <p className="case-card__text">Desenvolvimento de um aplicativo para automatizar análises geotécnicas, reduzindo atividades manuais e padronizando processos do laboratório. Atuei desde a descoberta do problema até a evolução contínua do produto, conciliando visão de negócio, conhecimento técnico e experiência do usuário.</p>

    <ul className="case-card__tags">
      <li>Levantamento de requisitos</li>
      <li>Protótipos</li>
      <li>Priorização</li>
      <li>Homologação</li>
    </ul>

    {openCase === 'geotecnia' && (
      <div className="case-card__details" id="case-geotecnia-details">
        <h3>Os principais desafios do projeto</h3>
        <ProcessFlowApp />

        <h3>Meu papel</h3>
        <ul>
          <li>Identifiquei oportunidades de digitalização de processos antes executados manualmente.</li> 
          <li>Conduzi o levantamento e refinamento de requisitos junto aos especialistas da área. </li>
          <li>Priorizei funcionalidades considerando impacto para os usuários e viabilidade técnica.</li>
          <li>Desenvolvi e evoluí soluções em Python, Flask e React em colaboração com o time.</li>
          <li>Estruturei uma base de dados para centralizar informações históricas do laboratório.</li>
          <li>Validei funcionalidades, realizei homologações e acompanhei a evolução do produto após as entregas.</li>
        </ul>
      </div>
    )}
  </div>
</article>
        <article className="case-card">
      <div className="case-card__content">
        <button
          type="button"
          className="case-card__header"
          onClick={() => toggleCase('processo')}
          aria-expanded={openCase === 'processo'}
          aria-controls="case-processo-details"
        >
          <div>
            <span className="eyebrow">Projeto</span>
            <h2 className="case-card__title">Processos e ISO 9001</h2>
          </div>

          <FiChevronDown
            className={`case-card__icon ${openCase === 'processo' ? 'open' : ''}`}
            aria-hidden="true"
          />
        </button>

        <p className="case-card__text">Responsável por mapear, estruturar e otimizar processos organizacionais, conduzindo iniciativas de melhoria contínua, implantação de indicadores, gestão da qualidade e projetos multidisciplinares com foco em eficiência operacional e geração de valor para o negócio.</p>

        <ul className="case-card__tags">
          <li>Processos</li>
          <li>ISO 9001</li>
        </ul>

        {openCase === 'processo' && (
          <div className="case-card__details" id="case-processo-details">
            <h3>Os principais desafios do projeto</h3>
            <ProcessFlowProcessos />

            <h3>Meu papel</h3>
            <ul>
              <li>Estruturei processos internos e conduzi iniciativas de melhoria contínua.</li> 
              <li>Gerenciei o backlog de melhorias operacionais, priorizando ações conforme impacto e esforço. </li>
              <li>Desenvolvi indicadores estratégicos e dashboards para apoiar a tomada de decisão da liderança.</li>
              <li>Modelei bancos de dados e automatizei análises utilizando SQL Server, Python e ferramentas de BI.</li>
              <li>Realizei análises exploratórias de dados (EDA) para identificar oportunidades de otimização.</li>
              <li>Coordenei projetos multidisciplinares envolvendo diferentes áreas da empresa.</li>
              <li>Atuei em auditorias internas e iniciativas de qualidade utilizando ferramentas como Diagrama de Ishikawa, Pareto e 5 Porquês.</li>
              <li>Apoiei a implantação de processos alinhados à ISO 9001 e à cultura de melhoria contínua.</li>
            </ul>
          </div>
        )}
      </div>
    </article>

        <article className="case-card">
          <div className="case-card__content">
          <span className="eyebrow">Repositório</span>
          <h2 className="case-card__title">Projetos e estudos no GitHub</h2>
          <p className="case-card__text">
            Além dos projetos apresentados neste portfólio, mantenho um repositório no
            GitHub com estudos, protótipos, desafios e aplicações desenvolvidas para
            aprofundar meus conhecimentos em Product Management, desenvolvimento e
            análise de dados. É uma forma de colocar em prática novas ideias e
            experimentar soluções para problemas reais.
          </p>
          <ul className="case-card__tags">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Processos</li>
            <li>SQL</li>
          </ul>
          <a
            href="https://github.com/majdaalvarenga"
            target="_blank"
            rel="noopener noreferrer"
            className="case-card__link"
          >
            Ver projetos no GitHub →
          </a>
          </div>
        </article>
      </div>

      <section className="process-section process-section--casos">
        <span className="eyebrow">Como penso na atuação de Product Owner</span>
        <h2 className="process-section__title">Timeline do Desenvolvimento de Produto</h2>
        <ProcessFlow />
      </section>
    </div>
  )
}
