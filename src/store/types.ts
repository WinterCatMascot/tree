export interface TreeDict {
  [key: string]: { id: string; title: string; main: boolean }[];
}
export type TreeItems = { id: string; title: string; main: boolean }[];
export interface InitialState {
  error: string | null;
  loading: boolean;
  treeItems: TreeItems;
}
