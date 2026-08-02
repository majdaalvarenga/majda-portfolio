import { Link } from 'react-router-dom'
import ProcessFlow from '../components/ProcessFlow'

const destinations = [
  {
    to: '/sobre',
    label: 'Sobre',
    text: 'Quem sou eu e um pouco sobre a minha trajetória.',
  },
  {
    to: '/casos',
    label: 'Casos',
    text: 'Projetos como o App Geotecnia e o raciocínio por trás de cada decisão.',
  },
  {
    to: '/contato',
    label: 'Contato',
    text: 'Formas de contato para conversas sobre uma oportunidade ou parceria.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero container">
        <div className="hero__copy">
          <span className="eyebrow">Product Owner</span>
          <h1 className="hero__title">
            Transformando <em>problemas</em> em produtos que fazem sentido.
          </h1>
          <p className="hero__subtitle">
            Minha trajetória começou na engenharia civil, onde desenvolvi uma abordagem analítica para resolver problemas complexos, unindo método, dados e pensamento crítico. Com o tempo, percebi que o que mais me motivava era criar soluções digitais capazes de gerar impacto em escala.
            <br /><br />
            Essa curiosidade me levou ao Product Management. Ao longo dessa transição, aprofundei meus conhecimentos em estratégia de produto, estruturação de fluxos e processos, além de aprender programação para transformar ideias em soluções reais. Este portfólio é parte dessa jornada: foi desenvolvido por mim para mostrar, na prática, como conecto negócio, tecnologia e experiência do usuário na construção de produtos digitais.  
          </p>
          <div className="hero__actions">
            <Link to="/casos" className="button button--primary">Ver casos</Link>
            <Link to="/sobre" className="button button--ghost">Conhecer a Májda</Link>
          </div>
        </div>
        <div className="hero__art">
          <img src="/images/hero-illustration.svg" alt="Ilustração representando quadro kanban, protótipo e checklist de histórias de usuário" />
        </div>
      </section>
        <br />
        <br /><br />
      <section className="container section-nav">
        <span className="eyebrow">Explore</span>
        <div className="section-nav__grid">
          {destinations.map((item) => (
            <Link to={item.to} className="nav-card" key={item.to}>
              <h3 className="nav-card__title">{item.label}</h3>
              <p className="nav-card__text">{item.text}</p>
              <span className="nav-card__arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
      <br />
      <div>
      <section className="container process-section process-section--home">
        <br /><br />
        <span className="eyebrow">Como penso a atuação de Product Owner</span>
        <h2 className="process-section__title">
          Timeline do Desenvolvimento de Produtos</h2>
        <ProcessFlow />
      </section>
      </div>
    </div>
  )
}
