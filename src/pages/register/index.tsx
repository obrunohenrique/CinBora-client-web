import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logomax from '../../../public/cinbora-logo-max.png'
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import './register.css';

type FieldType = {
	username?: string;
	email?: string;
	password?: string;
	passwordConfirm?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
	console.log('Success:', values);
	toast.success('Cadastrado com sucesso!🎉')
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
	console.log('Failed:', errorInfo);
	toast.error('Por favor, revise os campos!')
};

const RegisterPage = () => {
	return (
		<div className='container'>
			<div className='container-cadastro-sobreposicao'>

				<Form
					name="basic"
					className="register-form-container"
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

					<div className='register-line-inputs'>
						<div className='label-input-register'>
							<p className="register-form-label"><span>&#42;</span> Nome de usuário</p>
							<Form.Item<FieldType>
								className="register-form-input"
								name="username"
								rules={[{ required: true, message: 'Insira seu nome de usuário!' }]}
								wrapperCol={{ span: 24 }}
							>
								<Input placeholder='Digite seu nome de usuário' />
							</Form.Item>
						</div>

						<div className='label-input-register'>
							<p className="register-form-label"><span>&#42;</span> E-mail do CIn</p>
							<Form.Item<FieldType>
								className="register-form-input"
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
								<Input placeholder='Digite seu email@cin.ufpe.br' />
							</Form.Item>
						</div>

					</div>

					<Form.Item<FieldType>
						className="register-form-input"
						label={<span className="register-form-label">Senha</span>}
						name="password"
						rules={[{ required: true, message: 'Insira sua senha!' }]}
						wrapperCol={{ span: 24 }}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item<FieldType>
						className="register-form-input"
						label={<span className="register-form-label">Confirmação de senha</span>}
						name="passwordConfirm"
						rules={[
							{ required: true, message: 'Confirme sua senha!' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('As senhas não coincidem!'));
								},
							}),
						]}
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item<FieldType>
						className="register-checkbox"
						name="remember"
						valuePropName="checked"
						label={null}
						wrapperCol={{ span: 24 }}
					>
						<Checkbox>Lembrar de você</Checkbox>
					</Form.Item>

					<Form.Item label={null} wrapperCol={{ span: 24 }}>
						<button className="login-button-primary" type="submit">
							Casdastre-se
						</button>
					</Form.Item>
				</Form>
				<ToastContainer position="top-right" autoClose={3000} theme='colored'/>
			</div>
		</div>

	)
}

export default RegisterPage;
