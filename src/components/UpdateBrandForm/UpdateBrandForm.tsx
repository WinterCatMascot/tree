import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { updateBrandById } from "../../store/mainSlice";

interface Props {
  initialForm: { title: string; main: boolean };
  id: string;
}

export const UpdateBrandForm = ({ initialForm, id }: Props) => {
  const d = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(initialForm);
  
  const changeOpen = () => {
    setOpen((prev) => !prev);
    setForm(initialForm);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    if (inputName === "main") {
      const inputValue = e.target.checked;
      setForm((prev) => ({ ...prev, [inputName]: inputValue }));
      return;
    }
    const inputValue = e.target.value;
    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  const submit = () => {
    if (form.title === "") return;
    const data = { ...form, id };
    d(updateBrandById(data));
    changeOpen();
  };

  return (
    <>
      {open ? (
        <>
          <label>
            Title
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Main
            <input
              name="main"
              type="checkbox"
              checked={form.main}
              onChange={handleChange}
            />
          </label>
          <button onClick={submit}>Update</button>
          <button onClick={changeOpen}>Close</button>
        </>
      ) : (
        <button onClick={changeOpen}>Update</button>
      )}
    </>
  );
};
