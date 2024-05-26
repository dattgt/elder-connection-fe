import React from 'react';
import { Card, Row, Col, Progress, Select, List, Avatar, Table, Badge, Typography } from 'antd';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';

const { Option } = Select;
const { Title } = Typography;

const incomeData = [
    { name: 'Jan', income: 40 },
    { name: 'Feb', income: 30 },
    { name: 'Mar', income: 20 },
    { name: 'Apr', income: 27 },
    { name: 'May', income: 18 },
    { name: 'Jun', income: 23 },
    { name: 'Jul', income: 34 },
    { name: 'Aug', income: 45 },
    { name: 'Sep', income: 32 },
    { name: 'Oct', income: 25 },
    { name: 'Nov', income: 20 },
    { name: 'Dec', income: 28 },
];

const weeklyWorkHours = [
    { day: 'Mon', hours: 3 },
    { day: 'Tue', hours: 4 },
    { day: 'Wed', hours: 5 },
    { day: 'Thu', hours: 2 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 8 },
    { day: 'Sun', hours: 7 },
];

const customerData = [
    {
        key: '1',
        name: 'Chú Tuấn',
        location: 'Quận 2',
        workDays: 'T2, T5',
        status: 'Đang làm việc',
        phone: '0987712111',
        service: 'Gói ngày lễ',
        joinDate: '12/03/2023',
    },
    {
        key: '2',
        name: 'Chị Quỳnh',
        location: 'Quận 2',
        workDays: 'T3, T4',
        status: 'Đã hoàn thành',
        phone: '0987712112',
        service: 'Gói cuối tuần',
        joinDate: '16/03/2023',
    },
    {
        key: '3',
        name: 'Chú Anh Minh',
        location: 'Quận 1',
        workDays: 'T2, CN',
        status: 'Đã hoàn thành',
        phone: '0987712113',
        service: 'Gói ngoài hành chính',
        joinDate: '17/03/2023',
    },
    {
        key: '4',
        name: 'Cô Linh',
        location: 'Quận 1',
        workDays: 'T4, T6',
        status: 'Đang làm việc',
        phone: '0987712114',
        service: 'Gói ngày lễ',
        joinDate: '19/03/2023',
    },
    {
        key: '5',
        name: 'Chú Rạng',
        location: 'Bình Thạnh',
        workDays: 'T5, T7',
        status: 'Đang làm việc',
        phone: '0987712115',
        service: 'Gói cơ bản',
        joinDate: '19/03/2023',
    },
    {
        key: '6',
        name: 'Chú Rạng',
        location: 'Bình Thạnh',
        workDays: 'T1, T4, T7',
        status: 'Đã hủy',
        phone: '0987712116',
        service: 'Gói ngày lễ',
        joinDate: '19/03/2023',
    },
];

const columns = [
    {
        title: 'Khách Hàng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Nơi Làm Việc',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Ngày Làm Việc',
        dataIndex: 'workDays',
        key: 'workDays',
    },
    {
        title: 'Trạng Thái',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => (
            <Badge status={status === 'Đang làm việc' ? 'processing' : status === 'Đã hoàn thành' ? 'success' : 'error'} text={status} />
        ),
    },
    {
        title: 'Thông Tin Liên Lạc',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Gói Dịch Vụ',
        dataIndex: 'service',
        key: 'service',
    },
    {
        title: 'Ngày Tham Gia',
        dataIndex: 'joinDate',
        key: 'joinDate',
    },
];

const MyIncomePage: React.FC = () => {
    return (
        <>
            <Title level={2} className="mb-6">Bảng thống kê</Title>

            <Row gutter={[16, 16]} className="mb-6">
                <Col span={12}></Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Đánh giá của khách hàng" bordered={false}>
                        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>4.0</div>
                        <div>Điểm tích từ tháng vừa rồi</div>
                        <ResponsiveContainer width="100%" height={150}>
                            <LineChart data={incomeData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Tooltip />
                                <Line type="monotone" dataKey="income" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Mức độ làm việc trong tuần" bordered={false}>
                        <div>Trung bình 27.5h/tuần</div>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={weeklyWorkHours}>
                                <XAxis dataKey="day" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Tooltip />
                                <Bar dataKey="hours" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Tổng số giờ tham gia" bordered={false}>
                        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>1,087</div>
                        <div>Trung bình thời gian làm việc trong tháng</div>
                        <Progress type="circle" percent={78} format={() => '78h'} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={8}>
                    <Card title="Top khách hàng đang hỗ trợ nhiều nhất" bordered={false}>
                        <List
                            itemLayout="horizontal"
                            dataSource={customerData.slice(0, 5)}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://ui-avatars.com/api/?name=${item.name}&background=random`} />}
                                        title={item.name}
                                        description={`${item.location}, ${item.joinDate}`}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Top dịch vụ bạn được đánh giá cao nhất" bordered={false}>
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { name: 'Trò chuyện', count: 123, change: '+12.4%' },
                                { name: 'Chở đi thăm bạn bè', count: 56, change: '-8.5%' },
                                { name: 'Cùng nhau ăn uống', count: 43, change: '+6.9%' },
                                { name: 'Hướng dẫn sử dụng nghề', count: 42, change: '+16.7%' },
                                { name: 'Dìu dạo', count: 31, change: '-12.9%' },
                            ]}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta title={item.name} />
                                    <div>
                                        {item.count} <span style={{ color: item.change.startsWith('+') ? 'green' : 'red' }}>{item.change}</span>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Top nơi làm việc"
                        bordered={false}
                        extra={
                            <Select defaultValue="Tháng 1/2024" style={{ width: 120 }}>
                                <Option value="1">Tháng 1/2024</Option>
                                <Option value="2">Tháng 2/2024</Option>
                            </Select>
                        }
                    >
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={[{ name: 'Quận 1', value: 4 }, { name: 'Quận 2', value: 2 }, { name: 'Quận Bình Thạnh', value: 1 }]}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 24 }}>
                <Col span={24}>
                    <Card title="Chi tiết khách hàng" bordered={false}>
                        <Table columns={columns} dataSource={customerData} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default MyIncomePage;
