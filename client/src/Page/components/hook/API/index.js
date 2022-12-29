import axios from 'axios';
import { useEffect, useState } from 'react';
const baseUrl = `http://localhost:8080/`;

export const useGet = (path, setLoading) => {
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
    }, []);
    return [data, setData];
};
