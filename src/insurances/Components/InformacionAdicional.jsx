import { useEffect, useState } from "react";
import axios from "axios";

export const InformacionAdicional = ({register}) => {
    const[nationality, setNationality] = useState([]);
    const[maritialState, setMaritialState] = useState([]);
    const[gender, setGender] = useState([]);
    const[department, setDepartment] = useState([]);
    const[contractType, setContractType] = useState([]);

    useEffect(() => {

        axios.get(`https://airsegurosbackend.herokuapp.com/api/nationalitys`).then((res) =>{
        setNationality(res.data.data);
        });

        axios.get(`https://airsegurosbackend.herokuapp.com/api/marital_states`).then((res)=>{
        setMaritialState(res.data.data);
        });

        axios.get(`https://airsegurosbackend.herokuapp.com/api/genders`).then((res)=>{
            setGender(res.data.data);
        })

        axios.get(`https://airsegurosbackend.herokuapp.com/api/departments`).then((res)=>{
            setDepartment(res.data.data);
        })

        axios.get(`https://airsegurosbackend.herokuapp.com/api/type_contracts`).then((res)=>{
            setContractType(res.data.data);
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

                    {...register("dateBirth", {
                        valueAsDate: true,
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                    
                />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nacionalidad</label>
                    <select 
                    id="id_nationality" 
                    name="id_nationality"
                    {...register("id_nationality")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option></option>
                    {nationality.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Estado civil
                    </label>
                    <select                     
                    id="id_maritalStates"                    
                    name="id_maritalStates"
                    {...register("id_maritalStates")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option ></option>
                    {maritialState.map((item)=>{
                        return <option key={item._id} value={item.name}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Genero
                    </label>
                    <select                     
                    id="id_gender" 
                    {...register("id_gender")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option ></option>
                    {gender.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                    })}
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Departamento residencia
                    </label>
                    <select                     
                    id="id_department"        
                    name="id_department"
                    {...register("id_department")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option ></option>
                    {department.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                    })}
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
                    {...register("phone", {
                        valueAsNumber: true,
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="1-000-000"
                    maxLength={7}
                    min={1}
                    />
                </div>
                <div className="flex justify-center items-center mb-4">
                    <input 
                    type="checkbox"
                    id="sendEmail"
                    name="sendEmail"
                    {...register("sendEmail")}
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
                    id="id_contractType"       
                    name="id_contractType" 
                    {...register("id_contractType")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option ></option>
                    {contractType.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                    })}
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
                    {...register("hoursWorkedMonth", {
                        valueAsNumber: true
                    })}
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
