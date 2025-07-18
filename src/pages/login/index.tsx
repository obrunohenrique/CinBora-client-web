import logomax from '../../../public/cinbora-logo-max.png'
import type { FormProps } from 'antd';
import { Checkbox, Flex, Form, Input } from 'antd';
import './loginpage.css';

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

const LoginPage = () => {
	return (
		<main className='main-login'>
			<Form
				name="basic"
				className="login-form-container"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ minWidth: 400 }}
				layout='vertical'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				>
				<div className='logo-login-container'>
					<img src={logomax} alt="logo cinbora" className='logo-cinbora-login' />
				</div>

				<Form.Item<FieldType>
					className="login-form-input"
					label={<span className="login-form-label">E-mail</span>}
					name="email"
					rules={[
						{ required: true, message: 'Insira seu endereço de e-mail!' },
						{
							validator: (_, value) => {
								if (!value || value.endsWith('@cin.ufpe.br')) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('O e-mail deve ser do domínio cin.ufpe.br'));
							},
						},
					]}
					wrapperCol={{ span: 24 }}
					>
					<Input placeholder='seu.email@cin.ufpe.br' />
				</Form.Item>

				<Form.Item<FieldType>
					className="login-form-input"
					label={<span className="login-form-label">Senha</span>}
					name="password"
					rules={[{ required: true, message: 'Insira sua senha!' }]}
					wrapperCol={{ span: 24 }}
					>
					<Input.Password />
				</Form.Item>

				<Form.Item<FieldType>
					className="login-remember-checkbox"
					name="remember"
					valuePropName="checked"
					label={null}
					wrapperCol={{ span: 24 }}
					>
					<Checkbox>Lembrar de você</Checkbox>
				</Form.Item>

				<div className="login-actions">
					
						<button className="login-button-primary" type="submit">
							Acesse
						</button>
					
					
						<button className="login-button-text" type="submit">
							Esqueci a senha
						</button>
					
				</div>
			</Form>
		</main>
	)
}

export default LoginPage;
