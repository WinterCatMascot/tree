import React from "react";
import { TreeItems } from "../../store/types";
import { TreeFullList } from "./TreeFullList";
import { TreeShortList } from "./TreeShortList";

interface Props {
  title: string;
  items: TreeItems;
}

export const TreeViewRoot = ({ title, items }: Props) => {
  const itemsLength = items.length;

  const [open, setOpen] = React.useState(false);
  const changeOpen = () => setOpen((prev) => !prev);
  const openSymbol = open ? "▲" : "▼";

  return (
    <div>
      <p onClick={changeOpen}>{`${title} (${itemsLength}) ${openSymbol}`}</p>
      {open ? <TreeFullList items={items} /> : <TreeShortList items={items} />}
    </div>
  );
};
