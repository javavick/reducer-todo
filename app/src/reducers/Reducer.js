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
    case "COMPLETE?":
      return state.map((item) => {
        if (action.payload === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case "CLEAR":
      return state.filter((item) => item.completed === false);
    default:
      return state;
  }
};
