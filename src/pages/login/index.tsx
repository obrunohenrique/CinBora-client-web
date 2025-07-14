import type { FormProps } from 'antd';
import { Button, Checkbox, Flex, Form, Input } from 'antd';

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
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ minWidth: 400 }}
			layout='vertical'
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item<FieldType>
				label="E-mail"
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
				label="Senha"
				name="password"
				rules={[{ required: true, message: 'Insira sua senha!' }]}
				wrapperCol={{ span: 24 }}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item<FieldType>
				name="remember"
				valuePropName="checked"
				label={null}
				wrapperCol={{ span: 24 }}
			>
				<Checkbox>Lembrar de você</Checkbox>
			</Form.Item>

			<Flex vertical={false} justify='space-between'>
 				<Form.Item label={null} wrapperCol={{ span: 24 }}>
 					<Button type="primary" htmlType="submit">
 						Acesse
 					</Button>
 				</Form.Item>
 				<Form.Item label={null} wrapperCol={{ span: 24 }}>
 					<Button type="text" htmlType="submit">
 						Esqueci a senha
 					</Button>
 				</Form.Item>
			</Flex>
		</Form>
  )
}

export default LoginPage