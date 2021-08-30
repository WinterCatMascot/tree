import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchRegister, changeSearchText } from "../store/mainSlice";
import { InitialState } from "../store/types";

export const Search = () => {
  const d = useDispatch();
  const search = useSelector((state: InitialState) => state.search);

  const handleChangeRegister = () => {
    d(changeSearchRegister());
  };
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    d(changeSearchText(value));
  };

  const registerStatus = `Register ${search.registerOn ? "On" : "Off"}`;
  return (
    <div>
      Search:
      <input type="text" value={search.text} onChange={handleChangeText} />
      <button onClick={handleChangeRegister}>{registerStatus} </button>
    </div>
  );
};
