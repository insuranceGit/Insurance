import { InsuranceLayout } from "../Layout/InsuranceLayout";
import { Grid, Typography } from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import { InformacionAdicional } from "../Components";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const FormPage = () => {
    const [documentType, setDocumentType] = useState([]);
    const [municipiality, setMunicipiality] = useState([]);

    const [datos, setDatos] = useState({
        id_documentType: '',
        document: '',
        first_name:'',
        second_name: '',
        first_last_name: '',
        second_last_name:'',
        id_municipality: '',
        address: '',
        cellphone:'',
        email: '',
        eps: '',
        regimen:'',
        ips: '',
        job: '',
        salary:'',
        dateAdmission: '',
        dateBirth: '',
        nationality: '',
        maritalStates: '',
        gender: '',
        department: '',
        phone: '',
        sendEmail: '',
        contractType: '',
        hoursWorkedMonth: ''        
    })

    const handleInputChange = (event) => {        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('enviando datos...   \n' + datos + ' ')
        console.log(datos)
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/type_identifications`).then((res) => {
        setDocumentType(res.data.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/marital_states`).then((res) => {
        setMunicipiality(res.data.data);
        });
    }, []);

    

  return (
    <InsuranceLayout>
        <form className="border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit}>
            <h1 className="text-4xl text-blue-700">Solicitud de afiliación</h1>
            <hr />
            <br />
            <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Tipo de documento
                </label>
                <select
                
                id="id_documentType"
                name="id_documentType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleInputChange}
                >
                {documentType.map((item) => {
                    return <option key={item._id} value={item._id}>{item.name}</option>;
                })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Número de identificación
                </label>
                <input
                type="number"
                id="document"
                name="document"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Identificación"
                onChange={handleInputChange}
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Primer Nombre
                </label>
                <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu primer nombre"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Segundo Nombre
                </label>
                <input
                type="text"
                id="second_name"
                name="second_name"
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu segundo nombre"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Primer Apellido
                </label>
                <input
                type="text"
                id="first_last_name"
                name="first_last_name"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu primer apellido"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Segundo Apellido
                </label>
                <input
                type="text"
                id="second_last_name"
                name="second_last_name"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu segundo apellido"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Municipio residencia
                </label>
                <select
                
                id="id_municipality"
                name="id_municipality"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                {municipiality.map((item) => {
                    return <option key={item._id} value={item._id}>{item.name}</option>;
                })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Dirección de residencia
                </label>
                <input
                type="text"
                id="address"
                name="address"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Dirección completa sin símbolos"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Celular
                </label>
                <input
                type="number"
                id="cellphone"
                name="cellphone"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="313-100-0000"
                maxLength={10}
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Correo electrónico
                </label>
                <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="@email.com"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                EPS
                </label>
                <input
                type="text"
                id="eps"
                name="eps"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Régimen EPS
                </label>
                <input
                type="text"
                id="eps"
                name="regimen"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                IPS
                </label>
                <input
                type="text"
                id="ips"
                name="ips"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Cargo
                </label>
                <input
                type="text"
                id="job"
                name="job"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingrese el cargo del colaborador"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Salario
                </label>
                <input
                type="number"
                id="salary"
                name="salary"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                min={1}
                placeholder="Ingrese el valor del salario"
                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Fecha de ingreso
                </label>
                <input
                type="date"
                id="dateAdmission"
                name="dateAdmission"
                onChange={handleInputChange}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                
                />
            </div>
            </div>

            <InformacionAdicional handleInputChange={handleInputChange} />

            <button
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
            💾
            </button>
        </form>
    </InsuranceLayout>
  );
};
