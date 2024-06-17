import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/'); // Redirect to the home page
        window.dispatchEvent(new Event('storage')); // Trigger storage event to update Header state
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[#F8F5F0]">
            <div className="w-full max-w-md space-y-8 rounded-md bg-white p-8 shadow-md">
                <div className="flex justify-center">
                    <img src="/logo.jpg" alt="Logo" className="h-16 w-16" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Đăng nhập
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email của bạn"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mật khẩu
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Mật khẩu của bạn"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Nhớ tôi
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link
                                to="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#839567] px-4 py-2 text-sm font-medium text-white hover:bg-[#6d7d4e] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    <div className="text-center text-sm">
                        <p>
                            Không có tài khoản?{' '}
                            <Link
                                to="/register"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-center">
                    <button className="group relative flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="mr-2 h-5 w-5"
                        />
                        Đăng nhập với Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
