import './CreateRideForm.css';

import React, { useState } from 'react';
import moment from 'moment';
import { Form, TimePicker, Button, DatePicker, message, Flex } from 'antd';
import type { Moment } from 'moment';
import LocationSearch from '../location-search';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CreateRideForm: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [origin, setOrigin] = useState<{ latitude: number; longitude: number } | null>(null);
  const [destination, setDestination] = useState<{ latitude: number; longitude: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleOriginSelect(location: { lat: number; lng: number }) {
    setOrigin({ latitude: location.lat, longitude: location.lng });
  }

  function handleDestinationSelect(location: { lat: number; lng: number }) {
    setDestination({ latitude: location.lat, longitude: location.lng });
  }

  function getDaysOfWeek(date: Moment) {
    return [date.format('dddd')];
  }

  async function handleSubmit(values: { date?: Moment; time?: Moment }) {
    const selectedDate = values.date;
    const selectedTime = values.time;

    if (!selectedDate || !selectedTime) {
      message.error('Por favor selecione data e hora.');
      return;
    }

    if (!origin || !destination) {
      message.error('Por favor selecione partida e destino.');
      return;
    }

    const combined = moment(
      `${selectedDate.format('YYYY-MM-DD')} ${selectedTime.format('HH:mm:ss')}`
    ).toISOString();

    const driver_id = localStorage.getItem("user_id")

    const body = {
      id_driver: driver_id,
      origin: origin,
      destination: destination,
      days_of_week: getDaysOfWeek(selectedDate),
      price: 0,
      available_seats: 0,
      status: 'available',
      start_time: combined,
      description: '',
    };

    try {
      setSubmitting(true);
      await api.post('/travel/', body);
      message.success('Carona criada com sucesso.');
      form.resetFields();
      setOrigin(null);
      setDestination(null);
    } catch (error) {
      console.error('Failed to create ride:', error);
      toast.error('Não conseguimos criar a carona agora. Tente mais tarde!')
    } finally {
      navigate('/obter-carona')
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="form"
      >
        <Flex vertical gap={32} justify="center">
          <label htmlFor="date-picker" style={{ display: 'block', marginBottom: 4, marginTop: 4, fontSize: 18 }}>
            Selecione o dia 🌅
          </label>
          <Form.Item name="date" rules={[{ required: true, message: 'Selecione o dia' }]}>
            <DatePicker placeholder="Selecione o dia" size="large" id="date-picker" />
          </Form.Item>

          <label htmlFor="time-picker" style={{ display: 'block', marginBottom: 4, marginTop: 4, fontSize: 18 }}>
            Selecione o horário ⌚
          </label>
          <Form.Item name="time" rules={[{ required: true, message: 'Selecione a hora' }]}>
            <TimePicker placeholder="Selecione a hora" size="large" id="time-picker" />
          </Form.Item>

          <LocationSearch label="Selecione partida 📍" onSelect={handleOriginSelect} />
          <LocationSearch label="Selecione destino 📍" onSelect={handleDestinationSelect} />

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={submitting}>
              Criar carona
            </Button>
          </Form.Item>
        </Flex>
      </Form>
      <ToastContainer position="top-right" autoClose={3000} theme='colored'/>
    </div>
  );
};

export default CreateRideForm;
