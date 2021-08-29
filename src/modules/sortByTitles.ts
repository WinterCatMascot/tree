import { TreeItems } from "../store/types";

export const sortByTitles = (items: TreeItems) => {
  return items.slice().sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
};
