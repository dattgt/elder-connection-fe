import { useState } from 'react';
import { Row, Col, Card, Statistic, List, Avatar, Select, Typography } from 'antd';
import { AreaChartOutlined, UserOutlined, StarFilled } from '@ant-design/icons';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const { Option } = Select;

interface DataPoint {
    name: string;
    chiết_khấu: number;
    thanh_toán_connector: number;
}

interface DataType {
    [key: string]: DataPoint[];
}

const data: DataType = {
    Jan: [
        { name: '1/1', chiết_khấu: 20, thanh_toán_connector: 40 },
        { name: '5/1', chiết_khấu: 30, thanh_toán_connector: 50 },
        { name: '10/1', chiết_khấu: 40, thanh_toán_connector: 60 },
        { name: '15/1', chiết_khấu: 30, thanh_toán_connector: 80 },
        { name: '20/1', chiết_khấu: 20, thanh_toán_connector: 70 },
        { name: '25/1', chiết_khấu: 30, thanh_toán_connector: 60 },
        { name: '30/1', chiết_khấu: 20, thanh_toán_connector: 50 },
    ],
    Feb: [
        { name: '1/2', chiết_khấu: 25, thanh_toán_connector: 45 },
        { name: '5/2', chiết_khấu: 35, thanh_toán_connector: 55 },
        { name: '10/2', chiết_khấu: 45, thanh_toán_connector: 65 },
        { name: '15/2', chiết_khấu: 35, thanh_toán_connector: 85 },
        { name: '20/2', chiết_khấu: 25, thanh_toán_connector: 75 },
        { name: '25/2', chiết_khấu: 35, thanh_toán_connector: 65 },
        { name: '28/2', chiết_khấu: 25, thanh_toán_connector: 55 },
    ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6666', '#FF00FF'];

const customerAgeData = [
    { name: '85 tuổi trở lên', value: 3 },
    { name: '75 - 84 tuổi', value: 11 },
    { name: '65 - 75 tuổi', value: 2 },
    { name: '50 - 65 tuổi', value: 2 },
    { name: 'dưới 50 tuổi', value: 0 },
];

const connectorAgeData = [
    { name: '18 - 24 tuổi', value: 4 },
    { name: '25 - 29 tuổi', value: 2 },
    { name: '30 - 34 tuổi', value: 3 },
    { name: '35 - 40 tuổi', value: 0 },
    { name: 'Từ 41 tuổi trở lên', value: 0 },
];

const serviceDistributionData = [
    { name: 'Quận 1', value: 2 },
    { name: 'Quận 3', value: 1 },
    { name: 'Thủ đức', value: 4 },
    { name: 'Quận 12', value: 2 },
];

const { Text } = Typography;

const recentServicesData = [
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
];

const newConnectorsData = [
    { name: 'Vũ Lan Anh', time: 'Tham gia 12 giờ trước' },
    { name: 'Võ Tấn Ngọc Dũng', time: 'Tham gia 17 giờ trước' },
    { name: 'Vũ Lê Đức Lợi', time: 'Tham gia 19 giờ trước' },
    { name: 'Lê Hoàng Bảo Trân', time: 'Tham gia 25 giờ trước' },
];

const recentFeedbacksData = [
    { name: 'Vũ Lan Anh', feedback: 'Ngon á', rating: 5 },
    { name: 'Võ Tấn Ngọc Dũng', feedback: 'Quá là tuyệt vời lun', rating: 5 },
    { name: 'Vũ Lê Đức Lợi', feedback: 'Cụ nhà tôi đã thấy khoẻ hơn rồi', rating: 5 },
    { name: 'Lê Hoàng Bảo Trân', feedback: 'Bà nhà mình sống khoẻ hơn rồi', rating: 5 },
];

const DashBoardPage = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('Jan');

    const handleMonthChange = (value: string) => {
        setSelectedMonth(value);
    };

    return (
        <div className="bg-gray-100 p-6">
            <h2 className="mb-4 text-2xl font-bold">Bảng điều khiển</h2>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={6}>
                    <Card className="shadow-md">
                        <Statistic title="Tổng số phản hồi" value={4} />
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-green-500">Tăng 1.8% so với tuần trước</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="shadow-md">
                        <Statistic title="Tổng số doanh thu" value="4tr 250k" />
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-red-500">Giảm 4.3% so với tháng trước</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="shadow-md">
                        <Statistic title="Tổng số khách hàng" value={16} />
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-green-500">Tăng 1.3% so với tuần trước</span>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="shadow-md">
                        <Statistic title="Tổng số Connectors" value={9} />
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-green-500">Tăng 8.5% so với tuần trước</span>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={24}>
                    <Card
                        title="Doanh Thu"
                        extra={
                            <div className="flex items-center">
                                <AreaChartOutlined className="mr-2" />
                                <Select
                                    defaultValue={selectedMonth}
                                    style={{ width: 120 }}
                                    onChange={handleMonthChange}
                                >
                                    <Option value="Jan">Tháng 7</Option>
                                    <Option value="Feb">Tháng 8</Option>
                                </Select>
                            </div>
                        }
                        className="shadow-md"
                    >
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                                data={data[selectedMonth]}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorChiếtKhấu" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="colorThanhToánConnector"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="chiết_khấu"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#colorChiếtKhấu)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="thanh_toán_connector"
                                    stroke="#82ca9d"
                                    fillOpacity={1}
                                    fill="url(#colorThanhToánConnector)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={8}>
                    <Card title="Tỉ lệ độ tuổi khách hàng">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={customerAgeData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {customerAgeData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Tỉ lệ độ tuổi Connectors">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={connectorAgeData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#82ca9d"
                                    dataKey="value"
                                    label
                                >
                                    {connectorAgeData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Tỉ lệ phân bố dịch vụ">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={serviceDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#ffc658"
                                    paddingAngle={5}
                                    dataKey="value"
                                    label
                                >
                                    {serviceDistributionData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={10}>
                    <Card title="Dịch vụ được đặt gần đây" extra={<a href="#">Xem thêm</a>}>
                        <List.Item>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ flex: '1 1 150px' }}>
                                    <Text strong>Người đặt dịch vụ</Text>
                                </div>
                                <div style={{ flex: '1 1 150px' }}>
                                    <Text strong>Gói dịch vụ</Text>
                                </div>
                                <div style={{ flex: '1 1 150px' }}>
                                    <Text strong>Connector</Text>
                                </div>
                                <div style={{ flex: '1 1 150px' }}>
                                    <Text strong>Người hưởng dịch vụ</Text>
                                </div>
                            </div>
                        </List.Item>
                        <List
                            itemLayout="vertical"
                            dataSource={recentServicesData}
                            renderItem={(item) => (
                                <List.Item>
                                    <div
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div style={{ flex: '0 1 40px' }}>
                                            <Avatar icon={<UserOutlined />} />
                                        </div>
                                        <div style={{ flex: '1 1 150px' }}>
                                            <Text strong>{item.name}</Text>
                                        </div>
                                        <div style={{ flex: '1 1 150px' }}>{`${item.service}`}</div>
                                        <div style={{ flex: '1 1 150px' }}>{item.connector}</div>
                                        <div style={{ flex: '1 1 150px' }}>{item.user}</div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Connector mới" extra={<a href="#">Xem thêm</a>}>
                        <List
                            itemLayout="horizontal"
                            dataSource={newConnectorsData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon={<UserOutlined />} />}
                                        title={<Text strong>{item.name}</Text>}
                                        description={item.time}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Phản hồi gần đây" extra={<a href="#">Xem thêm</a>}>
                        <List
                            itemLayout="horizontal"
                            dataSource={recentFeedbacksData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon={<UserOutlined />} />}
                                        title={<Text strong>{item.name}</Text>}
                                        description={item.feedback}
                                    />
                                    <div>
                                        {[...Array(item.rating)].map((_, i) => (
                                            <StarFilled key={i} style={{ color: '#fadb14' }} />
                                        ))}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashBoardPage;
