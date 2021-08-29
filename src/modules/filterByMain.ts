import { TreeItems } from "../store/types";

export const filterByMain = (items: TreeItems) => {
  const mainTrueItems = items.filter((item) => item.main === true);
  if (mainTrueItems.length > 0) return mainTrueItems.slice(0, 5);
  return items.slice(0, 5);
};
