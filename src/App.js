import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";
import ReactGA from 'react-ga';


function initializeAnalytics(){
  ReactGA.initialize( process.env.GA_TRACKING_ID);
  ReactGA.pageview('/homePage');
}


function App() {

  initializeAnalytics();
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");



  const newsApi = async () => {
    if(category === "general"){
      try {
        const Url = process.env.REACT_APP_BACKEND;
  
        const news = await axios.get(
          `${Url}/newses/general`
        );
         
        setNewsArray(news.data);
        setNewsResults(news.data.length);
      } catch (error) {
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
      } catch (error) {
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
