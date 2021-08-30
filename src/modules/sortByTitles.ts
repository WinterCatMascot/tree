import { TreeItems } from "../store/types";

export const sortByTitles = (items: TreeItems, reverseSort: boolean) => {
  const sortedItems = items
    .slice()
    .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  if (reverseSort) return sortedItems.reverse();
  return sortedItems;
};
