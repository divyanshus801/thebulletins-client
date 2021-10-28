// const categories = [
//   "business",
//   "entertainment",
//   "general",
//   "health",
//   "science",
//   "sports",
//   "technology",
// ];
// export default categories;

// import React,{useState, useEffect} from 'react';
// import Hamburgerdrawer from '../components/HamburgerDrawer';
// import axios from 'axios';



// const Category = () => {

//   const [categoryArray, setCategoryArray] = useState([])

//   const categoryApi = async () => {
//     try {
//       const API = "http://localhost:8000/api/";

//       const category = await axios.get(
//         `${API}/categories`
//       );
//        console.log(category);
//       setCategoryArray(category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     categoryApi();
//     // eslint-disable-next-line
//   }, []);
//   return (
//     <div>
//       <Hamburgerdrawer categoryArray={categoryArray} />
//     </div>
//   )
// }

// export default Category;


