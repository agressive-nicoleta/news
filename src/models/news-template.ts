//Todo: add incremented id for every element

class News {
  //id: number;
  title: string;
  text: string;
  date: Date;

  constructor(newsTitle: string, newsText: string) {
    this.title = newsTitle;
    this.text = newsText;
    this.date = new Date();
  }
}

export default News;
