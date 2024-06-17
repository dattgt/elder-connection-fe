import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const aboutMenu = (
    <Menu>
        <Menu.Item key="1">Giới thiệu</Menu.Item>
        <Menu.Item key="2">Lịch sử</Menu.Item>
        <Menu.Item key="3">Sứ mệnh và tầm nhìn</Menu.Item>
    </Menu>
);

const servicesMenu = (
    <Menu>
        <Menu.Item key="1">Dịch vụ chăm sóc</Menu.Item>
        <Menu.Item key="2">Dịch vụ tư vấn</Menu.Item>
        <Menu.Item key="3">Dịch vụ hỗ trợ</Menu.Item>
    </Menu>
);

const Header: React.FC = () => {
    return (
        <div className="flex w-full items-center justify-between bg-white p-4 shadow-md">
            <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.jpg" alt="Logo" className="h-16 w-16" />
                <span className="text-2xl font-bold">Elder Connection</span>
            </Link>
            <div className="flex items-center space-x-8">
                <Dropdown overlay={aboutMenu}>
                    <a
                        className="ant-dropdown-link flex items-center"
                        onClick={(e) => e.preventDefault()}
                    >
                        Về Elder Connection <DownOutlined className="ml-1" />
                    </a>
                </Dropdown>
                <Dropdown overlay={servicesMenu}>
                    <a
                        className="ant-dropdown-link flex items-center"
                        onClick={(e) => e.preventDefault()}
                    >
                        Dịch Vụ <DownOutlined className="ml-1" />
                    </a>
                </Dropdown>
                <a href="#" className="hover:text-blue-500">
                    Trở thành đối tác
                </a>
                <a href="#" className="hover:text-blue-500">
                    CSKH
                </a>
                <Link
                    to="/login"
                    className="flex items-center justify-center rounded-full border border-[#5a6e40] bg-[#839567] px-4 py-2 text-white shadow-md transition-all duration-300 ease-in-out hover:border-[#4c5e35] hover:bg-[#6d7d4e]"
                >
                    Đăng nhập
                </Link>
            </div>
        </div>
    );
};

export default Header;
