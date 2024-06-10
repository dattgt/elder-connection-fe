import React from 'react';
import { Card, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Article {
    title: string;
    description: string;
    imageUrl: string;
    readingTime: string;
}

const articles: Article[] = [
    {
        title: 'Tiêu chuẩn của người cao tuổi',
        description: 'Những gì bạn có thể mong đợi từ việc chăm sóc với Elder Connection.',
        imageUrl: 'https://media.istockphoto.com/id/1733205340/photo/cheerful-senior-couple-having-fun-while-laughing-at-home.jpg?s=612x612&w=0&k=20&c=SOKnFxRFxExrcyWXVMa-TBEoMgprhMVY8fvrmKDE67w=',
        readingTime: 'Đọc 15 phút',
    },
    {
        title: 'Cách hoạt động của Elder Connection',
        description: 'Phân tích đơn giản về cách sắp xếp dịch vụ chăm sóc với Elder Connection...',
        imageUrl: 'https://media.istockphoto.com/id/1445417525/photo/retirement-fitness-and-walking-with-dog-and-couple-in-neighborhood-park-for-relax-health-and.jpg?s=612x612&w=0&k=20&c=8MZRPg14j30lC7nLLIbzvhO5FYjRHm1vjxT64JJBtwY=',
        readingTime: 'Đọc 7 phút',
    },
];


const NewsPage: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Title level={4}>Tin tức và kiến thức</Title>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <Title
                    level={2}
                    className="text-center"
                    style={{ color: '#227179' }}
                >
                    Chúng tôi quan tâm đến bạn và người thân yêu của bạn...
                </Title>
                <Text className="block text-center">
                    Già đi không có nghĩa là phải từ bỏ những thứ tạo nên con người của bạn. Dịch vụ hỗ trợ cuộc sống có thể giúp bạn duy trì cuộc sống mà bạn biết, tự lập, hạnh phúc, đồng thời nhận được sự chăm sóc mà bạn cần.
                </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((article, index) => (
                    <Card
                        key={index}
                        hoverable
                        cover={<img alt="example" src={article.imageUrl} />}
                    >
                        <Card.Meta title={article.title} description={article.description} />
                        <div className="flex items-center mt-4">
                            <ClockCircleOutlined />
                            <Text className="ml-2">{article.readingTime}</Text>
                        </div>
                    </Card>
                ))}
                {articles.map((article, index) => (
                    <Card
                        key={index}
                        hoverable
                        cover={<img alt="example" src={article.imageUrl} />}
                    >
                        <Card.Meta title={article.title} description={article.description} />
                        <div className="flex items-center mt-4">
                            <ClockCircleOutlined />
                            <Text className="ml-2">{article.readingTime}</Text>
                        </div>
                    </Card>
                ))}

            </div>
        </>
    );
};

export default NewsPage;
