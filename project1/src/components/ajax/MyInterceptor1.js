import axios from "axios";

export function myInterceptor() {

    console.log("myInterceopter1 called....");
    
    axios.interceptors.request.use((req) => {
      req.headers.authorization = "my secret token";
      return req;
    });
  }