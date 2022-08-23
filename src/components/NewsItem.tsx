import React, { useState } from "react";
import "./NewsItem.css";
import "./NewsForm.css";
import News from "../store/NewsStore";
import { useStore } from "../use-stores";
import { observer } from "mobx-react-lite";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

interface Props {
  news: News;
}

const NewsItem = observer(({ news }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [formTitleValue, setFormTitleValue] = useState(news.title);
  const [formTextValue, setFormTextValue] = useState(news.text);
  const { newsStore } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInfo = {
      ...news,
      title: formTitleValue,
      text: formTextValue,
    };
    newsStore.updateNews(newInfo);
    setEditMode(false);
  };

  return (
    <div>
      {!editMode && (
        <Card
          className="news-card"
          title={news.title}
          onClick={() => setEditMode(true)}
        >
          {news.text}
          <div className="actions">
            <Button
              label="Edit"
              className="p-button-info"
              style={{ marginRight: "1em" }}
              onClick={() => setEditMode(!editMode)}
            ></Button>
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-danger"
              onClick={() => newsStore.deleteNews(news.id)}
            ></Button>
          </div>
        </Card>
      )}
      {editMode && (
        <form onSubmit={handleSubmit}>
          <div className="card edit-form">
            <label htmlFor="title"></label>
            <span className="p-float-label">
              <InputText
                type="text"
                id="title"
                value={formTitleValue}
                className="title text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
                placeholder="Large"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormTitleValue(e.target.value)
                }
              ></InputText>
              <label htmlFor="title">Title</label>
            </span>
            <span className="p-float-label edit-content">
              <InputTextarea
                rows={2}
                id="text"
                value={formTextValue}
                className="content text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
                onChange={(e) => setFormTextValue(e.target.value)}
                autoResize
              />
              <label htmlFor="text">Content</label>
            </span>
            <div className="actions">
              <Button
                label="Save"
                icon="pi pi-check"
                style={{ marginRight: "1em" }}
              ></Button>
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary ml-2"
                onClick={() => setEditMode(false)}
              ></Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
});

export default NewsItem;
