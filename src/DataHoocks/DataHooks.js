import { useEffect, useState } from "react"

const useDataHooks = () => {

    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])

    return [services, setServices];

}
export default useDataHooks;