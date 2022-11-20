import axios from "axios";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../constants/api";
import { setData } from "../store/common";
import JobItem from "./joblist/JobItem";


function GetListData(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch();
    const {data} = useSelector(state => state.common)
    
    const getData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(baseUrl);
            dispatch(setData(data))
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getData()
    }, []);

    if (isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                error...
            </div>
        )
    }


    return (
        <div>
            {Array.isArray(data) && data.map((item) => (
                <JobItem key={item.id} id={item.id} title={item.title} />
            ))}
        </div>
    )
}

export default GetListData;