import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';

const SuccessPage: React.FC = () => {
    const navigate = useNavigate();

    // Lấy ngày hiện tại
    const currentDate = new Date();
    const daysOfWeek = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // getMonth() trả về giá trị từ 0-11, cần cộng thêm 1
    const year = currentDate.getFullYear();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F5F0] p-8">
            <div className="w-full max-w-3xl rounded-md bg-white p-8 text-center shadow-md">
                <CheckCircleOutlined style={{ fontSize: '64px', color: '#52c41a' }} />
                <h2 className="mb-4 mt-4 text-2xl font-bold">Thanh Toán Thành Công</h2>
                <p className="mb-8 text-lg">
                    Cảm ơn bạn rất nhiều vì đã tin tưởng và sử dụng dịch vụ của <br />
                    <strong>Elder Connection</strong>
                </p>
                <p className="text-md mb-8">
                    {`${dayOfWeek}, ngày ${day} tháng ${month} năm ${year}`}
                </p>
                <Button type="primary" onClick={goToHome}>
                    Quay về trang chủ
                </Button>
            </div>
        </div>
    );
};

export default SuccessPage;
