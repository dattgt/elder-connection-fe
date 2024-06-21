import { Layout } from 'antd';
import { DefaultLayoutProps } from '../../types/layout.type';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const DefaultClientLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            <Layout className="min-h-screen flex">
                <Layout className="bg-white flex flex-col w-full">
                    <Header />
                    <div className="">{children}</div>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    );
};

export default DefaultClientLayout;
