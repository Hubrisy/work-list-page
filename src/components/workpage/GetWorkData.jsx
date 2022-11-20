// import axios from "axios";
// import { useState, useEffect } from 'react';
// import WorkDescription from "./work-description/WorkDescription";

// function GetWorkData(props) {
//     const [isloading, setLoading] = useState(true);
//     const [state, setState] = useState();
//     const [isError, setError] = useState(false)

//     const baseUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

//     useEffect(() => {
//         axios.get(baseUrl, {
//             headers: {
//                 Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
//             }
//         })
//             .then((response) => {
//                 console.log(response.data)
//                 setState(response.data)
//             })
//             .catch((err) => {
//                 console.log('Error:', err)
//                 setError(err)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }, []);
//     if (isloading) {
//         return (
//             <div>
//                 loading...
//             </div>
//         )
//     }
//     if (isError) {
//         return (
//             <div>
//                 error...
//             </div>
//         )
//     }
//     // let getDescrip = state.map((item) => (
//     //     (<WorkDescription description = {item.description} />)
//     // ))

//     let getDescrip = state.map((item) => (
//         item.description
//     ))
//     return (
//         <div className="descript">
//             {getDescrip}
//         </div>
//     )
// }
// export default GetWorkData;