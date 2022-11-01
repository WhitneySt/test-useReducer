import React, { useContext, useState } from 'react'
import { UserContext } from './App';
import { addUser } from "../actions/actionsUsers";

const Form = () => {
    const { dispatchUsers } = useContext(UserContext);
      const [form, setForm] = useState({
        name: "",
        age: "",
      });

      const handleChange = ({ target }) => {
        setForm({
          ...form,
          [target.name]: target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatchUsers(addUser(form));
      };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Edad"
        value={form.age}
        onChange={handleChange}
        name="age"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form