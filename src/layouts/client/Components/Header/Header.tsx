import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Modal, Avatar, Spin } from 'antd';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const aboutMenu = (
    <Menu>
        <Menu.Item key="1">Giới thiệu</Menu.Item>
        <Menu.Item key="2">
            <Link to="/coming-soon">Lịch sử</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/coming-soon">Sứ mệnh và tầm nhìn</Link>
        </Menu.Item>
    </Menu>
);

// const servicesMenu = (
//     <Menu>
//         <Menu.Item key="1">
//             <Link to="/services">Dịch vụ chăm sóc</Link>
//         </Menu.Item>
//         <Menu.Item key="2">Dịch vụ tư vấn</Menu.Item>
//         <Menu.Item key="3">Dịch vụ hỗ trợ</Menu.Item>
//     </Menu>
// );

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);

    useEffect(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoginState === 'true');

        const handleStorageChange = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        setLogoutModalVisible(true);
        setTimeout(() => {
            localStorage.removeItem('isLoggedIn');
            setIsLoggedIn(false);
            setLogoutModalVisible(false);
            navigate('/'); // Redirect to home page
        }, 1000); // Simulate a delay for logging out
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/account">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );

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
                <a href="/services-infomation" className="hover:text-blue-500">
                    Dịch Vụ
                </a>
                <a href="/apply" className="hover:text-blue-500">
                    {' '}
                    {/* Updated link */}
                    Trở thành đối tác
                </a>
                <a href="/contact" className="hover:text-blue-500">
                    CSKH
                </a>
                {isLoggedIn ? (
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <Avatar className="cursor-pointer" size="large" src="/path-to-avatar.jpg" icon={<UserOutlined />}/>
                    </Dropdown>
                ) : (
                    <Link
                        to="/login"
                        className="flex items-center justify-center rounded-full border border-[#5a6e40] bg-[#839567] px-4 py-2 text-white shadow-md transition-all duration-300 ease-in-out hover:border-[#4c5e35] hover:bg-[#6d7d4e]"
                    >
                        Đăng nhập
                    </Link>
                )}
            </div>
            <Modal open={logoutModalVisible} footer={null} closable={false}>
                <div className="flex flex-col items-center justify-center">
                    <Spin size="large" />
                    <span>Đang đăng xuất...</span>
                </div>
            </Modal>
        </div>
    );
};

export default Header;
