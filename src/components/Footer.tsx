
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__text">
          Májda · Product Owner — problema, solução, experiência do usuário.
        </p>
        <p className="site-footer__year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

