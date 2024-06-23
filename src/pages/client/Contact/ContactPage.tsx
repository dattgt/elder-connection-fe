import React from 'react';
import { Typography } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ContactPage: React.FC = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="p-8 rounded-lg max-w-4xl w-full mx-4">
                <div className="flex flex-col md:flex-row items-center py-4">
                    <div className="md:w-1/2 p-4">
                        <Title level={2} style={{ color: '#004078' }}>Liên hệ</Title>
                        <p>
                            Chúng tôi mở cửa từ 8 giờ sáng đến 6 giờ chiều các ngày trong tuần và 9 giờ sáng đến 5 giờ chiều vào cuối tuần.
                        </p>
                        <p className="text-lg mt-4" style={{ color: '#004078' }}>
                            <PhoneOutlined style={{ color: '#08DCC1', marginRight: '8px' }} /> 0948 007 371
                        </p>
                    </div>

                    <div className="md:w-1/2 p-4 relative">
                        <div className="relative w-full h-64 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#08DCC1] rounded-full transform -rotate-12" style={{ clipPath: 'ellipse(75% 85% at 50% 50%)' }}></div>
                            <img src="https://www.frieslandcampina.com/uploads/sites/7/2023/07/02Contact-US-935x935-1-470x470.png" alt="Contact" className="relative w-4/5 h-auto rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
