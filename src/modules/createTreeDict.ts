import { TreeDict, TreeItems } from "../store/types";

export const createTreeDict = (items: TreeItems) => {
  const dict: TreeDict = {};
  items.forEach((item) => {
    const firstLetter = item.title[0].toUpperCase();
    if (!dict[firstLetter]) {
      dict[firstLetter] = [];
    }
    dict[firstLetter].push(item);
  });
  return dict;
};
