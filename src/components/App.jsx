import React, { createContext, useReducer } from "react";
// import { addUser } from "../actions/actionsUsers";
import { reducerUsers } from "../reducers/reducerUsers";
import Form from "./Form";

export const UserContext = createContext({});

const App = () => {
  const initialUsers = [
    {
      name: "Pedro",
      age: 18,
    },
  ];

  const [stateUsers, dispatchUsers] = useReducer(reducerUsers, initialUsers);

  return (
    <UserContext.Provider value={{ stateUsers, dispatchUsers }}>
      <div>App</div>
      <ul>
        {stateUsers.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <Form />
      {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Nombre'
                    value={form.name}
                    onChange={handleChange}
                    name='name'
                />
                <input
                    type="number"
                    placeholder='Edad'
                    value={form.age}
                    onChange={handleChange}
                    name='age'
                />
                <button type='submit'>Guardar</button>
            </form> */}
    </UserContext.Provider>
  );
};

export default App;
