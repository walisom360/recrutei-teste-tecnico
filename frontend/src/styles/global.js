import { createGlobalStyle } from "styled-components";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

font-family: "Raleway", sans-serif;
  
  *{
      padding:0;
      margin:0;
      outline:0;
      box-sizing:border-box;
  }
  
   body{
      background:#fff;
      color:#FFF; 
      font-family: "Raleway", sans-serif;
      text-rendering:optimizeLegibility !important;
      -webkit-font-smoothing:antialiased !important;
   }
   input ,button{
       cursor:pointer;
   }
`;
