// HomePage.tsx
import { Card, Typography, Row, Col } from 'antd';
import {
    CheckCircleOutlined,
    HeartOutlined,
    ClockCircleOutlined,
    DollarOutlined,
} from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';

const { Title, Text } = Typography;

const HomePage = () => {
    const features = [
        {
            name: 'Hỗ trợ tận tâm',
            icon: <HeartOutlined className="mb-4 text-4xl" />,
            description:
                'Các chuyên gia hỗ trợ và nhóm lâm sàng của chúng tôi luôn sẵn sàng lắng nghe, hướng dẫn và hỗ trợ 7 ngày một tuần.',
        },
        {
            name: 'Điều kiện nhiều hơn',
            icon: <ClockCircleOutlined className="mb-4 text-4xl" />,
            description:
                'Nhận dịch vụ chăm sóc tại chỗ chỉ trong 24 giờ và định hình trải nghiệm của bạn với tài khoản Elder Connection của bạn.',
        },
        {
            name: 'Giá rẻ hơn',
            icon: <DollarOutlined className="mb-4 text-4xl" />,
            description:
                'Chỉ thanh toán cho dịch vụ chăm sóc cá nhân mà bạn cần mà không có phí tham gia, phụ phí hoặc chi phí ẩn.',
        },
        {
            name: 'Nhiều sự lựa chọn',
            icon: <CheckCircleOutlined className="mb-4 text-4xl" />,
            description:
                'Chọn người chăm sóc của bạn từ cộng đồng những người chăm sóc được đánh giá chất lượng của chúng tôi.',
        },
    ];

    const pricing = [
        {
            name: 'Gói ngày 4 tiếng',
            price: '262,800 VND',
            description: '4 TIẾNG / NGÀY',
            dayOfWeek: 'Thứ 2 - Chủ Nhật',
            hourOfday: '8 giờ sáng - 6 giờ chiều',
        },
        {
            name: 'Gói ngày 8 tiếng',
            price: '320,000 VND',
            description: '8 TIẾNG / NGÀY',
            dayOfWeek: 'Thứ 2 - Chủ Nhật',
            hourOfday: '8 giờ sáng - 6 giờ chiều',
        },
        {
            name: 'Gói tháng 4 tiếng',
            price: '~ 1,051,200 VND',
            description: '4 TIẾNG / NGÀY',
            dayOfWeek: 'Thứ 2 - Chủ Nhật',
            hourOfday: '8 giờ sáng - 6 giờ chiều',
        },
        {
            name: 'Gói tháng 8 tiếng',
            price: '~ 2,102,400 VND',
            description: '8 TIẾNG / NGÀY',
            dayOfWeek: 'Thứ 2 - Chủ Nhật',
            hourOfday: 'Trước 8 giờ sáng - Sau 6 giờ chiều',
        },
    ];

    const packages = [
        {
            name: '1 tháng',
            price: '1,152,000 - 3,328,000 VND',
            description: 'Dựa trên ngày bạn chọn',
            hourMonth: '16-32 tiếng/tháng',
            priceHour: '72,000 - 104,000 VND/h',
        },
        {
            name: '2 tháng',
            price: '2,304,000 - 6,656,000 VND',
            description: 'Dựa trên ngày bạn chọn',
            hourMonth: '16-32 tiếng/tháng',
            priceHour: '72,000 - 104,000 VND/h',
        },
        {
            name: '3 tháng',
            price: '3,456,000 - 9,984,000 VND',
            description: 'Dựa trên ngày bạn chọn',
            hourMonth: '16-32 tiếng/tháng',
            priceHour: '72,000 - 104,000 VND/h',
        },
    ];

    const activities = [
        {
            name: 'Hãy cho chúng tôi biết những gì bạn cần',
            imgUrl: 'https://devi-institut.com/wp-content/uploads/du-hoc-nghe-dieu-duong-cham-soc-nguoi-gia-tai-duc-hay-nhat-ban.jpg',
            description:
                'Bắt đầu trực tuyến. Chọn dịch vụ của bạn, chúng tôi sẽ bắt đầu kết nối bạn với người chăm sóc để bạn xem xét trên trang web hoặc ứng dụng Elder Connection.',
        },
        {
            name: 'Định hình giải pháp của bạn',
            imgUrl: 'https://cafebiz.cafebizcdn.vn/162123310254002176/2023/12/10/avatar1698037095909-16980370964381915520706-17022113665671793311925.jpeg',
            description:
                'Hoàn thành hồ sơ chăm sóc của bạn - điều này cho phép nhóm lâm sàng của chúng tôi xác nhận liệu việc chăm sóc có thể tiếp tục một cách an toàn hay không. Ở bước này, bạn cũng sẽ nhận được thông tin chi tiết về người chăm sóc phù hợp nhất.',
        },
        {
            name: 'Luôn kiểm soát',
            imgUrl: 'https://chamsocsuckhoeviet.com.vn/wp-content/uploads/2020/12/dich-vu-cham-soc-suc-khoe-nguoi-cao-tuoi-tai-nha-tam-va-duc.jpg',
            description:
                'Sau khi đã có dịch vụ chăm sóc, bạn và gia đình có thể quản lý dịch vụ đó từ mọi nơi bằng tài khoản ElderConnection của mình.',
        },
    ];

    return (
        <>
            <div style={{ backgroundColor: '#f5f3ef' }}>
                <section className="container mx-auto p-10 px-20">
                    <Row gutter={16} className="mb-10 items-center">
                        <Col xs={24} md={12}>
                            <Title level={2}>
                                <span style={{ color: '#a29ecd' }}>
                                    Elder Connection cung cấp giải pháp chăm sóc tại nhà với nhiều{' '}
                                </span>
                                <span style={{ color: '#7a9461' }}>hỗ trợ</span>
                            </Title>
                            <Text>
                                Kết hợp lòng nhân ái, sự đổi mới và kiến thức chuyên môn, chúng tôi
                                mang đến trải nghiệm chăm sóc tại nhà tốt hơn cho người lớn tuổi,
                                gia đình và người chăm sóc họ.
                            </Text>
                            <br />
                        </Col>
                        <Col xs={24} md={12}>
                            <img
                                src="https://vov2.vov.vn/sites/default/files/styles/large/public/2023-12/nguoi-gia-nghi-le_2.jpg"
                                alt="Elder Care"
                                className="w-full rounded-lg shadow-md"
                            />
                        </Col>
                    </Row>
                </section>
            </div>
            <div className="bg-white-100 px-20">
                <section className="container mx-auto mt-10 rounded-lg p-6">
                    <Row gutter={16}>
                        {features.map((feature, index) => (
                            <Col key={index} xs={24} md={6} className="text-center">
                                {feature.icon}
                                <Title level={4}>{feature.name}</Title>
                                <Text>{feature.description}</Text>
                            </Col>
                        ))}
                    </Row>
                </section>
            </div>
            <div style={{ backgroundColor: '#f5f3ef' }}>
                <section className="container mx-auto mt-10 p-6">
                    <Title level={3} className="text-center">
                        Định giá đơn giản và dễ hiểu
                    </Title>
                    <Text className="mb-6 block text-center">
                        Không giống như hầu hết các dịch vụ, chúng tôi yêu cầu tối thiểu 4 giờ.
                        Chúng tôi cung cấp giá tiêu chuẩn theo giờ cũng như hàng tháng kế hoạch và
                        gói.
                    </Text>

                    <Title level={3} className="text-center" style={{ color: '#7A9461' }}>
                        Giá tiền theo ca chúng tôi cung cấp như sau:{' '}
                    </Title>
                    <Row gutter={30} className="text-center">
                        {pricing.map((item, index) => (
                            <Col
                                key={index}
                                xs={20}
                                sm={14}
                                md={6}
                                className="mb-6 flex-auto justify-center"
                            >
                                <Card className="mb-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
                                    <Title
                                        level={4}
                                        style={{ color: '#7A9461' }}
                                        className="font-black"
                                    >
                                        {item.name}
                                    </Title>
                                    <Title level={2}>{item.price}</Title>
                                    <Text style={{ color: '#7A9461' }} className="font-bold">
                                        {item.description}
                                    </Text>{' '}
                                    <br />
                                    <Text>{item.dayOfWeek}</Text> <br />
                                    <Text className="font-semibold">{item.hourOfday}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </div>
            <div className="bg-white-100 px-20">
                <section className="container mx-auto mt-10">
                    <Title level={3} className="text-center">
                        Gói hàng tháng cung cấp với mức giá chiết khấu
                    </Title>
                    <Text className="mb-6 block text-center">
                        Những gói này là lựa chọn tốt nhất cho những người có nhu cầu thường xuyên
                        và hoàn hảo cho các gia đình mua thay cho người thân.
                    </Text>

                    <Title level={3} className="text-center" style={{ color: '#7A9461' }}>
                        Chúng tôi cung cấp các gói sau:{' '}
                    </Title>
                    <Row gutter={16} className="text-center">
                        {packages.map((item, index) => (
                            <Col key={index} xs={24} md={8}>
                                <Card className="mb-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
                                    <Title level={4} style={{ color: '#7A9461' }}>
                                        {item.name}
                                    </Title>
                                    <Title level={2}>{item.price}</Title>
                                    <Text style={{ color: '#7A9461' }} className="font-bold">
                                        {item.description}
                                    </Text>{' '}
                                    <br />
                                    <Text>{item.hourMonth}</Text> <br />
                                    <Text className="font-semibold">{item.priceHour}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </div>
            <div style={{ backgroundColor: '#f5f3ef' }}>
                <section className="container mx-auto mt-10 p-6">
                    <Title level={2} className="text-center" style={{ color: '#A29ECD' }}>
                        Elder Connection hoạt động như thế nào
                    </Title>
                    <Text className="mb-6 block text-center">
                        Kết hợp chuyên môn chăm sóc và các công cụ trực tuyến trực quan, chúng tôi
                        sẽ làm việc với bạn để sắp xếp việc chăm sóc suôn sẻ nhất có thể.
                    </Text>
                    <Row gutter={16}>
                        {activities.map((work, index) => (
                            <Col
                                key={index}
                                xs={24}
                                sm={16}
                                md={8}
                                className="mb-5 flex justify-center"
                            >
                                <Card className="mb-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
                                    <img
                                        src={work.imgUrl}
                                        alt={work.name}
                                        className="mb-4 h-[270px] w-full rounded-md"
                                    />
                                    <Title level={4} style={{ color: '#A29ECD' }}>
                                        {work.name}
                                    </Title>
                                    <Text>{work.description}.</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </div>
            <div className="container mx-auto mb-20 mt-10 flex flex-col items-center rounded-lg bg-white p-6 shadow-lg lg:flex-row">
                <div className="flex-1 text-center lg:text-left">
                    <Title level={1} className="font-bold">
                        Bạn đã sẵn sàng để trải nghiệm?
                    </Title>
                    <Text className="mt-2">
                        Tải, đăng ký và trải nghiệm những tính năng thú vị chỉ có trên ứng dụng
                        Elder Connection.
                    </Text>
                    <div className="mt-6 flex items-center justify-center lg:justify-start">
                        <QRCodeSVG
                            value="https://github.com/thanhlong109/elder-connection-mobile/releases/download/v1.1.0/elder_connection.apk"
                            className="ml-32 mr-4 h-72 w-72"
                        />
                        {/* <div>
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                                    alt="Google Play"
                                    className="mb-5 w-40"
                                />
                            </a>
                            <a
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="w-40"
                                />
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="mt-8 flex-1 lg:mt-0">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/017/264/717/non_2x/man-using-social-media-applications-on-mobile-cell-phone-person-texting-messages-in-chat-apps-on-smartphone-vector.jpg"
                        alt="Illustration"
                        className="h-full= w-full object-contain"
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
