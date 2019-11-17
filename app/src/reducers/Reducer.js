export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return [...state, action.payload];
    default:
      return state;
  }
};
