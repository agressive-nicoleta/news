import React, { useRef } from "react";
import classes from "./NewsForm.module.css";
import { useStore } from "../use-stores";

const NewsForm = () => {
  const { newsStore } = useStore();

  const newsTitleInputRef = useRef<HTMLInputElement>(null);
  const newsTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInfo = {
      id: Date.now(),
      title: newsTitleInputRef.current!.value,
      text: newsTextInputRef.current!.value,
    };
    newsStore.addNews(newInfo);
    console.log(newsStore.news);
  };

  return (
    <form className={classes.form} noValidate>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={newsTitleInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="text">Text</label>
        <input type="text" required id="text" ref={newsTextInputRef}></input>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={handleSubmit}>
          Add News
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
