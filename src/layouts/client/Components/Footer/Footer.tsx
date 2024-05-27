import React from 'react';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className="bg-[#839567] py-10 text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h5 className="text-3xl font-bold">Elder Connection</h5>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:underline">
                            <FacebookOutlined className="text-xl" />
                        </a>
                        <a href="https://instagram.com" className="hover:underline">
                            <InstagramOutlined className="text-xl" />
                        </a>
                        <a href="https://twitter.com" className="hover:underline">
                            <TwitterOutlined className="text-xl" />
                        </a>
                    </div>
                </div>
                <div className="mt-10 flex flex-col items-center justify-between border-t border-black pt-4 md:flex-row">
                    <div>
                        <h2 className="mb-4 text-lg font-bold">Trụ sở chính</h2>
                        <p>
                            Elder Connection
                            <br />
                            230 Lê Văn Việt,
                            <br />
                            Thành phố Thủ Đức
                            <br />
                            <br />
                            0948 007 371
                            <br />
                            Chúng tôi mở cửa 24/7 các ngày trong tuần, cuối tuần và các ngày lễ.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-bold">Liên kết hữu ích</h2>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Cách hoạt động của Elder Connection
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Trở thành người chăm sóc
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-bold">Về chúng tôi</h2>
                        <ul>
                            <li className="mb-2">
                                <a className="font-bold">Truy vấn khách hàng mới</a> <br></br>
                                <a
                                    href="mailto:hello@elderconnection.org"
                                    className="hover:underline"
                                >
                                    {' '}
                                    hello@elderconnection.org{' '}
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="font-bold">Để được hỗ trợ người chăm sóc</a> <br></br>
                                <a
                                    href="mailto:carers@elderconnection.org"
                                    className="hover:underline"
                                >
                                    {' '}
                                    carers@elderconnection.org{' '}
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="font-bold">Khách hàng hiện tại</a> <br></br>
                                <a href="mailto:support@elder.org" className="hover:underline">
                                    {' '}
                                    support@elder.org{' '}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex flex-col items-center justify-between border-t border-black pt-4 md:flex-row">
                    <div className="mb-4 text-center text-sm md:mb-0 md:text-left">
                        <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                            <li>
                                <a href="#" className="hover:underline">
                                    Chính sách bảo mật của khách hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Chính sách quyền riêng tư của người chăm sóc
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Điều khoản và điều lệ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Chính sách khiếu nại
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 text-center text-sm md:mt-0 md:text-right">
                        <span>@ Copyright 2024 Elder Connection</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
