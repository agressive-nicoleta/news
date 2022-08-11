import React, { useState } from "react";
import News from "../store/NewsStore";
import { useStore } from "../use-stores";
import { observer } from "mobx-react-lite";
import FlexContainer from "./FlexContainer";

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
    <FlexContainer>
      {!editMode && (
        <div onClick={() => setEditMode(true)}>
          <h3>{news.title}</h3>
          <p>{news.text}</p>
        </div>
      )}
      {editMode && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            value={formTitleValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormTitleValue(e.target.value)
            }
          ></input>
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            value={formTextValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormTextValue(e.target.value)
            }
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </form>
      )}
      <div>
        <button onClick={() => setEditMode(!editMode)}>Edit</button>
        <button onClick={() => newsStore.deleteNews(news.id)}>Delete</button>
      </div>
    </FlexContainer>
  );
});

export default NewsItem;
