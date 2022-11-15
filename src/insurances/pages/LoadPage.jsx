

import { InsuranceLayout } from "../Layout/InsuranceLayout"
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
import { read, utils, writeFileXLSX } from 'xlsx';
import { Link } from 'react-router-dom';


export const LoadPage = () => {

    const [massive, setMassive] = useState([]);  

    useEffect(() => {
        axios.get(`https://airsegurosbackend.herokuapp.com/api/load_massives`).then((res) => {
            setMassive(res.data.data);
        });
    }, []);

    const shoot = useCallback(() => {

        var update = massive.map(item => {
            return {

                'Tipo de Identificación Trabajador': item.id_documentType,
                'Numero de Identificación Trabajador': item.document,
                'Primer Apellido Trabajador': item.first_last_name,
                'Segundo  Apellido Trabajador': item.second_last_name,
                'Primer Nombre Trabajador': item.first_name,
                'Segundo Nombre Trabajador': item.second_name,
                'Fecha Nacimiento Trabajador': item.dateBirth,
                'Edad Trabajador': '',
                'Nacionalidad del Trabajador': item.id_nationality,
                'Estado Civil Trabajador': item.id_maritalStates,
                'Genero del Trabajador': item.id_gender,
                'Dirección Residencia Trabajador': item.address,
                'Nombre Departamento Residencia Trabajador': item.id_department,
                'Ciudad/Municipio de Residencia Trabajador': item.id_municipality,
                'Teléfono Fijo Trabajador': item.cellphone,
                'Teléfono Celular Trabajador': item.cellphone,
                'E-mail Trabajador': item.email,
                'Trabajador Autoriza envío de e-Mail': item.sendEmail == "VERDADERO" ? 'Si' : 'No',
                'Tipo de Contrato': item.id_contractType,
                'Fecha de Ingreso a la Empresa': item.dateAdmission,
                'Horas Laboradas Mes': item.hoursWorkedMonth,
                'Horas Laboradas Diarias': item.hoursWorkedMonth,
                'Tipo Salario': item.id_contractType,
                'Valor Salario': item.salary,
                'Tipo de Actividad': item.id_job
            };
        });

        const ws = utils.json_to_sheet(update);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, "Load_massive.xlsx");
    }, massive[0]);



    const readExcel = (file) => {

        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws, {origin: "A3"});
                resolve(data)
            }

            fileReader.onerror = (error) => {
                reject(error);
            }

        })

        promise.then((data) => {
            console.log(data)
            axios.post('https://airsegurosbackend.herokuapp.com/api/load_massives', data)
            .then(function (response) {
            console.log(response);
            return window.location.href ='/load';
    
            })
            .catch(function (error) {
            console.log(error);
            });
        })
    }


    return (
        <InsuranceLayout>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <button onClick={shoot} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Exportar</span>
                    </button>
                </div>
            
                <div>
                    <input className=" form-control  w-full h-auto  text-white bg-blue-900    rounded
                    cursor-pointer focus:outline-none font-bold py-1 px-6
                    " id="file_input" 
                    type="file" onChange={(e) => {
                        const file = e.target.files[0]
                        readExcel(file);
                    }}/>
                </div>
            </div>

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
                            return <tr key={item._id} className="bg-white border-b hover:bg-[#ebffa1]">
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
                                    <Link to="/form" state={{ id: `${item._id}` }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </InsuranceLayout>
    )
}
