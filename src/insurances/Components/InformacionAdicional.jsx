import { useEffect, useState } from "react";
import axios from "axios";

export const InformacionAdicional = ({handleInputChange}) => {
    const[nationality, setNationality] = useState([]);
    const[maritialState, setMaritialState] = useState([]);
    const[gender, setGender] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/nationalitys`).then((res) =>{
        setNationality(res.data.data);
        });
    },[]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/marital_states`).then((res)=>{
        setMaritialState(res.data.data);
        });
    },[]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/genders`).then((res)=>{
            setGender(res.data.data);
        })
    },[]);


    return (
        <>
            <h1 className="text-4xl text-blue-700">
                Información adicional para afiliación
            </h1>
            <hr />
            <br />
            <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Fecha de Nacimiento
                </label>
                <input
                    type="date"
                    id="dateBirth"
                    name="dateBirth"
                    onChange={handleInputChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    
                />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nacionalidad</label>
                    <select 
                    
                    id="nationality" 
                    name="nationality"
                    onChange={handleInputChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    {nationality.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Estado civil
                    </label>
                    <select 
                    
                    id="maritalStates"
                    name="maritalStates" 
                    onChange={handleInputChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    {maritialState.map((item)=>{
                        return <option value={item._id}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Genero
                    </label>
                    <select 
                    
                    id="gender" 
                    name="gender"
                    onChange={handleInputChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    {gender.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Departamento residencia
                    </label>
                    <select 
                    
                    id="department"
                    name="department" 
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="Cundinamarca">Cundinamarca</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    Teléfono fijo
                    </label>
                    <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="1-000-000"
                    maxLength={7}
                    onChange={handleInputChange}
                    />
                </div>
                <div class="flex justify-center items-center mb-4">
                    <input 
                    id="sendEmail"
                    name="sendEmail"
                    onChange={handleInputChange}
                    type="checkbox"
                    value="" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label 
                    className="ml-2 text-sm font-medium text-gray-900">
                        Trabajador Autoriza envío de eMail
                    </label>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Tipo de contrato
                    </label>
                    <select 
                    
                    id="contractType" 
                    name="contractType"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="Fijo">Fijo</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    Horas Laboradas Mes
                    </label>
                    <input
                    type="number"
                    id="hoursWorkedMonth"
                    name="hoursWorkedMonth"
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="000"
                    maxLength={3}
                    min={1}
                    
                    />
                </div>
            </div>
        </>
    );  
};
