import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const RegisterPage: React.FC = () => {
    // State to manage the form inputs and validation
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formError, setFormError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setFormError('Mật khẩu và mật khẩu xác nhận không khớp.');
            return;
        }

        // Simulate form submission (e.g., API call)
        setFormError(null);
        notification.success({
            message: 'Đăng ký thành công!',
            description:
                'Bạn đã tạo tài khoản thành công. Đang chuyển hướng đến trang đăng nhập...',
            duration: 2,
            onClose: () => navigate('/login'),
        });
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[#F8F5F0]">
            <div className="w-full max-w-md space-y-8 rounded-md bg-white p-8 shadow-md">
                <div className="flex justify-center">
                    <img src="/logo.jpg" alt="Logo" className="h-16 w-16" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Tạo tài khoản miễn phí của bạn
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Tham gia hàng ngàn gia đình tổ chức chăm sóc với Elder
                </p>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Địa chỉ email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Địa chỉ email"
                                value={formData.email}
                                onChange={handleChange}
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
                                autoComplete="new-password"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Chọn mật khẩu"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">
                                Xác nhận mật khẩu
                            </label>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type="password"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Xác nhận mật khẩu"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {formError && <p className="mt-2 text-sm text-red-600">{formError}</p>}

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            Bằng cách chọn ô này, bạn đồng ý với{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                Điều khoản và điều kiện
                            </a>{' '}
                            &{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                Chính sách bảo mật
                            </a>{' '}
                            của Elder
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#839567] px-4 py-2 text-sm font-medium text-white hover:bg-[#6d7d4e] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Tạo tài khoản
                        </button>
                    </div>

                    <div className="text-center text-sm">
                        <p>
                            Đã có tài khoản?{' '}
                            <Link
                                to="/login"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Đăng nhập
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
                        Đăng ký bằng Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
