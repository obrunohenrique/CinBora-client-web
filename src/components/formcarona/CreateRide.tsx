import './CreateRideForm.css';

import React, { useState } from 'react';
import moment from 'moment';
import { Form, TimePicker, Checkbox, Input, Button, Space, Radio } from 'antd';
import type { FormProps } from 'antd';

type RideFormValues = {
  time: moment.Moment;
  days: string[];
  from: string;
  to: string;
  trajeto: string;
};

const daysOptions = [
  { label: 'Segunda', value: 'mon' },
  { label: 'Terça', value: 'tue' },
  { label: 'Quarta', value: 'wed' },
  { label: 'Quinta', value: 'thu' },
  { label: 'Sexta', value: 'fri' },
  { label: 'Sábado', value: 'sat' },
  { label: 'Domingo', value: 'sun' },
];

const locationOptions = [
  { label: 'CIn', value: 'saindo' },
  { label: 'Casa', value: 'partindo' },
];

const CreateRideForm: React.FC = () => {
  const [form] = Form.useForm<RideFormValues>();
  const [fromDisabled, setFromDisabled] = useState(false);
  const [toDisabled, setToDisabled] = useState(false);

  const onFinish: FormProps<RideFormValues>['onFinish'] = (values) => {
    console.log('Dados da carona:', {
      time: values.time.format('HH:mm'),
      days: values.days,
      from: values.from,
      to: values.to,
    });
  };

  const handleFormChange = (changedValues: any) => {
    if (changedValues.trajeto === 'saindo') {
      form.setFieldsValue({ from: 'CIn', to: '' });
      setFromDisabled(true);
      setToDisabled(false);
    } else if (changedValues.trajeto === 'partindo') {
      form.setFieldsValue({ from: '', to: 'CIn' });
      setFromDisabled(false);
      setToDisabled(true);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className="ride-form"
      onFinish={onFinish}
      onValuesChange={handleFormChange}
    >
      <Form.Item
        label="Horário"
        name="time"
        rules={[{ required: true, message: 'Selecione o horário!' }]}
        className="ride-form__item ride-form__item--time"
      >
        <TimePicker format="HH:mm" className="ride-form__time-picker" />
      </Form.Item>

      <Form.Item
        label="Dias da semana"
        name="days"
        rules={[{ required: true, message: 'Selecione pelo menos um dia!' }]}
        className="ride-form__item ride-form__item--days"
      >
        <Checkbox.Group
          options={daysOptions}
          className="ride-form__checkbox-group"
        />
      </Form.Item>

      <Form.Item
        label="Você está indo para:"
        name="trajeto"
        rules={[{ required: true, message: 'Escolha o trajeto!' }]}
        className="ride-form__item ride-form__item--trajeto"
      >
        <Radio.Group
          options={locationOptions}
          className="ride-form__radio-group"
        />
      </Form.Item>

      <Form.Item
        label="Ponto de partida"
        name="from"
        rules={[{ required: true, message: 'Informe o ponto de partida!' }]}
        className="ride-form__item ride-form__item--from"
      >
        <Input
          disabled={fromDisabled}
          placeholder="Ex: CIN UFPE"
          className="ride-form__input ride-form__input--from"
        />
      </Form.Item>

      <Form.Item
        label="Ponto de chegada"
        name="to"
        rules={[{ required: true, message: 'Informe o ponto de chegada!' }]}
        className="ride-form__item ride-form__item--to"
      >
        <Input
          disabled={toDisabled}
          placeholder="Ex: Porto Digital"
          className="ride-form__input ride-form__input--to"
        />
      </Form.Item>

      <Form.Item className="ride-form__item ride-form__item--actions">
        <Space className="ride-form__action-buttons">
          <Button type="primary" htmlType="submit" className="ride-form__submit-button">
            Criar Carona
          </Button>
          <Button htmlType="button" onClick={() => {
            form.resetFields();
            setFromDisabled(false);
            setToDisabled(false);
          }} className="ride-form__reset-button">
            Limpar
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CreateRideForm;
