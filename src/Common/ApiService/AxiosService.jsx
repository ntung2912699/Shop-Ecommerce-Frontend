import axios from "axios";
import domainApi from "../../Config/ConfigDomainAPI";

export async function APIService(props) {
    let data = [];
    const token = localStorage.getItem('access_token');
   if (props.method === "get") {
        await axios.get(`${domainApi}${props.url}`,props.payload,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {
            data = res.data
        })
    }
    if (props.method === "post") {
        await axios.post(`${domainApi}${props.url}`,props.payload,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {
            data = res
        })
    }
    return (
      data
    );
}