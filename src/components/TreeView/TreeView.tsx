import { TreeDict } from "../../store/types";
import { TreeViewRoot } from "./TreeViewRoot";

interface Props {
  treeDict: TreeDict;
}

export const TreeView = ({ treeDict }: Props) => {
  return (
    <div>
      {Object.keys(treeDict)
        .sort()
        .map((key) => (
          <TreeViewRoot title={key} items={treeDict[key]} key={key} />
        ))}
    </div>
  );
};
