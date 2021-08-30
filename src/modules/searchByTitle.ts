import { TreeItems } from "../store/types";

export const searchByTitle = (
  treeItems: TreeItems,
  text: string,
  register: boolean
) => {
  const newItems = treeItems.filter(({ title }) =>
    register
      ? title.includes(text)
      : title.toLowerCase().includes(text.toLowerCase())
  );
  return newItems;
};
