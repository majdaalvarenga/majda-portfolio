const channels = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/majdaalvarenga',
    hint: 'Trajetória, recomendações e conexões profissionais.',
  },
  {
    label: 'E-mail',
    href: 'mailto:majda.alvarenga@gmail.com',
    hint: 'Para propostas de trabalho, parcerias ou apenas um oi.',
  },
  {
    label: 'Currículo',
    value: 'Baixar PDF',
    href: '/cv/majda-alvarenga-cv.pdf',
    hint: 'Experiência completa, formação e certificações.',
    download: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/majdaalvarenga',
    hint: 'Estudos e Projetos realizados.',
  },
]

export default function Contact() {
  return (
    <div className="contact container">
      <header className="contact__header">
        <span className="eyebrow">Contato</span>
        <h1 className="contact__title">Vamos conversar sobre o seu próximo produto.</h1>
        <p className="contact__subtitle">
          Aberta a novas oportunidades na área de Produto e a conversas sobre produto,
          processo e experiência do usuário.
        </p>
      </header>

      <div className="contact__grid">
        {channels.map((channel) => (
          <a
            className="contact-card"
            href={channel.href}
            target={channel.label === 'LinkedIn' ? '_blank' : undefined}
            rel={channel.label === 'LinkedIn' ? 'noreferrer' : undefined}
            download={channel.download ? 'majda-alvarenga-cv.pdf' : undefined}
            key={channel.label}
          >
            <span className="eyebrow">{channel.label}</span>
            <p className="contact-card__value">{channel.value}</p>
            <p className="contact-card__hint">{channel.hint}</p>
            <span className="contact-card__arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
      
    </div>
  )
}
