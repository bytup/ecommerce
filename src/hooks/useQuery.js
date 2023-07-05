import useSWR from "swr";

const CONFIG = {
    revalidateOnFocus: false,
    withToken: true,
};

const BASE_URL = "https://engineering-task.elancoapps.com/api/";

const useQuery = (endPoint, additionalConfig = { ...CONFIG }) => {
    const fetcher = (...args) =>
        fetch(...args, {
            headers: {},
        }).then((res) => res.json());

    return useSWR(BASE_URL + endPoint, fetcher, {
        ...CONFIG,
        ...additionalConfig,
    });
};

export default useQuery;
