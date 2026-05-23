import { useEffect, useState } from "react";
import "./App.css";

const produtos = [
  {
    nome: "Escalda Pés Relaxante",
    descricao: "Ideal para relaxar e aliviar o cansaço.",
    imagem: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    nome: "Óleo Terapêutico",
    descricao: "Perfeito para massagens e autocuidado.",
    imagem: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
  },
  {
    nome: "Kit Spa Premium",
    descricao: "Uma experiência completa de bem-estar.",
    imagem: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
];

function App() {
const [loading, setLoading] = useState(true);
const [carrinho, setCarrinho] = useState(0);
const [menuAberto, setMenuAberto] = useState(false);
const [produtoAberto, setProdutoAberto] = useState<string | null>(null);
const [modoEscuro, setModoEscuro] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 800);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ativo");
        }
      });
    },
    { threshold: 0.15 }
  );

  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, 900);

  return () => {
    clearTimeout(timer);
    observer.disconnect();
  };
}, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-logo">VE</div>
        <p>Preparando sua experiência...</p>
      </div>
    );
  }

  return (
    <div className={modoEscuro ? "site dark" : "site"}>
      <div className="fundo-animado"></div>

      <header className="header">
        <a href="#inicio" className="logo">
          <div className="logo-icon">VE</div>
          <div>
            <h1>Verde Essence</h1>
            <p>Escalda pés & bem-estar</p>
          </div>
        </a>


<button className="theme-btn" onClick={() => setModoEscuro(!modoEscuro)}>
  {modoEscuro ? "☀️" : "🌙"}
</button>

<nav className="nav">
  <a onClick={() => setMenuAberto(false)} href="#inicio">Início</a>
  <a onClick={() => setMenuAberto(false)} href="#produtos">Produtos</a>
  <a onClick={() => setMenuAberto(false)} href="#contato">Contato</a>
</nav>
      </header>

      <main>
        <section id="inicio" className="hero reveal">
          <div className="hero-texto">
            <span className="tag">🌿 Autocuidado artesanal</span>

            <h2>Transforme seu descanso em uma experiência de spa.</h2>

            <p>
              Escalda pés e óleos terapêuticos criados para trazer conforto,
              relaxamento e bem-estar para sua rotina.
            </p>

            <div className="botoes">
              <a
                className="btn principal"
href="https://wa.me/5541999999999?text=Ola%2C%20vim%20pelo%20site%20da%20Verde%20Essence%20e%20tenho%20interesse%20nos%20produtos."                target="_blank"
                rel="noreferrer"
              >
                Comprar pelo WhatsApp
              </a>

              <a className="btn secundario" href="#produtos">
                Ver produtos
              </a>
            </div>

            <div className="hero-numeros">
              <div>
                <strong>100%</strong>
                <span>artesanal</span>
              </div>

              <div>
                <strong>SPA</strong>
                <span>em casa</span>
              </div>

              <div>
                <strong>{carrinho}</strong>
                <span>itens adicionados</span>
              </div>
            </div>
          </div>

          <div className="hero-card glass">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop"
              alt="Momento de autocuidado"
            />

            <div className="hero-card-info">
              <span>Produto em destaque</span>
              <h3>Ritual Relaxante</h3>
              <p>Um cuidado especial para pés cansados.</p>
            </div>
          </div>
        </section>

        <section id="produtos" className="secao reveal">
          <div className="titulo">
            <span>Produtos</span>
            <h2>Catálogo inicial</h2>
            <p>Depois trocamos pelos produtos reais.</p>
          </div>

          <div className="grid-produtos">
            {produtos.map((produto) => (
              <article className="card glass" key={produto.nome}>
                <img src={produto.imagem} alt={produto.nome} />

                <div className="card-conteudo">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>

                  <div className="acoes-card">
  <button
    className="btn-card"
    onClick={() => setProdutoAberto(produto.nome)}
  >
    Ver detalhes
  </button>

  <button
    className="btn-card secundario-card"
    onClick={() => setCarrinho(carrinho + 1)}
  >
    Adicionar
  </button>
</div>
                </div>
              </article>
            ))}
          </div>
        </section>

<section className="faq reveal">
  <div className="titulo">
    <span>Dúvidas</span>
    <h2>Perguntas frequentes</h2>
    <p>Algumas respostas rápidas para deixar o site mais completo.</p>
  </div>

  <div className="faq-lista">
    <details className="glass">
      <summary>Os produtos são artesanais?</summary>
      <p>Sim, a proposta é trabalhar com produtos feitos com cuidado e foco em bem-estar.</p>
    </details>

    <details className="glass">
      <summary>Como faço para comprar?</summary>
      <p>Basta chamar pelo WhatsApp, informar o produto desejado e combinar pagamento e entrega.</p>
    </details>

    <details className="glass">
      <summary>Tem pronta entrega?</summary>
      <p>Essa informação será ajustada depois conforme o estoque real dos produtos.</p>
    </details>
  </div>
</section>

{produtoAberto && (
  <div className="modal-overlay" onClick={() => setProdutoAberto(null)}>
    <div className="modal glass" onClick={(e) => e.stopPropagation()}>
      <button className="fechar-modal" onClick={() => setProdutoAberto(null)}>
        ×
      </button>

      <h2>{produtoAberto}</h2>

      <p>
        Produto da linha Verde Essence pensado para relaxamento, autocuidado e
        bem-estar.
      </p>

      <a
        className="btn principal modal-btn"
href={`https://wa.me/5541999999999?text=Olá,%20tenho%20interesse%20no%20produto:%20${produtoAberto}`}        target="_blank"
        rel="noreferrer"
      >
        Comprar pelo WhatsApp
      </a>
    </div>
  </div>
)}

        <section id="contato" className="contato reveal">
          <div className="contato-box glass">
            <span>Contato</span>

            <h2>Pronto para criar seu momento de descanso?</h2>

            <p>
              Fale pelo WhatsApp e tire dúvidas sobre produtos, valores e
              disponibilidade.
            </p>

            <div className="botoes contato-botoes">
              <a
                className="btn whatsapp"
href="https://wa.me/5541999999999?text=Ola%2C%20vim%20pelo%20site%20da%20Verde%20Essence%20e%20tenho%20interesse%20nos%20produtos."                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>Verde Essence</h3>
          <p>Escalda pés artesanais & bem-estar.</p>
        </div>

        <div>
          <p>© 2026 Verde Essence</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
href="https://wa.me/5541999999999?text=Ola%2C%20vim%20pelo%20site%20da%20Verde%20Essence%20e%20tenho%20interesse%20nos%20produtos."        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;