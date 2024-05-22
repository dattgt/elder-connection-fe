import React from 'react';
import { Row, Col, Card, Table, Button, Typography, Select } from 'antd';
import { UserOutlined, TeamOutlined, SolutionOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

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

const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Tên tài khoản', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Số điện thoại', dataIndex: 'phone', key: 'phone' },
    { title: 'Người hưởng thụ', dataIndex: 'recipient', key: 'recipient' },
    { title: 'Người đăng ký', dataIndex: 'registrant', key: 'registrant' },
    { title: 'Ngày tham gia', dataIndex: 'joinDate', key: 'joinDate' },
];

const ManageAccountPage = () => {
    return (
        <div className="bg-gray-100 p-6">
            <Title level={3} className="mb-6">Quản lý tài khoản</Title>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={8}>
                    <Card className="flex flex-col p-4">
                        <UserOutlined className="text-4xl text-blue-500" />
                        <Title level={4} className="mt-2">Tổng số khách hàng</Title>
                        <Title level={2} className="mt-2">2040</Title>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="flex flex-col p-4">
                        <TeamOutlined className="text-4xl text-blue-500" />
                        <Title level={4} className="mt-2">Tổng số Connectors</Title>
                        <Title level={2} className="mt-2">2040</Title>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="flex flex-col p-4">
                        <SolutionOutlined className="text-4xl text-blue-500" />
                        <Title level={4} className="mt-2">Tổng số nhân viên</Title>
                        <Title level={2} className="mt-2">2040</Title>
                    </Card>
                </Col>
            </Row>
            <Card
                title="Bảng danh sách khách hàng"
                extra={
                    <div className="flex items-center">
                        <span className="mr-2">sắp xếp theo</span>
                        <Select defaultValue="joinDate" style={{ width: 150, marginRight: 16 }}>
                            <Option value="joinDate">Ngày tham gia</Option>
                            <Option value="username">Tên tài khoản</Option>
                        </Select>
                        <Button type="primary">+ Thêm mới</Button>
                    </div>
                }
            >
                <Table columns={columns} dataSource={customerData} pagination={false} />
            </Card>
        </div>
    );
};

export default ManageAccountPage;
