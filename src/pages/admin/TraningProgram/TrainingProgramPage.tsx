import { Row, Col, Card, Table, Button, Typography, Select, Tag } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const programData = [
    { id: 1, name: 'Thấu hiểu tâm lý người cao tuổi', link: 'Meet - drd-yhaa-yqt(google.com)', quantity: 120, startTime: '10:30 23/01/2023', endTime: '12:30 23/01/2023', status: 'Đang chờ' },
    { id: 2, name: 'Kỹ năng giao tiếp với người cao tuổi', link: 'Meet - abc-def-ghi(google.com)', quantity: 100, startTime: '09:00 24/01/2023', endTime: '11:00 24/01/2023', status: 'Đã xong' },
    { id: 3, name: 'Chăm sóc sức khỏe người cao tuổi', link: 'Meet - jkl-mno-pqr(google.com)', quantity: 80, startTime: '14:00 25/01/2023', endTime: '16:00 25/01/2023', status: 'Đã xong' },
    { id: 4, name: 'Dinh dưỡng cho người cao tuổi', link: 'Meet - stu-vwx-yza(google.com)', quantity: 150, startTime: '13:30 26/01/2023', endTime: '15:30 26/01/2023', status: 'Đã xong' },
    { id: 5, name: 'Kỹ năng sơ cứu cơ bản cho người cao tuổi', link: 'Meet - bcd-efg-hij(google.com)', quantity: 110, startTime: '10:00 27/01/2023', endTime: '12:00 27/01/2023', status: 'Đang chờ' },
    { id: 6, name: 'Phòng tránh tai nạn cho người cao tuổi', link: 'Meet - klm-nop-qrs(google.com)', quantity: 90, startTime: '15:00 28/01/2023', endTime: '17:00 28/01/2023', status: 'Đã xong' },
    { id: 7, name: 'Chăm sóc tinh thần người cao tuổi', link: 'Meet - tuv-wxy-zab(google.com)', quantity: 130, startTime: '09:30 29/01/2023', endTime: '11:30 29/01/2023', status: 'Đã xong' },
    { id: 8, name: 'Hoạt động thể chất cho người cao tuổi', link: 'Meet - cde-fgh-ijk(google.com)', quantity: 95, startTime: '13:00 30/01/2023', endTime: '15:00 30/01/2023', status: 'Đã xong' },
    { id: 9, name: 'Kỹ năng lắng nghe và hỗ trợ người cao tuổi', link: 'Meet - lmn-opq-rst(google.com)', quantity: 85, startTime: '10:30 31/01/2023', endTime: '12:30 31/01/2023', status: 'Đã xong' },
    { id: 10, name: 'Tư vấn và hỗ trợ pháp lý cho người cao tuổi', link: 'Meet - uvw-xyz-abc(google.com)', quantity: 140, startTime: '14:00 01/02/2023', endTime: '16:00 01/02/2023', status: 'Đã xong' },
];


const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Tên chương trình', dataIndex: 'name', key: 'name' },
    { title: 'Link tham gia', dataIndex: 'link', key: 'link' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Thời gian bắt đầu', dataIndex: 'startTime', key: 'startTime' },
    { title: 'Thời gian kết thúc', dataIndex: 'endTime', key: 'endTime' },
    {
        title: 'Trạng thái', dataIndex: 'status', key: 'status',
        render: (status: string) => (
            <Tag color={status === 'Đã xong' ? 'green' : 'red'}>{status}</Tag>
        ),
    },
    {
        title: 'Hành động', key: 'action',
        render: () => (
            <div className="space-x-2">
                <Button type="link" className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">Dừng cung cấp</Button>
                <Button type="link" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Xem chi tiết</Button>
                <Button type="link" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Chỉnh sửa</Button>
            </div>
        ),
    },
];

const TrainingProgramPage = () => {
    return (
        <div className="bg-gray-100 p-6">
            <Title level={3} className="mb-6">Chương trình đào tạo</Title>
            <Row gutter={[16, 16]} className="mb-6">
                <Col span={8}>
                <Card className="bg-blue-500 text-white">
                        <Title level={4} className="mt-2 text-white">Tổng số chương trình đào tạo</Title>
                        <Title level={2} className="mt-2 text-white">2040</Title>
                </Card>
                </Col>
                <Col span={8}>
                <Card className="bg-blue-400 text-white">
                        <Title level={4} className='mt-2 text-white'>Tổng số lượng đã tham gia</Title>
                        <Title level={2} className="mt-2 text-white">2040</Title>
                    </Card>
                </Col>
                <Col span={8}>
                <Card className="bg-blue-600 text-white">
                        <Title level={4} className="mt-2 text-white">Tổng số lượng chưa tham gia</Title>
                        <Title level={2} className="mt-2 text-white">2040</Title>
                </Card>
                </Col>
            </Row>
            <Card
                title="Bảng danh sách chương trình đào tạo"
                extra={
                    <div className="flex items-center">
                        <span className="mr-2">Sắp xếp theo</span>
                        <Select defaultValue="joinDate" style={{ width: 150, marginRight: 16 }}>
                            <Option value="joinDate">Ngày tham gia</Option>
                            <Option value="username">Tên chương trình</Option>
                            <Option value="total">Số lượng</Option>
                        </Select>
                        <Button type="primary">+ Thêm mới</Button>
                    </div>
                }
            >
                <Table columns={columns} dataSource={programData} pagination={{ pageSize: 5 }} />
            </Card>
        </div>
    );
};

export default TrainingProgramPage;
