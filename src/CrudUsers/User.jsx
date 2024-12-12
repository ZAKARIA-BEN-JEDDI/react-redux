import React, { useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function User() {
  const user = useSelector((data) => data.user); // Access the correct state key
  const dispatch = useDispatch()
  let [id,setid] = useState(1)
  const [formData, setFormData] = useState({
    id:id,
    nom: '',
    prenom: '',
    email: '',
    age: '',
  });


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create User</h1>
          <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type:'add',payload:formData})
            setid((prevstate)=> prevstate + 1 )
            setFormData({
              id:id + 1,
              nom: '',
              prenom: '',
              email: '',
              age: '',
            })
            }} className="space-y-4">
            <div>
              {/* <input type="hidden" name="id" id='id' /> */}
              <label htmlFor="nom" className="block text-gray-700 font-semibold mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-gray-700 font-semibold mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Prénom</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, key) => (
                <tr className="bg-gray-100" key={key}>
                  <td className="border px-4 py-2">{user.nom}</td>
                  <td className="border px-4 py-2">{user.prenom}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.age}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" 
                      key={key}
                      onClick={()=>{
                        if(formData.nom !== '' && formData.prenom !== '' && formData.email !== '' && formData.age !== '' ){
                          dispatch({type:'update',payload:{formData,idUser:key}})
                        }else{
                          alert("entrer tous les donnnees")
                        }
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" 
                      key={key}
                      onClick={()=>{
                        dispatch({type:'delete',payload:key})
                      }}
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
