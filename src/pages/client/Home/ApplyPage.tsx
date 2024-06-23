import React, { useState } from 'react';
import { Checkbox, Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const districts = [
    'Quận 1',
    'Quận 2',
    'Quận 3',
    'Quận 4',
    'Quận 5',
    'Quận 6',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Quận 10',
    'Quận 11',
    'Quận 12',
];

const ApplyPage: React.FC = () => {
    const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleDistrictChange = (district: string) => {
        setSelectedDistricts((prev) =>
            prev.includes(district) ? prev.filter((d) => d !== district) : [...prev, district],
        );
    };

    const handleNextStep = () => {
        setStep(2);
    };

    const handlePreviousStep = () => {
        setStep(1);
    };

    const handleSubmit = (values: any) => {
        console.log('Districts:', selectedDistricts);
        console.log('Form values:', values);

        // Hiển thị thông báo cập nhật thành công
        message.success('Cập nhật hồ sơ thành công!');

        // Chuyển hướng về trang Home sau 2 giây
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-200 via-green-300 to-blue-200">
            <div className="w-11/12 rounded-lg bg-white p-8 shadow-lg md:w-3/4 lg:w-1/2 xl:w-1/3">
                {step === 1 && (
                    <>
                        <h1 className="mb-4 text-center text-xl font-bold">
                            Bạn muốn làm việc ở khu vực nào?
                        </h1>
                        <div className="mb-6 grid grid-cols-2 gap-4">
                            {districts.map((district) => (
                                <div
                                    key={district}
                                    className={`cursor-pointer rounded-lg border-2 p-2 text-center ${selectedDistricts.includes(district) ? 'border-teal-400 bg-teal-300' : 'border-gray-300 bg-transparent'}`}
                                    onClick={() => handleDistrictChange(district)}
                                >
                                    {district}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <Link
                                to="/"
                                className="w-1/3 rounded-lg bg-gray-300 p-2 text-center shadow hover:bg-gray-400"
                            >
                                Quay lại
                            </Link>
                            <Button
                                className="w-1/3 rounded-lg bg-teal-400 p-2 text-center shadow hover:bg-teal-500"
                                onClick={handleNextStep}
                                disabled={selectedDistricts.length === 0}
                            >
                                Tiếp tục
                            </Button>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h1 className="mb-4 text-center text-xl font-bold">Bổ sung hồ sơ</h1>
                        <Form layout="vertical" onFinish={handleSubmit}>
                            <Form.Item
                                name="fullName"
                                label="Họ và Tên"
                                rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                            >
                                <Input placeholder="Bắt buộc" />
                            </Form.Item>
                            <Form.Item
                                name="identityCard"
                                label="Căn cước công dân"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập căn cước công dân!' },
                                ]}
                            >
                                <Input placeholder="Bắt buộc" />
                            </Form.Item>
                            <Form.Item
                                name="residenceCertification"
                                label="Giấy xác nhận cư trú"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập giấy xác nhận cư trú!',
                                    },
                                ]}
                            >
                                <Input placeholder="Bắt buộc" />
                            </Form.Item>
                            <Form.Item
                                name="resume"
                                label="Sơ yếu lý lịch"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập sơ yếu lý lịch!' },
                                ]}
                            >
                                <Input placeholder="Bắt buộc" />
                            </Form.Item>
                            <Form.Item
                                name="criminalRecord"
                                label="Giấy xác nhận hạnh kiểm"
                                extra="Bạn có thể bổ sung sau"
                            >
                                <Input placeholder="Không bắt buộc" />
                            </Form.Item>
                            <div className="flex justify-between">
                                <Button
                                    className="w-1/3 rounded-lg bg-gray-300 p-2 text-center shadow hover:bg-gray-400"
                                    onClick={handlePreviousStep}
                                >
                                    Quay lại
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="w-1/3 rounded-lg bg-teal-400 p-2 text-center text-white shadow hover:bg-teal-500"
                                >
                                    Cập nhật hồ sơ
                                </Button>
                            </div>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ApplyPage;
