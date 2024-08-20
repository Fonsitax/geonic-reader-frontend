import React, { useEffect, useState} from "react";

function backendCall(url) {
const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
        });
    });
return data;
}

export default backendCall;