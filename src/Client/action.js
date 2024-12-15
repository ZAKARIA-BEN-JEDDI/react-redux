export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const clients = await response.json();
      dispatch({ type: "SET_CLIENTS", payload: clients }); // Envoie les clients au store
    } catch (error) {
      console.error("Erreur lors du chargement des clients :", error);
    }
  };
};
