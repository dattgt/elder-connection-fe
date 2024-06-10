import {
    MenuOutlined,
    HomeOutlined,
    ReadOutlined,
    HeartOutlined,
    ScheduleOutlined,
    DollarOutlined,
    SolutionOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Menu, MenuProps, Layout, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export default function MySider() {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 1280);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getConditionalItems = (): MenuItem[] => [
        getItem('Bảng thống kê', '1', <HomeOutlined />),
        getItem('Tin tức và kiến thức', '2', <ReadOutlined />),
        // getItem('Quản lý khách hàng', '3', <HeartOutlined />),
        getItem('Công việc của tôi', '4', <ScheduleOutlined />),
        getItem('Thu nhập của tôi', '5', <DollarOutlined />),
        // getItem('Quy trình đào tạo', '6', <SolutionOutlined />),
        getItem('Thông tin cá nhân', '7', <UserOutlined />),
        getItem('Hỗ trợ', '8', <HomeOutlined />), // Placeholder for actual icon
        getItem('Tài liệu', '9', <ReadOutlined />), // Placeholder for actual icon
    ];

    const navUrl = new Map<string, string>();
    navUrl
        .set('1', '/connecter/')
        .set('2', '/connecter/tin-tuc')
        // .set('3', '/connecter/quan-ly-khach-hang')
        .set('4', '/connecter/cong-viec')
        .set('5', '/connecter/thu-nhap')
        // .set('6', '/connecter/quy-trinh-dao-tao')
        .set('7', '/connecter/thong-tin-ca-nhan')
        .set('8', '/connecter/')
        .set('9', '/connecter/');

    return (
        <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={256}
            className="overflow-hidden border-r-[1px]"
            trigger={
                <div className="w-full border-r-[1px] border-t-[1px]">
                    <MenuOutlined />
                </div>
            }
        >
            <div className="logo p-4 flex flex-col items-center">
                <img src="/path/to/logo.png" alt="Logo" className="mb-2" />
                <Avatar size={64} icon={<UserOutlined />} className="mb-2" />
                <p className="text-center">MISS HÀ</p>
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                items={getConditionalItems()}
                onSelect={(e) => {
                    const link = navUrl.get(e.key);
                    if (link) {
                        navigate(link);
                    }
                }}
            />
        </Sider>
    );
}
