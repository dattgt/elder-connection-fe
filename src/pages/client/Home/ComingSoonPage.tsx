import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoonPage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-200 via-green-300 to-blue-200">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center">
                <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                    Coming Soon
                </h1>
                <p className="text-xl text-gray-800 mb-6">
                    Tính năng này đang được phát triển. Vui lòng quay lại sau!
                </p>
                <Link to="/">
                    <button className="bg-teal-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-500">
                        Quay lại trang chủ
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ComingSoonPage;
