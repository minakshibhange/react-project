import axios from "axios";
import { useEffect } from "react";

export default function AjaxDemoErrorHandling() {
    useEffect(() =>{
        getData();
     });
      const getData = async () => {
         try {
         let res1 = await axios.get("https://api.github.com/users/defunkt");
         let res2 = await axios.get("https://api.github.com/users/evanphx");
 
         console.log(res1.data, res2.data);
     } catch(error){
         console.log("something went wrong");
     }
     };
  return (
    <div>AjaxDemoErrorHandling</div>
  )
}
