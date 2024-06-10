import DefaultAdminLayout from '../layouts/admin/DefaultAdminLayout';
import DefaultClientLayout from '../layouts/client/DefaultClientLayout';
import DashBoardPage from '../pages/admin/DashBoard/DashBoardPage';
import ManageAccountPage from '../pages/admin/ManageAccount/ManageAccountPage';
import ManageConnectionPage from '../pages/admin/ManageConnection/ManageConnectionPage';
import ManageServicePage from '../pages/admin/ManageService/ManageServicePage';
import TrainingProgramPage from '../pages/admin/TraningProgram/TrainingProgramPage';
import HomePage from '../pages/client/Home/HomePage';
import { DefaultLayoutProps } from '../types/layout.type';

interface RouteProps {
    path: string;
    component: () => JSX.Element;
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

export { publicRoutes, privateRoutes, adminRoutes };
