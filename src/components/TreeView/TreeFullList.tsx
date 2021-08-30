import { sortByTitles } from "../../modules/sortByTitles";
import { TreeItems } from "../../store/types";
import { DeleteBrand } from "../DeleteBrand";
import { UpdateBrandForm } from "../UpdateBrandForm";

interface Props {
  items: TreeItems;
  reverseSort: boolean;
}

export const TreeFullList = ({ items, reverseSort }: Props) => {
  const sortedByTitles = sortByTitles(items, reverseSort);

  return (
    <>
      {sortedByTitles.map(({ id, title, main }, index) => (
        <p key={`${id}-${title}-${main}-${index}`}>
          {`- ${title} (main: ${main})`}
          <DeleteBrand id={id} />
          <UpdateBrandForm id={id} initialForm={{ title, main }} />
        </p>
      ))}
    </>
  );
};
