import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import domainApi from "../../../../Config/ConfigDomainAPI";

export default function DeleteAttribute(){
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
        async function deleteAttribute() {
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                axios.delete(`${domainApi}/api/admin/destroy-attribute-admin/`+id,
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then(res => {
                    const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){ 
                        mess.setAttribute("style", "display:none;"); 
                        window.location.href = '/admin/attribute-products';
                    }, 2000);
                })
                .catch( error => {
                    const mess = document.getElementById('message-error');
                        mess.setAttribute("style", "display:block;");
                        setTimeout(function(){
                            mess.setAttribute("style", "display:none;"); 
                            window.location.reload();
                        }, 1000);
                } )
            }
        }
        return (
            <button type="button" onClick={deleteAttribute} class="btn btn-secondary btn-sm">Xoá</button>
        )

}