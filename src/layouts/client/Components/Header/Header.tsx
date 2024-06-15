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
    <div className="flex items-center justify-between p-4 bg-white shadow-md !w-full">
      <div className="flex items-center ">
        <div className="flex items-center px-4 pr-20">
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
            <span className="text-2xl font-bold ml-2">Elder Connection</span>
          </Link>
        </div>
        <div className='flex items-center space-x-10 mx-auto'>
          <Dropdown overlay={aboutMenu}>
            <a className="ant-dropdown-link flex items-center" onClick={(e) => e.preventDefault()}>
              Về Elder Connection <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
          <Dropdown overlay={servicesMenu}>
            <a className="ant-dropdown-link flex items-center" onClick={(e) => e.preventDefault()}>
              Dịch Vụ <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
          <a href="#" className="hover:text-blue-500">Trở thành đối tác</a>
          <a href="#" className="hover:text-blue-500">CSKH</a>
          <button
            className="bg-[#839567] border border-[#5a6e40] text-white rounded-full shadow-md py-2 px-4 transition-all duration-300 ease-in-out hover:bg-[#6d7d4e] hover:border-[#4c5e35] flex items-center justify-center"
          >
            Đăng nhập
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
