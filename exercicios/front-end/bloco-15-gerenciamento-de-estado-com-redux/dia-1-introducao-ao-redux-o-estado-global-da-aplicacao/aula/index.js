const Redux = require("redux");
// const store = Redux.createStore();

// const reducer = (state) => {
//     return state;
//     };

// const store = Redux.createStore(reducer);

// const reducer = (state = { login: false, email: "" }) => {
//   return state;
// };

// const store = Redux.createStore(reducer);

// const ESTADO_INICIAL = {
//   login: false,
//   email: "",
// };

// const reducer = (state = ESTADO_INICIAL) => {
//   return state;
// };

// const store = Redux.createStore(reducer);

// const ESTADO_INICIAL = {
//     login: false,
//     email: "",
//   };

//   const reducer = (state = ESTADO_INICIAL) => {
//     return state;
//   };

//   const store = Redux.createStore(reducer);

//   console.log(store.getState());

//   //{ login: false, email: '' }

const fazerLogin = (email, telefone) => ({
  type: "LOGIN",
  email,
  telefone,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
  telefone: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
        telefone: 980716924,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
