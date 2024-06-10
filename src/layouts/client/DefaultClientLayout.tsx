import { DefaultLayoutProps } from '../../types/layout.type';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const DefaultClientLayout = ({ childen }: DefaultLayoutProps) => {
    return (
        <div>
            <Header />
            <div className="">{childen}</div>
            <Footer />
        </div>
    );
};

export default DefaultClientLayout;
