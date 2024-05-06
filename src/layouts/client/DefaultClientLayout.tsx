import { DefaultLayoutProps } from '../../types/layout.type';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const DefaultClientLayout = ({ childen }: DefaultLayoutProps) => {
    return (
        <div>
            <Header />
            <div className="mt-4 py-4">{childen}</div>
            <Footer />
        </div>
    );
};

export default DefaultClientLayout;
