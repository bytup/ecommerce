import useSWR from "swr";

const CONFIG = {
    revalidateOnFocus: false,
    withToken: true,
};

const useQuery = (endPoint, additionalConfig = { ...CONFIG }) => {
    const fetcher = (...args) =>
        fetch(...args, {
            headers: {},
        }).then((res) => res.json());

    return useSWR(endPoint, fetcher, { ...CONFIG, ...additionalConfig });
};

export default useQuery;
