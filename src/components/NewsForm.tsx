import React, { useState } from "react";
import "./NewsForm.css";
import { useStore } from "../use-stores";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { newsStore } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInfo = {
      id: Date.now(),
      title,
      text,
    };
    newsStore.addNews(newInfo);
    console.log(newsStore.news);
  };

  return (
    <form noValidate className="form">
      <div className="card">
        <span className="p-float-label">
          <InputText
            type="text"
            className="title text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
            placeholder="Large"
            required
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          ></InputText>
          <label htmlFor="title">Title</label>
        </span>
        <span className="p-float-label content">
          <InputTextarea
            rows={3}
            required
            id="text"
            className="content text-base text-color surface-overlay border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
            onChange={(e) => setText(e.target.value)}
            autoResize
          ></InputTextarea>
          <label htmlFor="text">Content</label>
        </span>
        <div className="actions">
          <Button
            type="button"
            label="Submit"
            icon="pi pi-check"
            className="p-button-lg"
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
    </form>
  );
};

export default NewsForm;
