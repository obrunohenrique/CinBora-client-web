import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../../components/header/Header";

// Importa o ícone padrão do leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Coordenadas do Centro de Informática da UFPE
const CIN_UFPE_COORDS: [number, number] = [-8.043, -34.879];

// Corrige o ícone padrão do marker (problema comum no react-leaflet)
const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function LandingPage() {
  return (
    <>
      <main className="background">
        <Header />

        {/* Seção sobre o App */}
        <section className="about-app">
          <h2>Sobre o CInBora</h2>
          <p>
            O <strong>CInBora</strong> é um aplicativo desenvolvido para facilitar o transporte
            sustentável dentro do Centro de Informática da UFPE, conectando alunos, professores
            e funcionários que desejam oferecer ou buscar caronas. A ideia é promover a mobilidade
            dentro da universidade, reduzindo o impacto ambiental e criando uma rede de apoio
            entre os membros da comunidade acadêmica.
          </p>
        </section>

        {/* Cards Incentivando o Uso do App */}
        <section className="app-cards">
          <h2>Por que usar o CInBora?</h2>
          <div className="cards-container">
            <div className="card">
              <h3>Economize Tempo e Dinheiro</h3>
              <p>
                Ofereça ou busque caronas com seus colegas. O <strong>CInBora</strong> conecta
                você diretamente a outros membros da comunidade acadêmica, economizando tempo
                e dinheiro no seu transporte.
              </p>
            </div>
            <div className="card">
              <h3>Seja a pessoa gente boa</h3>
              <p>
                Ajude seus amigos, colegas, parceiros, companheiros a fugir do busão lotado
              </p>
            </div>
            <div className="card">
              <h3>Salve-nos da METROREC</h3>
              <p>
                A plataforma do <strong>CInBora</strong> oferece um ambiente seguro e fácil de
                usar, conectando você com pessoas confiáveis para uma experiência tranquila.
              </p>
            </div>
          </div>
        </section>

        {/* Mapa - Centralizado no Centro de Informática da UFPE */}
        <section className="cinbora-map-container">
          <MapContainer
            center={CIN_UFPE_COORDS}
            zoom={16}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={CIN_UFPE_COORDS}>
              <Popup>Centro de Informática da UFPE</Popup>
            </Marker>
          </MapContainer>
        </section>

        {/* Footer Responsivo */}
        <footer className="cinbora-footer">
          <div className="cinbora-footer-content">
            <p>
              © 2025 <strong>CInBora</strong> | Todos os direitos reservados.
            </p>
            <p>
              Contato: <a href="mailto:mnr2@cin.ufpe.br">mnr2@cin.ufpe.br</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
