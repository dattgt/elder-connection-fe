import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const ServicesPage: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F8F5F0] p-8">
            <div className="w-full max-w-4xl rounded-md bg-white p-8 shadow-md">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Title level={2} className="" style={{ color: '#004078' }}>Dịch vụ</Title>
                        <p>
                            Khi bạn có nhu cầu được chăm sóc, Elder Connection có thể kết nối bạn với một người chăm sóc có kinh nghiệm, là một người mà bạn có thể tin tưởng để chăm sóc theo cách bạn mong muốn.
                        </p>
                        {/* <Button type="primary" className="bg-green-600 border-green-600 hover:bg-green-700 mt-4">Bắt đầu ngay</Button> */}
                        {/* <Button type="primary" className="border-[#5a6e40] bg-[#839567] text-white hover:border-[#4c5e35] hover:bg-[#6d7d4e] mt-4">Bắt đầu ngay</Button> */}
                    </div>
                    <div>
                        <img src="https://cdn-i.vtcnews.vn/resize/th/upload/2021/11/04/duonglao0-12301639.jpg" alt="Service" className="w-full h-auto rounded shadow" />
                    </div>
                </div>

                <div className="text-center my-12">
                    <Title level={3} className="" style={{ color: '#004078' }}>Đôi Khi Ta Cần Một Bàn Tay Giúp Đỡ !</Title>
                    <p className="max-w-2xl mx-auto">
                        Elder Connection luôn sẵn sàng cho những lúc gia đình hoặc hàng xóm không thể hỗ trợ. Chúng tôi hiểu rằng cuộc sống ngày nay thật bận rộn và đôi khi các cộng đồng trở nên ít gắn kết. Thông qua nền tảng của chúng tôi, Elder Connection giúp bạn hoặc người thân dễ dàng kết nối với những người hỗ trợ đáng tin cậy ngay trong cộng đồng của bạn.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <img src="https://baocantho.com.vn/image/fckeditor/upload/2019/20191125/images/nguoicaotuoithoilai.jpg" alt="Service 1" className="w-full h-48 object-cover rounded" />
                        <Title level={4} className="mt-4" style={{ color: '#004078' }}>Giúp đỡ các công việc tại nhà</Title>
                        <ul className="list-disc list-inside text-left">
                            <li>Chuẩn bị bữa ăn</li>
                            <li>Hỗ trợ các thiết bị công nghệ: iPad, điện thoại thông minh, v.v.</li>
                            <li>Thu dọn đồ đạc</li>
                            <li>Sắp xếp, dọn dẹp</li>
                            <li>Hỗ trợ tư vấn</li>
                            <li>Giặt giũ</li>
                            <li>Chăm sóc thú cưng</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <img src="https://baogiaothong.mediacdn.vn/files/hung.nguyen/2017/12/01/112527-ho-tro-nguoi-yeu-the-ba-na-2.JPG" alt="Service 2" className="w-full h-48 object-cover rounded" />
                        <Title level={4} className="mt-4" style={{ color: '#004078' }}>Giúp đỡ khi ra ngoài</Title>
                        <ul className="list-disc list-inside text-left">
                            <li>Đưa đón đi khám bệnh</li>
                            <li>Để các tiệm làm tóc</li>
                            <li>Đi mua sắm</li>
                            <li>Lấy thuốc tại nhà thuốc</li>
                            <li>Thăm bạn bè</li>
                            <li>Hỗ trợ người bạn đồng hành khi cần chạy việc!</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <img src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/song-khoe/2022/4-dieu-ban-can-lam-de-song-hanh-phuc-tuoi-gia-1200x800-1.jpg" alt="Service 3" className="w-full h-48 object-cover rounded" />
                        <Title level={4} className="mt-4" style={{ color: '#004078' }}>Kết nối và Niềm vui</Title>
                        <ul className="list-disc list-inside text-left">
                            <li>Giao lưu trò chuyện</li>
                            <li>Những buổi đi dạo</li>
                            <li>Làm đồ thủ công</li>
                            <li>Ăn uống cùng nhau</li>
                            <li>Những cuộc trò chuyện thú vị</li>
                            <li>Thăm người bạn</li>
                            <li>Đi chơi đến công viên, bảo tàng, thư viện, v.v.</li>
                            <li>Nhóm thể dục thường xuyên</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
