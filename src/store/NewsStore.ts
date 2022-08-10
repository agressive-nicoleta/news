//Todo: add incremented id for every element

import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

export interface News {
  id: number;
  title: string;
  text: string;
}

export class NewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public news: News[] = [
    {
      id: 1,
      title: "Ukraine war must end with liberation of Crimea – Zelensky",
      text: "The war in Ukraine began with Crimea and must end with its liberation, President Volodymyr Zelensky has said.",
    },
    {
      id: 2,
      title: "How the Mediterranean became the world's most invaded sea",
      text: "In Mediterranean waters, almost a thousand alien, or non-native species have been listed. Some of these pests are becoming a surprising source of opportunity.",
    },
  ];

  public addNews = (news: News) => {
    this.news.push(news);
    toast.success("News added", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  public updateNews = (updatedNew: News) => {
    const updatedNews = this.news.map((news) => {
      if (news.id === updatedNew.id) {
        return { ...updatedNew };
      }
      return news;
    });
    this.news = updatedNews;
  };

  public deleteNews = (id: number) => {
    const updatedNews = this.news.filter((news) => news.id !== id);
    this.news = updatedNews;
    toast.info("News deleted", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
}

export default News;
