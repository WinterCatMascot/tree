import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "./store/mainSlice";
import { InitialState } from "./store/types";
import { TreeView } from "./components/TreeView/TreeView";
import "./App.css";
import { createTreeDict } from "./modules/createTreeDict";
import { NewBrandForm } from "./components/NewBrandForm/NewBrandForm";

export const App = () => {
  const d = useDispatch();
  const { treeItems, loading, error } = useSelector(
    (state: InitialState) => state
  );
  const loadingClassName = loading ? "loading" : "";
  const treeDict = createTreeDict(treeItems);

  React.useEffect(() => {
    d(getBrands());
  }, [d]);

  return (
    <div className={loadingClassName}>
      {error && <p>{error}</p>}
      <NewBrandForm/>
      <TreeView treeDict={treeDict} />
    </div>
  );
};
