import { filterByMain } from "../../modules/filterByMain";
import { sortByTitles } from "../../modules/sortByTitles";
import { TreeItems } from "../../store/types";

interface Props {
  items: TreeItems;
  reverseSort: boolean;
}

export const TreeShortList = ({ items, reverseSort }: Props) => {
  const filteredByMain = filterByMain(items);
  const sortedByTitles = sortByTitles(filteredByMain, reverseSort);

  const allItemsDisplayed = items.length === sortedByTitles.length;

  return (
    <>
      {sortedByTitles.map(({ id, title, main }, index) => (
        <p
          key={`${id}-${title}-${main}-${index}`}
        >{`- ${title} (main: ${main})`}</p>
      ))}
      {!allItemsDisplayed && <p>...</p>}
    </>
  );
};
