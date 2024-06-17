import React, { useState } from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

const steps = ['Gói Dịch Vụ', 'Chọn Gói Tiện Ích', 'Ngày Và Giờ', 'Thông Tin Thêm'];

const ServicePage: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const next = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const prev = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const onFinish = (values: any) => {
        console.log('Form values:', values);
        navigate('/payment'); // Redirect to PaymentPage
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F8F5F0] p-8">
            <div className="w-full max-w-4xl rounded-md bg-white p-8 shadow-md">
                <h2 className="mb-4 text-2xl font-bold">{steps[currentStep]}</h2>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        servicePackage: 'Ngày trong tuần',
                        utilityPackage: 'Giúp đỡ các công việc tại nhà',
                        address: '',
                        datetime: [],
                        fullName: '',
                        email: '',
                        phone: '',
                        description: '',
                    }}
                >
                    {currentStep === 0 && (
                        <Form.Item
                            name="servicePackage"
                            label="Gói Dịch Vụ"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="Ngày trong tuần">Ngày trong tuần</Option>
                                <Option value="Ngày cuối tuần">Ngày cuối tuần</Option>
                                <Option value="Ngày lễ">Ngày lễ</Option>
                                <Option value="Ca đêm ngày thường">Ca đêm ngày thường</Option>
                                <Option value="Ca đêm ngày lễ và ngày cuối tuần">
                                    Ca đêm ngày lễ và ngày cuối tuần
                                </Option>
                            </Select>
                        </Form.Item>
                    )}
                    {currentStep === 1 && (
                        <>
                            <Form.Item
                                name="utilityPackage"
                                label="Gói Tiện Ích"
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="Giúp đỡ các công việc tại nhà">
                                        Giúp đỡ các công việc tại nhà
                                    </Option>
                                    <Option value="Giúp đỡ khi ra ngoài">
                                        Giúp đỡ khi ra ngoài
                                    </Option>
                                    <Option value="Giúp đỡ trong việc trò chuyện và kết nối">
                                        Giúp đỡ trong việc trò chuyện và kết nối
                                    </Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                    {currentStep === 2 && (
                        <Form.Item name="datetime" label="Ngày và giờ" rules={[{ required: true }]}>
                            <DatePicker.RangePicker showTime format="DD/MM/YYYY HH:mm" />
                        </Form.Item>
                    )}
                    {currentStep === 3 && (
                        <>
                            <Form.Item name="fullName" label="Họ và Tên">
                                <Input />
                            </Form.Item>
                            <Form.Item name="email" label="Email">
                                <Input type="email" />
                            </Form.Item>
                            <Form.Item name="phone" label="Số điện thoại">
                                <Input type="tel" />
                            </Form.Item>
                            <Form.Item name="description" label="Lưu ý của người nhà đối với người sử dụng dịch vụ">
                                <TextArea rows={4} />
                            </Form.Item>
                        </>
                    )}
                    <div className="mt-8 flex justify-between">
                        {currentStep > 0 && <Button onClick={prev}>Quay Lại</Button>}
                        {currentStep < steps.length - 1 && (
                            <Button type="primary" onClick={next}>
                                Tiếp Theo
                            </Button>
                        )}
                        {currentStep === steps.length - 1 && (
                            <Button type="primary" htmlType="submit">
                                Hoàn Thành
                            </Button>
                        )}
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ServicePage;
