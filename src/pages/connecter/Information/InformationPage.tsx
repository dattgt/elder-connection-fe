import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const InformationPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                    <Avatar size={128} icon={<UserOutlined />} />
                    <div>
                        <Title level={2} className="mb-0">Miss Hà</Title>
                        <Text>Trở thành Connector của Elder Connection từ 3 năm trước</Text>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="shadow-md">
                    <Title level={4}>Giới thiệu</Title>
                    <Text>Trở thành Connector của <strong>Elder Connection</strong> từ 3 năm trước</Text>
                </Card>

                <Card className="shadow-md">
                    <Title level={4}>Hoạt động gần đây</Title>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <MailOutlined className="mr-2" />
                            <Text>misshacute@gmail.com</Text>
                        </div>
                        <div className="flex items-center">
                            <PhoneOutlined className="mr-2" />
                            <Text>0988712243</Text>
                        </div>
                        <div className="flex items-center">
                            <CalendarOutlined className="mr-2" />
                            <Text>09-09-1999</Text>
                        </div>
                        <div className="flex items-center">
                            <UserOutlined className="mr-2" />
                            <Text>Nữ</Text>
                        </div>
                        <div className="flex items-center">
                            <EnvironmentOutlined className="mr-2" />
                            <Text>Biệt thự Ba Son, Bình Thạnh, Hồ Chí Minh</Text>
                        </div>
                    </div>
                </Card>

                <Card className="shadow-md">
                    <Title level={4}>Thông tin cá nhân</Title>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <MailOutlined className="mr-2" />
                            <Text>misshacute@gmail.com</Text>
                        </div>
                        <div className="flex items-center">
                            <PhoneOutlined className="mr-2" />
                            <Text>0988712243</Text>
                        </div>
                        <div className="flex items-center">
                            <CalendarOutlined className="mr-2" />
                            <Text>09-09-1999</Text>
                        </div>
                        <div className="flex items-center">
                            <UserOutlined className="mr-2" />
                            <Text>Nữ</Text>
                        </div>
                        <div className="flex items-center">
                            <EnvironmentOutlined className="mr-2" />
                            <Text>Biệt thự Ba Son, Bình Thạnh, Hồ Chí Minh</Text>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default InformationPage;
