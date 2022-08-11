import React from "react";
import { observer } from "mobx-react-lite";
import NewsItem from "./NewsItem";
import { useStore } from "../use-stores";

const NewsList = observer(() => {
  const { newsStore } = useStore();

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {newsStore.news.length === 0 && <p>No news !</p>}
        {newsStore.news.map((news) => {
          return <NewsItem key={news.id} news={news}></NewsItem>;
        })}
      </ul>
    </div>
  );
});

export default NewsList;
