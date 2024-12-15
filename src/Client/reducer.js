const initialState = {
  clientTable :[]
};

const ClientReducer = (state=initialState,action) =>{
  switch (action.type) {
    case "SET_CLIENTS":
      return { ...state, clientTable: action.payload }; // Met à jour le tableau
    case 'client/add':
      return state;
    case 'client/edit':
      return console.table(typeof(clientTable))
    case 'client/delete':
      return state;
    default:
      return state;
  }
}

export default ClientReducer;