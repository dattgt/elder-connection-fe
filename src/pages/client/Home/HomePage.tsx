import { useEffect, useState } from 'react';
import { ItemTest, useAddItemMutation, useGetListQuery } from '../../../services/example.service';
import { Button } from 'antd';

const HomePage = () => {
    /********** example to call api */
    const { data, isSuccess, isLoading } = useGetListQuery();
    const [mutation, { isSuccess: addSuccess, isLoading: addLoading }] = useAddItemMutation();
    const [dataload, setdataload] = useState<ItemTest[]>([]);

    useEffect(() => {
        if (isSuccess && data) {
            setdataload(data);
        }
    }, [isSuccess, addSuccess]);

    const onClick = () => {
        const i = dataload.length;
        mutation({ id: i + 1, title: `item${i + 1}` });
    };
    /*** end example */
    return (
        <>
            <div>HomePage </div>
            <div>
                {!isLoading && dataload.map((value, index) => <div key={index}>{value.title}</div>)}
                {isLoading && <div>Waiting</div>}
            </div>
            <Button loading={addLoading} onClick={onClick}>
                Add
            </Button>
        </>
    );
};

export default HomePage;
