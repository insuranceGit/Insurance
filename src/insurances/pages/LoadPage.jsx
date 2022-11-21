

import { InsuranceLayout } from "../Layout/InsuranceLayout"
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
import { read, utils, writeFileXLSX } from 'xlsx';
import { Link } from 'react-router-dom';


export const LoadPage = () => {

    const [massive, setMassive] = useState([]);  

    function calcularAños(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

        return edad;
    }

    useEffect(() => {
        axios.get(`https://airsegurosbackend.herokuapp.com/api/load_massives`).then((res) => {
            setMassive(res.data.data);
        });
    }, []);

    const shoot = () => {

        var update = massive.map(item => {
            let date = new Date(item.dateAdmission);
            let dateAdmission = date.toISOString().split('T')[0].split("-").join('');

            

            date = new Date(item.dateBirth);
            let dateBirth = date.toISOString().split('T')[0].split("-").join('');

            let anhos = calcularAños(item.dateBirth);

            return {

                'Tipo de Identificación Trabajador': item.id_documentType ,
                'Numero de Identificación Trabajador': item.document,
                'Primer Apellido Trabajador': item.first_last_name,
                'Segundo  Apellido Trabajador': item.second_last_name,
                'Primer Nombre Trabajador': item.first_name,
                'Segundo Nombre Trabajador': item.second_name,
                'Fecha Nacimiento Trabajador': dateBirth,
                'Edad Trabajador': anhos ,
                'Nacionalidad del Trabajador': item.id_nationality,
                'Estado Civil Trabajador': item.id_maritalStates,
                'Genero del Trabajador': item.id_gender,
                'Dirección Residencia Trabajador': item.address,
                'Nombre Departamento Residencia Trabajador': item.id_department,
                'Ciudad/Municipio de Residencia Trabajador': item.id_municipality,
                'Teléfono Fijo Trabajador': item.cellphone == "" ? 1111111 : item.cellphone,
                'Teléfono Celular Trabajador': item.cellphone,
                'E-mail Trabajador': item.email,
                'Trabajador Autoriza envío de e-Mail': item.sendEmail == "VERDADERO" ? 'Si' : 'No',
                'Tipo de Contrato': item.id_contractType,
                'Fecha de Ingreso a la Empresa': dateAdmission,
                'Horas Laboradas Mes': item.hoursWorkedMonth,
                'Horas Laboradas Diarias': item.hoursWorkedMonth / 30,
                'Tipo Salario': 'Fijo',
                'Valor Salario': item.salary,
                'Tipo de Actividad': item.id_job,
                'Tipo de Identificación Cónyuge': '',	
                'Numero de Identificación Cónyuge': '',	
                'Primer Apellido Cónyuge': '',	
                'Segundo Apellido Cónyuge': '',	
                'Primer Nombre Cónyuge': '',	
                'Segundo Nombre Cónyuge': '',	
                'Fecha Nacimiento Cónyuge': '',	
                'Genero del Cónyuge': '',	
                'Ocupación Cónyuge': '',	
                'Tipo Identificación Empresa Cónyuge': '',	
                'Numero Identificación Empresa Cónyuge': '',	
                'Digito Verificación Empresa Cónyuge': '',	
                'Razón Social Empresa Cónyuge': '',	
                'Tipo de Salario Cónyuge': '',	
                'Salario Básico Cónyuge': '',	
                'Tipo de Identificación PAC': '',	
                'Numero de Identificación PAC': '',	
                'Primer Apellido PAC': '',	
                'Segundo Apellido PAC': '',	
                'Primer Nombre PAC': '',	
                'Segundo Nombre PAC': '',	
                'Genero PAC': '',	
                'Fecha Nacimiento PAC': '',	
                'Parentesco PAC con Titular': ''		

            };
        });

       
        let ws = utils.json_to_sheet(update,{ origin: 1});

        utils.sheet_add_json(ws, [
            {   A: "DATOS DE TRABAJADOR", B: "DATOS DE TRABAJADOR", C: "DATOS DE TRABAJADOR", D: "DATOS DE TRABAJADOR", E: "DATOS DE TRABAJADOR", F: "DATOS DE TRABAJADOR", G: "DATOS DE TRABAJADOR",
                H: "DATOS DE TRABAJADOR", I: "DATOS DE TRABAJADOR", J: "DATOS DE TRABAJADOR", K: "DATOS DE TRABAJADOR", L: "DATOS DE TRABAJADOR", M: "DATOS DE TRABAJADOR", N: "DATOS DE TRABAJADOR",
                O: "DATOS DE TRABAJADOR", P: "DATOS DE TRABAJADOR", Q: "DATOS DE TRABAJADOR", R: "DATOS DE TRABAJADOR", S: "DATOS DE TRABAJADOR", T: "DATOS DE TRABAJADOR", U: "DATOS DE TRABAJADOR",
                V: "DATOS DE TRABAJADOR", W: "DATOS DE TRABAJADOR", X: "DATOS DE TRABAJADOR", Y: "DATOS DE TRABAJADOR", Z: "DATOS CONYUGE", 
                AA: "DATOS CONYUGE", AB: "DATOS CONYUGE", AC: "DATOS CONYUGE", AD: "DATOS CONYUGE", AE: "DATOS CONYUGE", AF: "DATOS CONYUGE", AG: "DATOS CONYUGE",
                AH: "DATOS CONYUGE", AI: "DATOS CONYUGE", AJ: "DATOS CONYUGE", AK: "DATOS CONYUGE", AL: "DATOS CONYUGE", AM: "DATOS CONYUGE", AN: "DATOS CONYUGE",
                AO: "DATOS PERSONA A CARGO", AP: "DATOS PERSONA A CARGO", AQ: "DATOS PERSONA A CARGO", AR: "DATOS PERSONA A CARGO", AS: "DATOS PERSONA A CARGO", AT: "DATOS PERSONA A CARGO", AU: "DATOS PERSONA A CARGO",
                AV: "DATOS PERSONA A CARGO", AW: "DATOS PERSONA A CARGO"
             }
        ], { skipHeader: true, origin: 0});

        

        const wb = utils.book_new();

        utils.book_append_sheet(wb, ws, "Data");
        writeFileXLSX(wb, "Load_massive.xlsx");
    };



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
                <div className="col-start-1 col-end-3">
                    <input className=" 
                    file:bg-gradient-to-b
                    file:from-blue-900
                    file:to-blue-900
                    file:px-4
                    file:py-2
                    file:border-none
                    file:rounded
                    file:text-white
                    file:cursor-pointer
                    font-bold
                    text-white
                    " 
                    id="file_input" 
                    type="file" onChange={(e) => {
                        const file = e.target.files[0]
                        readExcel(file);
                    }}/>
                </div>
                <div className="col-end-7 col-span-2">
                    <button onClick={shoot} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Exportar</span>
                    </button>
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
                                {/* component={ RouterLink } to='/load' */}
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
