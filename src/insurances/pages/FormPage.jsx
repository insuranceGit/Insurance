import { InsuranceLayout } from "../Layout/InsuranceLayout";
import { Grid, Typography } from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import { InformacionAdicional } from "../Components";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const FormPage = () => {

  const [civil, setCivil] =  useState([]);
  
  useEffect(() => {    
    axios
      .get(`http://localhost:3001/api/marital_states`)
      .then((res) => {
        setCivil(res.data.data);   
      })
  }, []);
  return (
    <InsuranceLayout>
      <form className="border border-gray-300 p-6 rounded-lg">
        <h1 className="text-4xl text-blue-700">Solicitud de afiliación</h1>
        <hr />
        <br />
        <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Tipo de documento</label>
                <select 
                required
                id="documentType" 
                className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5">
                
                {civil.map(item => {
                return <option value={item._id}>
                {item.name}
                </option>;
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Identificación"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Primer Nombre
                </label>
                <input
                type="text"
                id="first_name"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu segundo nombre"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Primer Apellido
                </label>
                <input
                type="text"
                id="first_last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu primer apellido"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Segundo Apellido
                </label>
                <input
                type="text"
                id="second_last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingresa tu segundo apellido"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Municipio residencia
                </label>
                <select 
                required
                id="municipality" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected></option>
                <option value="Bogotá">Bogotá</option>
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Dirección de residencia
                </label>
                <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Dirección completa sin símbolos"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Celular
                </label>
                <input
                type="number"
                id="cellphone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="313-100-0000"
                maxLength={10}
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Correo electrónico
                </label>
                <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="@email.com"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                EPS
                </label>
                <input
                type="text"
                id="eps"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Régimen EPS
                </label>
                <input
                type="text"
                id="eps"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                IPS
                </label>
                <input
                type="text"
                id="IPS"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Cargo
                </label>
                <input
                type="text"
                id="Job"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingrese el cargo del colaborador"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Salario
                </label>
                <input
                type="number"
                id="Salary"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                min={1}
                placeholder="Ingrese el valor del salario"
                required
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Fecha de ingreso
                </label>
                <input
                type="date"
                id="dateAdmission"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                />
            </div>
        </div>

        <InformacionAdicional />

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
