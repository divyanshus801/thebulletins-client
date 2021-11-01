import axios from "axios";
import React,{ useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";
import firebase from "./firebase";


function App() {
  React.useEffect(() => {
   const msg=firebase.messaging();
   msg.requestPermission().then(() => {
     return msg.getToken();
   }).then((data)=> {
    console.warn("token",data);
   })
  })

  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");
  const [mode, setMode] = useState("online");



  const newsApi = async () => {
    if(category === "general"){
      try {
        const Url = process.env.REACT_APP_BACKEND;
  
        const news = await axios.get(
          `${Url}/newses/general`
        );        
        setNewsArray(news.data);
        setNewsResults(news.data.length);
        localStorage.setItem("newses",JSON.stringify(news.data))
      } catch (error) {
        let collection = localStorage.getItem("newses")
        setNewsArray(JSON.parse(collection));
        setNewsResults(JSON.parse(collection.length));
        setMode("offline");
        console.log(error);
        
      }
    }else{
      try {
        const Url = process.env.REACT_APP_BACKEND;
  
        const news = await axios.get(
          `${Url}/news/${category}`
        );
         console.log(news.data);
        setNewsArray(news.data);
        setNewsResults(news.data.length);
        localStorage.setItem("newses",JSON.stringify(news.data))
      } catch (error) {
        let collection = localStorage.getItem("newses")
        setNewsArray(JSON.parse(collection));
        setNewsResults(JSON.parse(collection.length));
        setMode("offline");
        console.log(error); 
      }
    }
   
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  return (
    <div className="App" id="#home">
      <div>
        {
          mode === "offline" ? 
          <div style={{backgroundColor: "yellow"}}> You are in offline mode ! Please check your internet connection</div> :
          null
        }
      </div>
      <NavInshort setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
