import { InsuranceLayout } from "../Layout/InsuranceLayout"
import React, { useEffect, useState } from "react";
import axios from "axios";


export const LoadPage = () => {

  const [massive, setMassive] = useState([]);


  useEffect(() => {
    axios.get(`https://airsegurosbackend.herokuapp.com/api/load_massives`).then((res) => {
      setMassive(res.data.data);
      console.log(res.data.data)
    });    
  }, []);    


  return (
    <InsuranceLayout>
      

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-900">
              <thead className="text-xs text-white uppercase bg-[#493bc5]">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          </div>
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Nombre de colaborador
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Número documento
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Número de contacto
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Correo
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Salario
                      </th>
                     
                      <th scope="col" className="py-3 px-6">
                          Opciones
                      </th>
                  </tr>
              </thead>
              <tbody>
                
                  
                  {massive.map((item) => {
                    return <tr className="bg-white border-b hover:bg-[#ebffa1]">
                      <td className="p-4 w-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900">
                          {item.first_name} {item.second_name} {item.first_last_name} {item.second_last_name} 
                      </th>
                      <td className="py-4 px-6">
                      
                          {item.document}

                      </td>
                      <td className="py-4 px-6">
                          {item.cellphone}
                      </td>
                      <td className="py-4 px-6">
                          {item.email}
                      </td>
                      <td className="py-4 px-6">
                          {item.salary}
                      </td>
                      <td className="py-4 px-6">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</a>
                      </td>
                  </tr>
                  })}
              </tbody>
          </table>
      </div>

    </InsuranceLayout>
  )
}
