const responsibilities = [
  'Levantamento de requisitos',
  'Definição de funcionalidades',
  'Protótipos',
  'Priorização',
  'Refinamento',
  'User Stories',
  'Acompanhamento do desenvolvimento',
  'Homologação',
  'Feedback dos usuários',
]

export default function Sobre() {
  return (
    <div className="sobre container">
      <div className="sobre__grid">
        <div className="sobre__intro">
          <span className="eyebrow">Sobre</span>
          <h1 className="sobre__title">Eu sou a Májda <em>.</em></h1>
          
          <p className="sobre__text">
            Minha trajetória profissional começou na Engenharia Civil, uma área que me ensinou a lidar com problemas complexos, analisar cenários e buscar soluções estruturadas. Durante essa jornada, percebi que o que mais me motivava não era apenas resolver problemas técnicos, mas entender desafios, conectar pessoas e construir soluções que gerassem impacto.
            <br /><br />
            Essa busca me levou ao universo de tecnologia e Product Management, onde encontrei uma combinação entre minha capacidade analítica, minha curiosidade e minha vontade de transformar ideias em produtos. Ao longo dessa transição, desenvolvi habilidades em gestão de processos, levantamento de requisitos, priorização de demandas e construção de soluções digitais, atuando na conexão entre negócio, usuários e tecnologia.
            <br /><br />
            Tenho uma característica que costumo brincar que sou “faz tudo”: gosto de aprender um pouco de tudo, colocar a mão na massa e me adaptar aos desafios que aparecem. Minha curiosidade já me levou da engenharia à tecnologia, passando por produto, programação e processos — e, no caminho, descobri que minha maior habilidade é aprender rápido, conectar conhecimentos diferentes e encontrar caminhos para resolver problemas.
            <br /><br />
            Fora do ambiente profissional, busco manter o equilíbrio através da prática de exercícios, que para mim representam disciplina, evolução e também um momento de descanso mental. Gosto de viajar, conhecer novos lugares, explorar novas experiências e valorizar os momentos simples ao lado das pessoas que fazem parte da minha história.
            <br /><br />
            Acredito que minha trajetória é marcada por adaptação, aprendizado contínuo e pela vontade de construir coisas melhores. Gosto de desafios que me tiram da zona de conforto e acredito que grandes soluções surgem quando combinamos curiosidade, colaboração e diferentes perspectivas.
          </p>
        </div>
        <div className="sobre__portrait">
          <img src="/images/majda.jpeg" alt="Foto Májda" />
        </div>
      </div>

      <section className="responsibilities">
        <span className="eyebrow">Minha responsabilidade</span>
        <ul className="responsibilities__list">
          {responsibilities.map((item) => (
            <li className="responsibilities__item" key={item}>
              <span className="responsibilities__check" aria-hidden="true">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
