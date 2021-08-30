import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, PostBrand, ResponseBrand, UpdateBrand } from "../api/api";
import { initialState } from "./initialState";
import { TreeItems } from "./types";

export const getBrands = createAsyncThunk("main/getBrands", async () => {
  const res: ResponseBrand[] = await api.getBrands();
  const data: TreeItems = res.map(({ _id, main, title }) => ({
    id: _id,
    title,
    main,
  }));

  return data;
});
export const deleteBrandById = createAsyncThunk(
  "main/deleteBrandById",
  async (id: string) => {
    await api.deleteBrandById(id);
    return id;
  }
);
export const postBrand = createAsyncThunk(
  "main/postBrand",
  async (data: PostBrand) => {
    const res: ResponseBrand = await api.postBrand(data);
    return res;
  }
);
export const updateBrandById = createAsyncThunk(
  "main/updateBrandById",
  async (data: UpdateBrand) => {
    const res: ResponseBrand = await api.updateBrandById(data);
    return res;
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    changeSortOrder(state) {
      state.reverseSort = !state.reverseSort;
    },
    changeSearchRegister(state) {
      state.search.registerOn = !state.search.registerOn;
    },
    changeSearchText(state, action) {
      state.search.text = action.payload;
    },
  },
  extraReducers: {
    [getBrands.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBrands.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.treeItems = action.payload;
    },
    [getBrands.rejected.type]: (state) => {
      state.loading = false;
      state.error = "error get fetch";
    },
    [deleteBrandById.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteBrandById.fulfilled.type]: (state, action) => {
      const deleteId = action.payload;
      state.loading = false;
      state.treeItems = state.treeItems.filter((item) => item.id !== deleteId);
    },
    [deleteBrandById.rejected.type]: (state) => {
      state.loading = false;
      state.error = "error delete fetch";
    },
    [postBrand.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [postBrand.fulfilled.type]: (state, action) => {
      const { _id, title, main }: ResponseBrand = action.payload;
      state.loading = false;
      const newBrand = { title, main, id: _id };
      state.treeItems.push(newBrand);
    },
    [postBrand.rejected.type]: (state) => {
      state.loading = false;
      state.error = "error post fetch";
    },
    [updateBrandById.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateBrandById.fulfilled.type]: (state, action) => {
      const { _id, title, main }: ResponseBrand = action.payload;
      state.loading = false;
      const updateBrand = { title, main, id: _id };
      const index = state.treeItems.findIndex((item) => item.id === _id);
      state.treeItems[index] = updateBrand;
    },
    [updateBrandById.rejected.type]: (state) => {
      state.loading = false;
      state.error = "error put fetch";
    },
  },
});

export const { changeSortOrder, changeSearchRegister, changeSearchText } =
  mainSlice.actions;
export const mainReducer = mainSlice.reducer;
