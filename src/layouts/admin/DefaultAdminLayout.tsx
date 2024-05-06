import Layout from 'antd/es/layout/layout';
import MySider from './Components/Slider/Slider';
import MyHeader from './Components/Header/Header';
import MyContent from './Components/Content/Content';
import MyFooter from './Components/Footer/Footer';
import { DefaultLayoutProps } from '../../types/layout.type';

const DefaultAdminLayout = ({ childen }: DefaultLayoutProps) => {
    return (
        <>
            <Layout className="min-h-screen">
                <MySider />
                <Layout className="bg-white">
                    <MyHeader />
                    <MyContent childen={childen} />
                    <MyFooter />
                </Layout>
            </Layout>
        </>
    );
};

export default DefaultAdminLayout;
