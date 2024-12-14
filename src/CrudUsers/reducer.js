
const DefaultUser = [
  {
    id:0,
    nom:'zakaria',
    prenom:'benjeddi',
    email:'zakaria@gmail.com',
    age:19
  }
  ,{
    id:1,
    nom:'khalid',
    prenom:'hamid',
    email:'hamid@gmail.com',
    age:20
  }]

export const reducerUser = (state=DefaultUser,action)=>{
  switch (action.type) {
    case 'add':
      return [...state,action.payload];
    case 'delete':
      return state.filter((user,index)=> index !== action.payload)
      
    case 'update':
      console.log(action.payload.idUser);
      return state.map(user => {
        if (action.payload.idUser === user.id) {
          // Mettez à jour l'utilisateur correspondant avec les nouvelles données
          return {
            ...user,
            ...action.payload.formData, // Met à jour les données de l'utilisateur
          };
        }
        return user; // Si l'utilisateur ne correspond pas, on retourne l'utilisateur inchangé
      });
    default:
      return state;
  }
}