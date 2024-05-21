import React from 'react';
import { Row, Col, Card, Table, Button, Typography, Select, Tag } from 'antd';
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const { Title } = Typography;
const { Option } = Select;

interface ServiceDataType {
    key: string;
    name: string;
    description: string;
    price: string;
    utilization: string;
    status: string;
    actions: string;
}

// Dummy data for charts and table
const distributionData = [
    { name: 'HCM', value: 1920, color: '#0088FE' },
    { name: 'Hà Nội', value: 1860, color: '#00C49F' },
    { name: 'Đà Nẵng', value: 1763, color: '#FFBB28' },
    { name: 'Định Quán', value: 375, color: '#FF8042' },
    { name: 'Các tỉnh thành khác', value: 105, color: '#FF00FF' },
];

const usageData = [
    { name: 'Gói cơ bản', value: 40 },
    { name: 'Gói nâng cao', value: 30 },
    { name: 'Gói Cao Cấp', value: 20 },
    // Add more usage data
];

const frequencyData = [
    { month: 'Jan', services: 40 },
    { month: 'Feb', services: 30 },
    { month: 'Mar', services: 20 },
    { month: 'Apr', services: 27 },
    { month: 'May', services: 18 },
    { month: 'Jun', services: 23 },
    { month: 'Jul', services: 34 },
    { month: 'Aug', services: 45 },
    { month: 'Sep', services: 38 },
    { month: 'Oct', services: 50 },
    { month: 'Nov', services: 41 },
    { month: 'Dec', services: 29 },
];

interface ServiceDataType {
    key: string;
    name: string;
    description: string;
    price: string;
    utilization: string;
    status: string;
    actions: string;
}

const serviceData: ServiceDataType[] = [
    {
        key: '1',
        name: 'Gói cơ bản',
        description: 'Kết nối với 1 Connector...',
        price: '130,000đ',
        utilization: '18%',
        status: 'Đang cung cấp',
        actions: 'Xem chi tiết',
    },
    {
        key: '2',
        name: 'Gói ngoài giờ hành chính',
        description: 'Kết nối với 1 Connector...',
        price: '150,000đ',
        utilization: '21%',
        status: 'Đang cung cấp',
        actions: 'Xem chi tiết',
    },
    {
        key: '3',
        name: 'Gói cuối tuần',
        description: 'Kết nối với 1 Connector...',
        price: '250,000đ',
        utilization: '21%',
        status: 'Đang cung cấp',
        actions: 'Xem chi tiết',
    },
    {
        key: '4',
        name: 'Gói ngày lễ',
        description: 'Kết nối với 1 Connector...',
        price: '300,000đ',
        utilization: '22%',
        status: 'Dừng cung cấp',
        actions: 'Xem chi tiết',
    },
];

const columns = [
    { title: 'Tên gói', dataIndex: 'name', key: 'name' },
    { title: 'Miêu tả', dataIndex: 'description', key: 'description' },
    { title: 'Giá cả', dataIndex: 'price', key: 'price' },
    { title: 'Tỉ lệ hoạt động', dataIndex: 'utilization', key: 'utilization' },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (text: string) => (
            <Tag color={text === 'Đang cung cấp' ? 'blue' : 'red'}>{text}</Tag>
        ),
    },
    {
        title: 'Hành động',
        dataIndex: 'actions',
        key: 'actions',
        render: (text: any, record: ServiceDataType) => (
            <span>
                <Button
                    type="default"
                    style={{
                        borderColor: record.status === 'Đang cung cấp' ? 'red' : 'green',
                        color: record.status === 'Đang cung cấp' ? 'red' : 'green',
                        marginRight: 8,
                    }}
                >
                    {record.status === 'Đang cung cấp' ? 'Dừng cung cấp' : 'Cung cấp'}
                </Button>
                <Button
                    type="default"
                    style={{ borderColor: 'blue', color: 'blue', marginRight: 8 }}
                >
                    Xem chi tiết
                </Button>
                <Button type="default" style={{ borderColor: 'orange', color: 'orange' }}>
                    Chỉnh sửa
                </Button>
            </span>
        ),
    },
];

const ManageServicePage = () => {
    return (
        <div className="bg-gray-100 p-6">
            <Title level={3}>Quản lý dịch vụ</Title>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={8}>
                    <Card
                        title="Tỉ lệ phân bố dịch vụ"
                        extra={
                            <Select defaultValue="Jan2023" style={{ width: 140 }}>
                                <Option value="Jan2023">Tháng 1 / 2023</Option>
                                <Option value="Feb2023">Tháng 2 / 2023</Option>
                            </Select>
                        }
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={distributionData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {distributionData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                [
                                                    '#0088FE',
                                                    '#00C49F',
                                                    '#FFBB28',
                                                    '#FF8042',
                                                    '#FF6666',
                                                ][index % 5]
                                            }
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Tỉ lệ sử dụng dịch vụ"
                        extra={
                            <Select defaultValue="Jan2023" style={{ width: 140 }}>
                                <Option value="Jan2023">Tháng 1 / 2023</Option>
                                <Option value="Feb2023">Tháng 2 / 2023</Option>
                                {/* Add more months */}
                            </Select>
                        }
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={usageData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#82ca9d"
                                    label
                                >
                                    {usageData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Tần suất sử dụng dịch vụ"
                        extra={
                            <Select defaultValue="Year2024" style={{ width: 120 }}>
                                <Option value="Year2024">Năm 2024</Option>
                                <Option value="Year2023">Năm 2023</Option>
                            </Select>
                        }
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={frequencyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="services" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={24}>
                    <Card
                        title="Bảng danh sách dịch vụ"
                        extra={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Select
                                    defaultValue="District1"
                                    style={{ width: 120, marginRight: 16 }}
                                >
                                    <Option value="District1">Quận 1</Option>
                                    <Option value="District2">Quận 2</Option>
                                    <Option value="District3">Quận 3</Option>
                                    <Option value="District4">Quận 4</Option>
                                    <Option value="District5">Quận 5</Option>
                                    <Option value="District6">Quận 6</Option>
                                    <Option value="District7">Quận 7</Option>
                                    <Option value="District8">Quận 8</Option>
                                    <Option value="District9">Quận 9</Option>
                                    <Option value="District10">Quận 10</Option>
                                    <Option value="District11">Quận 11</Option>
                                    <Option value="District12">Quận 12</Option>
                                </Select>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
                                >
                                    + Thêm mới
                                </Button>
                            </div>
                        }
                    >
                        <Table columns={columns} dataSource={serviceData} pagination={false} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ManageServicePage;
