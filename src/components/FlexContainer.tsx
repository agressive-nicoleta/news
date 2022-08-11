import React from "react";
import classes from "./NewsItem.module.css";

interface IProps {
  children: React.ReactNode;
  display?: "flex";
  justifyContent?: string;
  alignItems?: string;
}

const FlexContainer = ({
  children,
  display = "flex",
  justifyContent = "space-between",
  alignItems = "center",
}: IProps) => {
  return (
    <div
      className={classes.newsItem}
      style={{ display, justifyContent, alignItems }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
