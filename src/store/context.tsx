import { createContext } from "react";
import { NewsStore } from "./NewsStore";

export const rootStoreContext = createContext({
  newsStore: new NewsStore(),
});
