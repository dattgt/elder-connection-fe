import { DefaultLayoutProps } from '../../types/layout.type';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const DefaultClientLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            <Header />
            <div className="">{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultClientLayout;
