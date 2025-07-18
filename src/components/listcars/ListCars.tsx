import CarroImg from "./img/foto-carro-card.png"

import { GoLinkExternal } from "react-icons/go";
import { Card, List, Typography, Space } from 'antd';
import './DriverCardList.css'; 

type DriverInfo = {
  time: string;
  days: string[];
  name: string;
  origem: string;
  destino: string;
  number: string;
  proximityKm: number;
};

const mockDrivers: DriverInfo[] = [
  { time: '08:30',days: ['seg', 'ter', 'qua', 'qui'],  name: 'João Silva',origem:'CIn - centro de informática', destino: 'Piedade, Jaboatão', number: 'ABC‑1234', proximityKm: 1.2 },
  { time: '09:15',days: ['seg', 'ter', 'qua', 'qui'], name: 'Maria Souza',origem:'CIn - centro de informática',destino: 'Piedade, Jaboatão', number: 'DEF‑5678', proximityKm: 0.8 },
  { time: '10:00',days: ['seg', 'ter', 'qua', 'qui'], name: 'Carlos Pereira',origem:'CIn - centro de informática', number: 'GHI‑9012',destino: 'Piedade, Jaboatão', proximityKm: 2.5 },
];

function DriverCardList() {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={mockDrivers}
      renderItem={(driver) => (
        <List.Item>
          <Card className="driver-card" hoverable>
            <Space direction="vertical">
                <div className="header-card-driver">
                  <img src={CarroImg} alt="imagem de um carro de viagem" />
                  <div className='nome-hora-driver'>
                    <Typography.Text className="driver-name">{driver.name}</Typography.Text>
                    <Typography.Text className="driver-time">{driver.time}</Typography.Text>
                  </div>
                </div>
                
                <div className="label-value-card">
                  <Typography.Text strong className="label">Dias:</Typography.Text>
                  <Typography.Text className="driver-number">
                    {driver.days.map((day) =>
                      day.charAt(0).toUpperCase() + day.slice(1)
                    ).join(', ')}
                  </Typography.Text>
                </div>


              <div className="info-card-driver">

                <div className="colunas-card-driver">
                  <div className="label-value-card">
                    <Typography.Text strong className="label">Saída:</Typography.Text>
                    <Typography.Text className="driver-number">{driver.origem}</Typography.Text>
                  </div>
                  <div className="label-value-card">
                    <Typography.Text strong className="label">Placa:</Typography.Text>
                    <Typography.Text className="driver-number">{driver.number}</Typography.Text>
                  </div>
                </div>

                <div className="colunas-card-driver">
                  <div className="label-value-card">
                    <Typography.Text strong className="label">Destino:</Typography.Text>
                    <Typography.Text className="driver-number">{driver.destino}</Typography.Text>
                  </div>
                  <div className="label-value-card">
                    <Typography.Text strong className="label">Proximidade:</Typography.Text>
                    <Typography.Text className="driver-proximity">
                      {driver.proximityKm.toFixed(1)} km
                    </Typography.Text>
                  </div>
                </div>

              </div>

              <a href="https://wa.me/5581985254334" rel="external" target="_blank" className="btn-entraremcontato">
                Entrar em contato
                <GoLinkExternal />
              </a>
            </Space>
          </Card>
        </List.Item>
      )}
    />
  );
}

export default DriverCardList;
