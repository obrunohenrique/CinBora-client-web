import type { FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';

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
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Código de verificação"
				name="verificationCode"
				rules={[
					{ required: true, message: 'Insira o código de verificação!' },
					{ min: 6, message: 'O código deve ter pelo menos 6 caracteres!' }
				]}
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
			>
				<Input.OTP />
			</Form.Item>

			<Flex vertical={false} justify='space-between'>
				<Form.Item label={null} wrapperCol={{ span: 24 }}>
					<Button type="primary" htmlType="submit">
						Verificar
					</Button>
				</Form.Item>
				<Form.Item label={null} wrapperCol={{ span: 24 }}>
					<Button type="text" htmlType="submit">
						Reenviar
					</Button>
				</Form.Item>
			</Flex>
		</Form>
  )
}

export default ConfirmEmailPage