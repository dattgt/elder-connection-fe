import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const ManageCustomerPage: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Title level={2} className="mb-6">Quản lý khách hàng</Title>

            </div>
        </>
    );
};

export default ManageCustomerPage;
