import { TreeDict } from "../../store/types";
import { TreeViewRoot } from "./TreeViewRoot";

interface Props {
  treeDict: TreeDict;
  reverseSort: boolean;
}

export const TreeView = ({ treeDict, reverseSort }: Props) => {
  const letters = Object.keys(treeDict).sort();
  const sortedLetters = reverseSort ? letters.reverse() : letters;

  return (
    <div>
      {sortedLetters.map((key) => (
        <TreeViewRoot
          title={key}
          items={treeDict[key]}
          reverseSort={reverseSort}
          key={key}
        />
      ))}
    </div>
  );
};
