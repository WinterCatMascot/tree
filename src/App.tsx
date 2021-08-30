import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "./store/mainSlice";
import { InitialState } from "./store/types";
import { TreeView } from "./components/TreeView/TreeView";
import "./App.css";
import { createTreeDict } from "./modules/createTreeDict";
import { NewBrandForm } from "./components/NewBrandForm";
import { Search } from "./components/Search";
import { ReverseSort } from "./components/ReverseSort";
import { searchByTitle } from "./modules/searchByTitle";

export const App = () => {
  const d = useDispatch();
  const { treeItems, loading, error, search, reverseSort } = useSelector(
    (state: InitialState) => state
  );
  const loadingClassName = loading ? "loading" : "";

  const itemsAfterSearch = searchByTitle(
    treeItems,
    search.text,
    search.registerOn
  );
  const treeDict = createTreeDict(itemsAfterSearch);

  React.useEffect(() => {
    d(getBrands());
  }, [d]);

  return (
    <div className={loadingClassName}>
      {error && <p>{error}</p>}
      <ReverseSort />
      <Search />
      <NewBrandForm />
      <TreeView treeDict={treeDict} reverseSort={reverseSort} />
    </div>
  );
};
