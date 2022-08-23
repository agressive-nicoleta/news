import { observer } from "mobx-react-lite";
import NewsItem from "./NewsItem";
import { useStore } from "../use-stores";
import "./NewsItem.css";

const NewsList = observer(() => {
  const { newsStore } = useStore();

  return (
    <div className="card">
      <h2>News List</h2>
      <ul className="news-list">
        {newsStore.news.length === 0 && <p>No news !</p>}
        {newsStore.news.map((news) => {
          return <NewsItem key={news.id} news={news}></NewsItem>;
        })}
      </ul>
    </div>
  );
});

export default NewsList;
