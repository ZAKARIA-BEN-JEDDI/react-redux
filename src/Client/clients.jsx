import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClients } from './action'

export default function Clients() {
  // const [Client, setClient] = useState([])
  // axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     return setClient(response.data)
  //   })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])
  const Client = useSelector(data => data.client.clientTable)

  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <button onClick={() => {
          dispatch({type:"SET_CLIENTS"})
        }
        }>Get Clients</button>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create User</h1>

      </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">


        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  UserName
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                Client.map((client, key) => {
                  return <>
                    <tr key={key} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {client.name}
                      </th>
                      <td class="px-6 py-4">
                        {client.username}
                      </td>
                      <td class="px-6 py-4">
                        {client.email}
                      </td>
                      <td class="px-6 py-4">
                        {client.address.city}
                        {client.address.street}
                      </td>
                      <td class="px-6 py-4">
                        <span>Lat : </span><span className='text-orange-900'>{client.address.geo.lat} </span><br />
                        <span>Lng : </span><span className='text-red-500'>{client.address.geo.lng}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            dispatch({ type: 'client/edit', payload: { id: key, client: client } })
                          }}
                          type="button"
                          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
                              focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
                              font-medium rounded-md text-xs px-3 py-1.5 text-center me-2 mb-2">
                          Edit
                        </button>

                        <button
                          type="button"
                          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br
                                  focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800
                                  font-medium rounded-md text-xs px-3 py-1.5 text-center me-2 mb-2">
                          Delete
                        </button>

                      </td>
                    </tr>
                  </>
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </div >
  </>
  )
}
