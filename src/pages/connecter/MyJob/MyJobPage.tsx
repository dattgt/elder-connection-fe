import React from 'react';
import { Row, Col, List, Avatar, Card, Table, Button, Typography, Select, Checkbox, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;
const { Text } = Typography;

const recentServicesData = [
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
    {
        name: 'Vũ Lan Anh',
        service: '1 ngày 2 đêm',
        connector: 'Lê Hoàng Anh',
        user: 'Nguyễn Chiến Thắng',
    },
];

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

const customerWeekData = [
    { name: 'Chú Tuấn', old: '75 tuổi', place: 'Quận 2', workDay: 'T3, T5', workTime: '7H-11H', status: 'Đang làm việc', phone: '0987712111', joinDay: '12/01/2023' },
    { name: 'Chị Quỳnh', old: '58 tuổi', place: 'Quận 2', workDay: 'T2, T4, T5', workTime: '14H-18H', status: 'Đã hoàn thành', phone: '0987712111', joinDay: '16/02/2023' },
    { name: 'Chú Anh Minh', old: '77 tuổi', place: 'Quận 2', workDay: 'T2, CN', workTime: '21H-1H', status: 'Đã hoàn thành', phone: '0987712111', joinDay: '17/03/2023' },
    { name: 'Cô Linh', old: '67 tuổi', place: 'Quận 1', workDay: 'T7, CN', workTime: '6H-12H', status: 'Đang làm việc', phone: '0987712111', joinDay: '19/03/2023' },
    { name: 'Chú Rạng', old: '82 tuổi', place: 'Bình Thạnh', workDay: 'T4, T7', workTime: '14H-18H', status: 'Đang làm việc', phone: '0987712111', joinDay: '19/03/2023' },
    { name: 'Chú Rạng', old: '82 tuổi', place: 'Quận 1', workDay: 'T4, T7', workTime: '14H-21H', status: 'Đã hủy', phone: '0987712111', joinDay: '19/03/2023' },
];

const customerWeekColumns = [
    { title: 'Khách hàng', dataIndex: 'name', key: 'name' },
    { title: 'Nơi làm việc', dataIndex: 'place', key: 'place' },
    { title: 'Ngày làm việc', dataIndex: 'workDay', key: 'workDay' },
    { title: 'Giờ làm việc', dataIndex: 'workTime', key: 'workTime' },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (text: string) => {
            let color;
            if (text === 'Đang làm việc') color = 'yellow';
            else if (text === 'Đã hoàn thành') color = 'green';
            else if (text === 'Đã hủy') color = 'red';
            return <div style={{ color }}>{text}</div>;
        },
    },
    {
        title: 'Thông tin liên lạc',
        dataIndex: 'phone',
        key: 'phone',
        render: (text: string) => <div style={{ backgroundColor: '#d1fead', textAlign: 'center' }}>{text}</div>,
    },
    { title: 'Ngày tham gia', dataIndex: 'joinDay', key: 'joinDay' },
];

const customerData = [
    { id: 1, username: '@long65', email: 'longnguyenthanh65@gmail.com', phone: '0389516625', recipient: 'Nguyễn Thành Long', registrant: 'Nguyễn Thành Long', joinDate: '12/01/2023' },
    { id: 2, username: '@vihuyen12', email: 'thivihuyen152@gmail.com', phone: '0315352530', recipient: 'Nguyễn Phi Vĩ Kí', registrant: 'Nguyễn Thị Vĩ Huyền', joinDate: '16/02/2023' },
    { id: 3, username: '@thannc1252', email: 'thangnc152@gmail.com', phone: '0389546532', recipient: 'Nguyễn Chiến Thắng', registrant: 'Nguyễn Chiến Thắng', joinDate: '17/03/2023' },
    { id: 4, username: '@dungnc', email: 'dung152snjj@gmail.com', phone: '0315165161', recipient: 'Đặng Hữu Phúc', registrant: 'Nguyễn Tấn Dũng', joinDate: '19/03/2023' },
    { id: 5, username: '@anhduong', email: 'anhduong@gmail.com', phone: '0398765432', recipient: 'Trần Văn Dương', registrant: 'Nguyễn Thị Hồng', joinDate: '20/03/2023' },
    { id: 6, username: '@minhhoang', email: 'minhhoang@gmail.com', phone: '0345678901', recipient: 'Phạm Minh Hoàng', registrant: 'Nguyễn Văn Đạt', joinDate: '21/03/2023' },
    { id: 7, username: '@hoangthu', email: 'hoangthu@gmail.com', phone: '0321654987', recipient: 'Lê Thị Thu', registrant: 'Phạm Văn Minh', joinDate: '22/03/2023' },
    { id: 8, username: '@linhnguyen', email: 'linhnguyen@gmail.com', phone: '0367890123', recipient: 'Nguyễn Văn Linh', registrant: 'Trần Thị Thùy Dung', joinDate: '23/03/2023' },
    { id: 9, username: '@khanhtrang', email: 'khanhtrang@gmail.com', phone: '0376543210', recipient: 'Phan Khánh Trang', registrant: 'Lê Văn Minh Tú', joinDate: '24/03/2023' },
    { id: 10, username: '@vietthang', email: 'vietthang@gmail.com', phone: '0354321098', recipient: 'Đỗ Việt Thắng', registrant: 'Nguyễn Thị Thương', joinDate: '25/03/2023' },
];

const columnsCustomer = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Tên tài khoản', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
    { title: 'Người hưởng thụ', dataIndex: 'recipient', key: 'recipient' },
    { title: 'Người đăng ký', dataIndex: 'registrant', key: 'registrant' },
    { title: 'Ngày tham gia', dataIndex: 'joinDate', key: 'joinDate' },
];

const MyJobPage = () => {
    return (
        <>
            <Title level={3} className="mb-6">Công việc của tôi</Title>

            <Row gutter={[16, 16]} className="mb-6">
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
                <Col span={12}>
                    <Card
                        title="Dịch vụ được đặt gần đây"
                        extra={
                            <div className="flex items-center">
                                <Select defaultValue="joinDate" style={{ width: 130, marginRight: 16 }}>
                                    <Option value="joinDate">Tháng 1/2024</Option>
                                    <Option value="username">Tháng 2/2024</Option>
                                    <Option value="total">Tháng 3/2024</Option>
                                </Select>
                            </div>
                        }
                    >
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
                                        <div style={{ flex: '1 1 150px' }}>
                                            {`${item.service}`}
                                        </div>
                                        <div style={{ flex: '1 1 150px' }}>{item.connector}</div>
                                        <div style={{ flex: '1 1 150px' }}>{item.user}</div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>

            <Card
                title="Bảng danh sách khách hàng trong tuần"
                extra={
                    <div className="flex items-center">
                        <Select defaultValue="week1" style={{ width: 90, marginRight: 16 }}>
                            <Option value="week1">Tuần 1</Option>
                            <Option value="week2">Tuần 2</Option>
                            <Option value="week3">Tuần 3</Option>
                        </Select>
                        <Select defaultValue="jan" style={{ width: 130, marginRight: 16 }}>
                            <Option value="jan">Tháng 1/2024</Option>
                            <Option value="feb">Tháng 2/2024</Option>
                            <Option value="mar">Tháng 3/2024</Option>
                        </Select>
                    </div>
                }>
                <Table dataSource={customerWeekData} columns={customerWeekColumns} pagination={false} />
            </Card>

            <Card
                title="Bảng danh sách khách hàng"
                extra={
                    <div className="flex items-center">
                        <span className="mr-2">sắp xếp theo</span>
                        <Select defaultValue="joinDate" style={{ width: 150, marginRight: 16 }}>
                            <Option value="joinDate">Ngày tham gia</Option>
                            <Option value="username">Tên tài khoản</Option>
                        </Select>
                        <Button type="primary" className="bg-green-500 text-white">+ Thêm mới</Button>
                    </div>
                }
            >
                <Table columns={columnsCustomer} dataSource={customerData} pagination={{ pageSize: 5 }} />
            </Card>
        </>
    );
};

export default MyJobPage;
