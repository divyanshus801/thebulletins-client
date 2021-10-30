import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For best experience and updated news please{" "}
            <b>allow notification</b> from notifaction window popup in your
            screen
          </span>
        </div>

        <Container maxWidth="md" className="divis">
          {/* First this */}
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem._id} />
          ))}

          {/* Then this */}

          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </Container >
      </div>
    </Container>
  );
};

export default NewsContent;
