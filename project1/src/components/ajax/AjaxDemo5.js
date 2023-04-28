import axios from 'axios';
import { useEffect } from 'react';

export default function AjaxDemo5() {
    useEffect(() =>{
        axios.all([
            axios.get("https://api.github.com/users/defunkt"),
            axios.get("https://api.github.com/users/evanphx"),
            axios.get("https://api.github.com/users/minakshibhange"),
        ]).then(([response1, response2, response3])=> 
        console.log(response1.data, response2.data, response3.data)
        );
    });
  return (
    <div>AjaxDemo5</div>
  )
}
