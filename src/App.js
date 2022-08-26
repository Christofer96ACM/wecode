import logo from './logo_bbva_blanco.svg';
import './App.css';
import Base from './Componentes/Base'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-component-params="{&quot;keepSize&quot;: &quot;&quot; }" src={logo} srcset={logo} sizes="(min-width: 900px) 20vw, 50vw" itemprop="logo" class="header_image " role="img" alt="BBVA Perú: Tarjetas, Cuentas, Préstamos, Inversiones, Créditos, Seguros">
        </img>
      </header>
      <body>
        <Base></Base>
      </body>
    </div>
  );
}

export default App;
