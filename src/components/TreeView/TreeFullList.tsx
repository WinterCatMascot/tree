import React from "react";
import { useDispatch } from "react-redux";
import { sortByTitles } from "../../modules/sortByTitles";
import { deleteBrandById } from "../../store/mainSlice";
import { TreeItems } from "../../store/types";
import { UpdateBrandForm } from "../UpdateBrandForm/UpdateBrandForm";

interface Props {
  items: TreeItems;
}

export const TreeFullList = ({ items }: Props) => {
  const sortedByTitles = sortByTitles(items);

  const d = useDispatch();

  const deleteItem = (id: string, title: string) => {
    d(deleteBrandById(id));
  };

  return (
    <>
      {sortedByTitles.map(({ id, title, main }, index) => (
        <p key={`${id}-${title}-${main}-${index}`}>
          {`- ${title} (main: ${main})`}
          <button onClick={() => deleteItem(id, title)}>Delete</button>
          <UpdateBrandForm id={id} initialForm={{ title, main }} />
        </p>
      ))}
    </>
  );
};
