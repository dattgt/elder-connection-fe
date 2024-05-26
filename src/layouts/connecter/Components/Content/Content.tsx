import { Content } from 'antd/es/layout/layout';
import React from 'react';

export default function MyContent({ children }: { children: React.ReactNode }) {
    return (
        <Content className="bg-[#f8f8f8] px-4 py-20">
            <main className="h-full bg-gray-100 p-8">{children}</main>
        </Content>
    );
}
