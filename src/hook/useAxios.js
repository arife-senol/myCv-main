import axios from 'axios';
import { useEffect, useState } from 'react';


const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setTimeout(() => {
                    setData(response.data);
                }, 1000);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return [ data, loading, error ];
}

export default useAxios;
