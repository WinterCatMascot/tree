import { useDispatch, useSelector } from "react-redux";
import { changeSortOrder } from "../store/mainSlice";
import { InitialState } from "../store/types";

export const ReverseSort = () => {
  const d = useDispatch();
  const reverseSort = useSelector((state: InitialState) => state.reverseSort);

  const sortStatus = reverseSort ? "Reverse" : "Default";
  const handleChangeSortOrder = () => {
    d(changeSortOrder());
  };
  return (
    <div>
      Sort Order:
      <button onClick={handleChangeSortOrder}>{sortStatus}</button>
    </div>
  );
};
