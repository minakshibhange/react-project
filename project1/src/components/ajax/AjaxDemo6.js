import axios from "axios";
import { useEffect } from "react";

export default function AjaxDemo6() {
    useEffect(() =>{
       getData();
    });
     const getData = async () => {
        let res1 = await axios.get("https://api.github.com/users/defunkt");
        let res2 = await axios.get("https://api.github.com/users/evanphx");

        console.log(res1.data, res2.data);
    };
  return (
    <div>AjaxDemo6</div>
  );
}
