import { Row, Col, Card, Table, Typography, Select } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const connectionData = [
    { id: 1, recipient: 'Hoàng Văn Tiến', connector: 'Lê Hoàng An', hours: 3, service: 'Cơ bản', startTime: '10:30 23/01/2023', district: 'Quận 1', status: 'Đang chờ' },
    { id: 2, recipient: 'Nguyễn Tấn Dũng', connector: 'Trần Thị Minh Nguyệt', hours: 3, service: 'Cơ bản', startTime: '11:30 24/01/2023', district: 'Quận 2', status: 'Đang chờ' },
    { id: 3, recipient: 'Lê Văn Hậu', connector: 'Phạm Thị Hồng', hours: 3, service: 'Cơ bản', startTime: '12:30 25/01/2023', district: 'Quận 3', status: 'Đang chờ' },
    { id: 4, recipient: 'Vũ Anh Tuấn', connector: 'Nguyễn Thị Bích', hours: 3, service: 'Cơ bản', startTime: '13:30 26/01/2023', district: 'Quận 4', status: 'Đang chờ' },
    { id: 5, recipient: 'Phạm Văn Kiên', connector: 'Đặng Thị Thanh', hours: 3, service: 'Cơ bản', startTime: '14:30 27/01/2023', district: 'Quận 5', status: 'Đang chờ' },
    { id: 6, recipient: 'Trần Văn Đạt', connector: 'Lê Thị Mai', hours: 3, service: 'Cơ bản', startTime: '15:30 28/01/2023', district: 'Quận 6', status: 'Đang chờ' },
    { id: 7, recipient: 'Đinh Văn Lâm', connector: 'Trần Thị Lan', hours: 3, service: 'Cơ bản', startTime: '16:30 29/01/2023', district: 'Quận 7', status: 'Đang chờ' },
    { id: 8, recipient: 'Bùi Văn Nam', connector: 'Phạm Thị Ngọc', hours: 3, service: 'Cơ bản', startTime: '17:30 30/01/2023', district: 'Quận 8', status: 'Đã xong' },
    { id: 9, recipient: 'Nguyễn Văn Hải', connector: 'Ngô Thị Thu', hours: 4, service: 'Ngoài giờ', startTime: '18:30 31/01/2023', district: 'Quận 9', status: 'Đã xong' },
    { id: 10, recipient: 'Đỗ Văn Long', connector: 'Vũ Thị Hương', hours: 5, service: 'Cuối tuần', startTime: '19:30 01/02/2023', district: 'Quận 10', status: 'Đã xong' },
];


const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Người hưởng thụ', dataIndex: 'recipient', key: 'recipient', render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`https://randomuser.me/api/portraits/men/${record.id}.jpg`} alt={text} style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 8 }} />
            <span>{text}</span>
        </div>
    )},
    { title: 'Người kết nối', dataIndex: 'connector', key: 'connector', render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`https://randomuser.me/api/portraits/women/${record.id}.jpg`} alt={text} style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 8 }} />
            <span>{text}</span>
        </div>
    )},
    { title: 'Số giờ', dataIndex: 'hours', key: 'hours' },
    { title: 'Gói dịch vụ', dataIndex: 'service', key: 'service' },
    { title: 'Thời gian bắt đầu', dataIndex: 'startTime', key: 'startTime' },
    { title: 'Khu vực', dataIndex: 'district', key: 'district' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: (status: string) => (
        <span style={{ color: status === 'Đang chờ' ? 'red' : 'green' }}>{status}</span>
    )},
];

const ManageConnectionPage = () => {
    return (
        <div className="bg-gray-100 p-6">
            <Title level={3} className="mb-6">Quản lý kết nối</Title>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={8} className="mr-8">
                    <Card className="bg-blue-400 text-white">
                        <Title level={4} className="mt-2 text-white">Tổng số kết nối hoàn thành</Title>
                        <Title level={2} className="mt-2 text-white">2040</Title>
                    </Card>
                </Col>
                <Col span={8} className="ml-8">
                    <Card className="bg-blue-500 text-white">
                        <Title level={4} className="mt-2 text-white">Tổng số kết nối đang thực hiện</Title>
                        <Title level={2} className="mt-2 text-white">2040</Title>
                    </Card>
                </Col>
            </Row>
            <Card
                title="Bảng danh sách kết nối"
                extra={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>Sắp xếp theo</span>
                        <Select defaultValue="Mới nhất" style={{ width: 150, marginRight: 16 }}>
                            <Option value="Mới nhất">Mới nhất</Option>
                            <Option value="Cũ nhất">Cũ nhất</Option>
                        </Select>
                    </div>
                }
            >
                <Table columns={columns} dataSource={connectionData} pagination={{ pageSize: 5 }} />
            </Card>
        </div>
    );
};

export default ManageConnectionPage;
