import CarroImg from "./img/foto-carro-card.png"

import { GoLinkExternal } from "react-icons/go";
import { Card, List, Typography, Space, Spin } from 'antd';
import './styles.css';

interface Ride {
  days_of_week: string[];
  id: string;
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
  price: number;
  available_seats: number;
  status: string;
  created_at: string;
  id_driver: string;
  description: string;
  start_time: string;
  driver_name: string;
  driver_phone: string;
}

interface Props {
  rides: Ride[];
  ridesLoading: boolean;
}

function RidesList({ rides, ridesLoading }: Props) {
  
  console.log(rides)

  if (ridesLoading) {
    return (
      <Spin size="large" />
    )
  }

  if (rides.length === 0) {
    return null
  }
  
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={rides}
      renderItem={(ride) => (
        <List.Item>
          <Card className="driver-card" hoverable>
            <Space direction="vertical">
                <div className="header-card-driver">
                  <img src={CarroImg} alt="imagem de um carro de viagem" />
                  <div className='nome-hora-driver'>
                    <Typography.Text className="driver-name">{ride.driver_name}</Typography.Text>
                    {/* <Typography.Text className="driver-name">{ride.driver_phone}</Typography.Text> */}
                  </div>
                </div>

                <div className="label-value-card">
                  <Typography.Text className="label">Ocorrerá em</Typography.Text>
                  <Typography.Text className="driver-number">
                  {(() => {
                    const date = new Date(ride.start_time);
                    // Subtract 3 hours to adjust the timezone
                    date.setHours(date.getHours() - 3);
                    // Format as DD/MM/YYYY
                    return date.toLocaleDateString('pt-BR');
                  })()}
                  </Typography.Text>
                </div>
                <div className="label-value-card">
                  <Typography.Text className="label">Planeja sair às</Typography.Text>
                  <Typography.Text className="driver-number">
                  {(() => {
                    const date = new Date(ride.start_time);
                    // Subtract 3 hours to adjust the timezone
                    date.setHours(date.getHours() - 3);
                    // Format as HH:mm
                    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  })()}
                  </Typography.Text>
                </div>
              <a
                href={`https://wa.me/${ride.driver_phone.startsWith('+') ? ride.driver_phone.slice(1) : ride.driver_phone}`}
                rel="external"
                target="_blank"
                className="btn-entraremcontato"
              >
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

export default RidesList;
