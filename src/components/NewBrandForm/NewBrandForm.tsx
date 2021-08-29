import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { PostBrand } from "../../api/api";
import { postBrand } from "../../store/mainSlice";

const initialFormState: PostBrand = { title: "", main: true };

export const NewBrandForm = () => {
  const [form, setForm] = React.useState(initialFormState);
  const d = useDispatch();

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
    d(postBrand(form));
    setForm(initialFormState);
  };

  return (
    <div>
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
      <button onClick={submit}>Add</button>
    </div>
  );
};
