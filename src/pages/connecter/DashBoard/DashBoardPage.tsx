import { Card, Row, Col, Progress, Select, Typography, Button, List, Checkbox, Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;
const { Text } = Typography;

const incomeData = [
    { name: 'Jan', income2023: 30, income2024: 50 },
    { name: 'Feb', income2023: 50, income2024: 30 },
    { name: 'Mar', income2023: 75, income2024: 60 },
    { name: 'Apr', income2023: 60, income2024: 90 },
    { name: 'May', income2023: 45, income2024: 50 },
    { name: 'Jun', income2023: 55, income2024: 70 },
    { name: 'Jul', income2023: 70, income2024: 60 },
    { name: 'Aug', income2023: 80, income2024: 95 },
    { name: 'Sep', income2023: 90, income2024: 80 },
    { name: 'Oct', income2023: 70, income2024: 85 },
    { name: 'Nov', income2023: 50, income2024: 60 },
    { name: 'Dec', income2023: 40, income2024: 55 },
]

const todoData = [
    {
        task: "Có lịch đến thăm với",
        due: "",
        status: "open",
        number: 3,
        tag: "",
    },
    {
        task: "Đến gặp cô mai và chơi cờ đi đánh cờ",
        due: "Today",
        status: "completed",
        number: 1,
        tag: "red",
    },
    {
        task: "Tham gia khóa đào tạo sơ cứu",
        due: "26 Jun 2024",
        status: "completed",
        number: 0,
        tag: "purple",
    },
    {
        task: "Tham gia khóa đào tạo tâm lí",
        due: "26 Feb 2024",
        status: "open",
        number: 0,
        tag: "orange",
        timeTag: "2 weeks"
    },
    {
        task: "Chuẩn bị đến nhà chú Anh lần đầu tiên",
        due: "26 Apr 2024",
        status: "open",
        number: 1,
        tag: "purple",
    },
    {
        task: "Tiến hành kiểm tra giờ làm tháng 2",
        due: "",
        status: "open",
        number: 0,
        tag: "green",
        timeTag: "1 week"
    }
];

const recentFeedbacksData = [
    { name: 'Bé Anh', date: 'Jan 14, 2024', feedback: 'Cô Hà Phan làm con rất vui sau khi trở về từ bệnh viện, con mong muốn gặp cô Hà nhìu hơn' },
    { name: 'Chú Tuấn đường phèn', date: 'April 12, 2024', feedback: 'Chú cảm thấy con như người nhà của chú vậy, nhờ có con chở chú đi khám bệnh mà nay chú đã khỏe hơn trước rất nhiều, cảm ơn con' },
    { name: 'Cô Mai', date: 'Aril 04, 2024', feedback: 'Không có con chắc cô cô đơn chất mất huhu' },
];


const DashBoardPage = () => {
    return (
        <>
            <h2 className="mb-4 text-2xl font-bold">Bảng thống kê</h2>
            <div className="flex items-center">
                <Select defaultValue="jan" style={{ width: 150, marginRight: 16 }}>
                    <Option value="jan">Tháng 1/2024</Option>
                    <Option value="feb">Tháng 2/2024</Option>
                </Select>
                <Button type="primary" className="bg-green-500 text-white">
                    Tạo bảng
                </Button>
            </div>

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Tổng thu nhập" bordered={false}>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={incomeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="income2023" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="income2024" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>

                <Col span={12}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card title="Người cần hỗ trợ mới" bordered={false}>
                                <Progress type="circle" percent={100} format={() => '6'} />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Nơi đến hỗ trợ" bordered={false}>
                                <Progress type="circle" percent={50} format={() => '9'} />
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card title="KT năng mới" bordered={false}>
                                <Progress type="circle" percent={100} format={() => '2'} />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Hóa đơn" bordered={false}>
                                <Progress type="circle" percent={100} format={() => '46'} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={12}>
                    <Card
                        title="Tổng số giờ làm việc"
                        bordered={false}
                        extra={
                            <Select defaultValue="Tháng 1" style={{ width: 120 }}>
                                <Option value="1">Tháng 1</Option>
                                <Option value="2">Tháng 2</Option>
                            </Select>
                        }
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Progress type="dashboard" percent={80} format={() => '80h'} />
                            <div>80h làm trong tháng 1</div>
                            <div style={{ marginTop: 16 }}>
                                <span style={{ color: '#8884d8' }}>●</span> Dịch vụ 1
                                <span style={{ marginLeft: 8, color: '#82ca9d' }}>●</span> Dịch vụ 2
                                <span style={{ marginLeft: 8, color: '#8884d8' }}>●</span> Dịch vụ 3
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Thu nhập qua các năm" bordered={false}>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={incomeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="income2023" stroke="#000000" />
                                <Line type="monotone" dataKey="income2024" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>

            {/*  */}

            <Row gutter={[16, 16]} className="mb-6">
                <Col span={12}>
                    <Card title="Đánh giá hằng tuần của khách hàng">
                        <List
                            itemLayout="horizontal"
                            dataSource={recentFeedbacksData}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon={<UserOutlined />} />}
                                        title={<Text strong>{item.name}</Text>}
                                        description={<>{item.date}<br />{item.feedback}</>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="Bảng công việc cần làm"
                        extra={
                            <div className="flex items-center">
                                <Button
                                    type="primary"
                                    className="bg-green-500 text-white"
                                >
                                    Thêm công việc
                                </Button>
                            </div>
                        }
                    >
                        <List
                            dataSource={todoData}
                            renderItem={item => (
                                <List.Item>
                                    <Checkbox checked={item.status === "completed"}>{item.task}</Checkbox>
                                    {[...Array(item.number)].map((_, i) => (
                                        <Avatar key={i} icon={<UserOutlined />} />
                                    ))}
                                    {item.due && <Tag color={item.tag}>{item.due}</Tag>}
                                    {item.timeTag && <Tag>{item.timeTag}</Tag>}
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DashBoardPage;
