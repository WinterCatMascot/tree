import { useDispatch } from "react-redux";
import { deleteBrandById } from "../store/mainSlice";

interface Props {
  id: string;
}

export const DeleteBrand = ({ id }: Props) => {
  const d = useDispatch();
  const deleteItem = (id: string) => {
    d(deleteBrandById(id));
  };
  return <button onClick={() => deleteItem(id)}>Delete</button>;
};
