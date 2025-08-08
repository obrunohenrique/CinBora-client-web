import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logomax from '../../../public/cinbora-logo-max.png'
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import './loginpage.css';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

type FieldType = {
	email?: string;
	password?: string;
	remember?: string;
};


const LoginPage = () => {
	const navigate = useNavigate();
	
	const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
		console.log('Success:', values);
	
		const response = await api.post(`/auth/login?email=${values.email}&password=${values.password}`);	
		
		const { 
			AccessToken, 
			IdToken, 
			RefreshToken 
		} = response.data;

		localStorage.setItem('accessToken', AccessToken);
		localStorage.setItem('IdToken', IdToken);
		localStorage.setItem('RefreshToken', RefreshToken);

		navigate('/obter-carona');
	
		toast.success('Login realizado com sucesso!🎉');
	};
	
	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
		toast.error('Preencha os campos corretamente!')
	};

	return (
		<main className='main-login'>
			<div className='main-login-sobreposicao'>

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
						<Input placeholder='Digite seu email@cin.ufpe.br' />
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


						<button className="login-button-text" type="button" onClick={() => console.log('Redirecionar para recuperar senha')}>
							Esqueci a senha
						</button>


					</div>
				</Form>
				<ToastContainer position="top-right" autoClose={3000} theme='colored' />
			</div>
		</main>
	)
}

export default LoginPage;
