import { FC } from 'react';
import DefaultAdminLayout from '../layouts/admin/DefaultAdminLayout';
import DefaultClientLayout from '../layouts/client/DefaultClientLayout';
import DashBoardPage from '../pages/admin/DashBoard/DashBoardPage';
import ManageAccountPage from '../pages/admin/ManageAccount/ManageAccountPage';
import ManageConnectionPage from '../pages/admin/ManageConnection/ManageConnectionPage';
import ManageServicePage from '../pages/admin/ManageService/ManageServicePage';
import TrainingProgramPage from '../pages/admin/TraningProgram/TrainingProgramPage';
import HomePage from '../pages/client/Home/HomePage';
import { DefaultLayoutProps } from '../types/layout.type';

// connecter
import DefaultConnecterLayout from '../layouts/connecter/DefaultConnecterLayout';
import DashBoardConnecterPage from '../pages/connecter/DashBoard/DashBoardPage';
import InformationPage from '../pages/connecter/Information/InformationPage';
import NewsPage from '../pages/connecter/News/NewsPage';
import ManageCustomerPage from '../pages/connecter/ManageCustomer/ManageCustomerPage';
import MyJobPage from '../pages/connecter/MyJob/MyJobPage';
import MyIncomePage from '../pages/connecter/MyIncome/MyIncomePage';

// interface RouteProps {
//     path: string;
//     component: () => JSX.Element;
//     layout: ({ childen }: DefaultLayoutProps) => JSX.Element;
// }
interface RouteProps {
    path: string;
    component: FC<{}>; // Change this line
    layout: ({ children }: DefaultLayoutProps) => JSX.Element;
}

const publicRoutes: RouteProps[] = [
    { path: '/', component: HomePage, layout: DefaultClientLayout },
];

const privateRoutes: RouteProps[] = [];

const adminRoutes: RouteProps[] = [
    { path: '/admin/', component: DashBoardPage, layout: DefaultAdminLayout },
    { path: '/admin/quan-ly-dich-vu', component: ManageServicePage, layout: DefaultAdminLayout },
    { path: '/admin/quan-ly-tai-khoan', component: ManageAccountPage, layout: DefaultAdminLayout },
    {
        path: '/admin/truong-trinh-dao-tao',
        component: TrainingProgramPage,
        layout: DefaultAdminLayout,
    },
    {
        path: '/admin/quan-ly-ket-noi',
        component: ManageConnectionPage,
        layout: DefaultAdminLayout,
    },
];

const connecterRoutes: RouteProps[] = [
    { 
        path: '/connecter/', 
        component: DashBoardConnecterPage, 
        layout: DefaultConnecterLayout 
    },
    { 
        path: '/connecter/thong-tin-ca-nhan', 
        component: InformationPage, 
        layout: DefaultConnecterLayout 
    },
    { 
        path: '/connecter/tin-tuc', 
        component: NewsPage, 
        layout: DefaultConnecterLayout 
    },
    { 
        path: '/connecter/quan-ly-khach-hang', 
        component: ManageCustomerPage, 
        layout: DefaultConnecterLayout 
    },
    { 
        path: '/connecter/cong-viec', 
        component: MyJobPage, 
        layout: DefaultConnecterLayout 
    },
    { 
        path: '/connecter/thu-nhap', 
        component: MyIncomePage, 
        layout: DefaultConnecterLayout 
    },
];


export { publicRoutes, privateRoutes, adminRoutes, connecterRoutes };