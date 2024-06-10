import Layout from 'antd/es/layout/layout';
import MySider from './Components/Slider/Slider';
import MyHeader from './Components/Header/Header';
import MyContent from './Components/Content/Content';
import MyFooter from './Components/Footer/Footer';
import { DefaultLayoutProps } from '../../types/layout.type';
import React from 'react';

const DefaultConnecterLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <Layout className="min-h-screen flex">
                <MySider />
                <Layout className="bg-white flex flex-col w-full">
                    <MyHeader />
                    <MyContent children={children} />
                    <MyFooter />
                </Layout>
            </Layout>
        </>
    );
};

export default DefaultConnecterLayout;