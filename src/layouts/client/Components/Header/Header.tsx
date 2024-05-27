import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50" alt="Logo" className="mr-4" />
        <span className="text-xl font-bold">Elder Connection</span>
      </div>
      <div className="flex items-center space-x-6">
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
        <Button type="primary" className="ml-4">Đăng nhập</Button>
      </div>
    </div>
  );
};

export default Header;
