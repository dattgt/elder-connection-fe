import React from 'react';
import { Form, Input, Button, Avatar, Upload } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';

const AccountPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <div className="flex min-h-screen items-start justify-center bg-[#F8F5F0] p-8">
            <div className="w-full max-w-4xl rounded-md bg-white p-8 shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Thông tin cá nhân</h2>
                <div className="mb-6 flex items-center">
                    <Avatar size={64} src="/path-to-avatar.jpg" className="mr-4" icon={<UserOutlined />}/>
                    <div>
                        <h3 className="text-lg font-semibold">Nguyen Chien Thang</h3>
                        <p className="text-sm text-gray-500">CEO Elder Connection</p>
                    </div>
                </div>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name="fullName" label="Họ tên" initialValue="Nguyen Chien Thang">
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Địa chỉ Email" initialValue="email@example.com">
                        <Input type="email" prefix={<i className="far fa-envelope"></i>} />
                    </Form.Item>
                    <Form.Item name="phone" label="Số điện thoại" initialValue="0123456789">
                        <Input type="tel" prefix={<i className="fas fa-phone"></i>} />
                    </Form.Item>
                    <Form.Item name="address" label="Địa chỉ" initialValue="123 Example Street">
                        <Input prefix={<i className="fas fa-map-marker-alt"></i>} />
                    </Form.Item>
                    <Form.Item label="Mật khẩu hiện tại">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Mật khẩu mới">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Xác nhận mật khẩu mới">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <div className="flex justify-between">
                            <Button type="default">Hủy</Button>
                            <Button type="primary" htmlType="submit">
                                Lưu
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
                <div className="mt-6 flex justify-between">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Tải hình ảnh mới</Button>
                    </Upload>
                    <Button danger>Xóa hình ảnh</Button>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
