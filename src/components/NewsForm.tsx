import Card from "../ui/Card";
import classes from "./NewsForm.module.css";

const NewsForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea rows={2} required id="text"></textarea>
        </div>
        <div className={classes.actions}>
          <button type="button">Add News</button>
        </div>
      </form>
    </Card>
  );
};

export default NewsForm;
