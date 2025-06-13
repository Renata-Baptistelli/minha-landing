import './App.css';
import fotoRenata from './assets/me.png'; 
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <section className="quem-sou">
        <img src={fotoRenata} alt="Renata" className="foto" />
        <div className="texto">
          <h1>Quem Sou</h1>
          <p>
            Sou Renata Baptistelli, uma mente criativa que uniu arte e tecnologia para transformar ideias em experiências visuais impactantes.
          </p>
          <p>
            Com uma trajetória marcada por reinvenção, estudo e muita paixão, hoje me dedico ao desenvolvimento web, design estratégico e criação de conteúdos digitais autênticos.
          </p>
          <p>
            Acredito na beleza da presença, na força da verdade e na leveza de comunicar com alma. Aqui compartilho meu universo digital, feito de códigos, cores, conexões e propósito.
          </p>
        </div>
      </section>

      <section className="contato">
        <p>Ou se preferir, fale comigo pelas redes sociais:</p>
        <div className="icones">
          <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://instagram.com/seuusuario" target="_blank" rel="noreferrer">
            <FaInstagram size={32} />
          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 Renata Baptistelli</p>
      </footer>
    </div>
  );
}

export default App;
