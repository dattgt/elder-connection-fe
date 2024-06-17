import React, { useState } from 'react';
import { Form, Input, Button, Select, Radio, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const PaymentPage: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('card');
    const navigate = useNavigate();

    const handleFinish = (values: any) => {
        console.log('Payment Details:', values);
        setTimeout(() => {
            navigate('/success'); 
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F8F5F0] p-8">
            <div className="w-full max-w-4xl rounded-md bg-white p-8 shadow-md">
                <h2 className="mb-4 text-center text-2xl font-bold">Phương Thức Thanh Toán</h2>
                <Form layout="vertical" onFinish={handleFinish}>
                    <Form.Item label="Chọn phương thức thanh toán">
                        <Radio.Group
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            value={paymentMethod}
                        >
                            <Radio value="card">Thẻ</Radio>
                            <Radio value="wallet">Ví Điện Tử</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Divider />

                    {paymentMethod === 'card' && (
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Thông tin Thẻ</h3>
                            <Form.Item
                                name="cardName"
                                label="Tên trên thẻ"
                                rules={[{ required: true, message: 'Vui lòng nhập tên trên thẻ' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="cardNumber"
                                label="Số thẻ"
                                rules={[{ required: true, message: 'Vui lòng nhập số thẻ' }]}
                            >
                                <Input maxLength={19} placeholder="XXXX XXXX XXXX XXXX" />
                            </Form.Item>
                            <Form.Item
                                name="expiryDate"
                                label="Ngày hết hạn"
                                rules={[{ required: true, message: 'Vui lòng nhập ngày hết hạn' }]}
                            >
                                <Input placeholder="MM/YY" />
                            </Form.Item>
                            <Form.Item
                                name="cvv"
                                label="CVV"
                                rules={[{ required: true, message: 'Vui lòng nhập CVV' }]}
                            >
                                <Input maxLength={3} />
                            </Form.Item>
                            <Form.Item name="cardCountry" label="Quốc gia" initialValue="Vietnam">
                                <Select>
                                    <Option value="Vietnam">Vietnam</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    )}

                    {paymentMethod === 'wallet' && (
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Thông tin Ví Điện Tử</h3>
                            <Form.Item name="walletCountry" label="Quốc gia" initialValue="Vietnam">
                                <Select>
                                    <Option value="Vietnam">Vietnam</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="walletName"
                                label="Tên"
                                rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="walletAddress"
                                label="Địa chỉ"
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="walletCity"
                                label="Thành phố"
                                rules={[{ required: true, message: 'Vui lòng nhập thành phố' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="walletPostalCode"
                                label="Mã bưu điện"
                                rules={[{ required: true, message: 'Vui lòng nhập mã bưu điện' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    )}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="mt-4 w-full">
                            Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default PaymentPage;
