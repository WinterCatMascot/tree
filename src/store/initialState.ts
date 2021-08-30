import { InitialState } from "./types";

export const initialState: InitialState = {
    error: null,
    loading: false,
    search: {text: '', registerOn: false},
    reverseSort: false,
    treeItems: []
};
