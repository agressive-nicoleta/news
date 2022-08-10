//Todo: add incremented id for every element

import { observable } from "mobx";

class News {
  //id: number;
  @observable title = "";
  @observable text = "";
  @observable date = new Date();

  constructor(newsTitle: string, newsText: string) {
    this.title = newsTitle;
    this.text = newsText;
    this.date = new Date();
  }
}

export default News;
