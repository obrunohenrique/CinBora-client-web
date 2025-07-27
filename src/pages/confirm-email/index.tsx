import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
import './confirm-email-page.css';
import logomax from '../../../public/cinbora-logo-max.png'


type FieldType = {
	email?: string;
	password?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
	console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const ConfirmEmailPage = () => {
	return (
		<div className='main-recuperar-senha'>
			<div className='main-recuperar-senha-sobreposicao'>


				<Form
					name="basic"
					className="estrutura-formulario-verificacao"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>

					<div className='logo-login-container'>
						<img src={logomax} alt="logo cinbora" className='logo-cinbora-login' />
					</div>

					<Form.Item
						className="campo-codigo-verificacao"
						label="Código de verificação"
						name="verificationCode"
						rules={[
							{ required: true, message: 'Insira o código de verificação!' },
							{ min: 6, message: 'O código deve ter pelo menos 6 caracteres!' }
						]}
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
					>
						<Input.OTP className="input-codigo-estilizado" />
					</Form.Item>

					<Flex vertical={false} justify='space-between' className="area-acoes-verificacao">
						<Form.Item label={null} wrapperCol={{ span: 24 }} className="botao-verificar-container">
							<Button type="primary" htmlType="submit" className="botao-verificar">
								Verificar
							</Button>
						</Form.Item>
						<Form.Item label={null} wrapperCol={{ span: 24 }} className="botao-reenviar-container">
							<Button type="text" htmlType="submit" className="botao-reenviar">
								Reenviar
							</Button>
						</Form.Item>
					</Flex>
				</Form>
			</div>
		</div>
	)
}

export default ConfirmEmailPage;
