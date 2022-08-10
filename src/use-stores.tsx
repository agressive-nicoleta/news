import { useContext } from "react";
import { rootStoreContext } from "./store/context";

export const useStore = () => useContext(rootStoreContext);
