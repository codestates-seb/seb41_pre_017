import axios from 'axios';
import { useEffect, useState } from 'react';
const baseUrl = `http://ec2-52-78-166-35.ap-northeast-2.compute.amazonaws.com:8080/`;

export const useGet = (path, setLoading, dependencies) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios
            .get(baseUrl + path)
            .then((res) => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [dependencies]);
    return [data, setData];
};
