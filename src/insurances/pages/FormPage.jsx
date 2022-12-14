import { InsuranceLayout } from "../layout/InsuranceLayout";
import { Grid, Typography } from "@mui/material";
import { InsertDriveFile } from "@mui/icons-material";
import { InformacionAdicional } from "../components";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom'



export const FormPage = () => {
    const location = useLocation()
    const { id } = location.state != null ? location.state : '0';  
    const [documentType, setDocumentType] = useState([]);
    const [municipiality, setMunicipiality] = useState([]);
    const [job, setJob] = useState([]);
    const [user, setUser] = useState([]);

    const {register, setValue, errors, handleSubmit} = useForm({ mode: 'onBlur' });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        

        if( id == undefined ){
            
            axios.post('https://airsegurosbackend.herokuapp.com/api/load_massives', data)
            .then(function (response) {
                navigate('/load', { replace: true });

            })
            .catch(function (error) {
            console.log(error);
            });

        }else{      


            axios.put(`https://airsegurosbackend.herokuapp.com/api/load_massives/${id}`, data)
            .then(function (response) {
                navigate('/load', { replace: true });

            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }   

    useEffect(() => {      

        if( id != undefined ){
       
            axios.get(`https://airsegurosbackend.herokuapp.com/api/load_massives/${id}`).then((res) => {

            
                let date ="";
                let dateAdmission = "";
                let dateBirth ="";

                if(res.data.data.dateAdmission){
                    date = new Date(res.data.data.dateAdmission);
                    dateAdmission = date.toISOString().split('T')[0];
                }    

                if(res.data.data.dateBirth){
                    date = new Date(res.data.data.dateBirth);
                    dateBirth = date.toISOString().split('T')[0];
                } 
                
                console.log(dateAdmission)
            

                setUser(res.data.data);
                setValue("id_documentType", res.data.data.id_documentType);   
                setValue("document", res.data.data.document); 
                setValue("first_name", res.data.data.first_name); 
                setValue("second_name", res.data.data.second_name); 
                setValue("first_last_name", res.data.data.first_last_name); 
                setValue("second_last_name", res.data.data.second_last_name); 
                setValue("id_municipality", res.data.data.id_municipality);
                setValue("address", res.data.data.address); 
                setValue("cellphone", res.data.data.cellphone); 
                setValue("email", res.data.data.email); 
                setValue("eps", res.data.data.eps);
                setValue("regimen", res.data.data.regimen); 
                setValue("ips", res.data.data.ips); 
                setValue("position", res.data.data.position); 
                setValue("id_job", res.data.data.id_job); 
                setValue("salary", res.data.data.salary); 
                setValue("dateAdmission", dateAdmission); 
                setValue("id_nationality", res.data.data.id_nationality); 
                setValue("id_maritalStates", res.data.data.id_maritalStates); 
                setValue("id_gender", res.data.data.id_gender); 
                setValue("id_department", res.data.data.id_department); 
                setValue("phone", res.data.data.phone); 
                setValue("sendEmail", res.data.data.sendEmail); 
                setValue("id_contractType", res.data.data.id_contractType); 
                setValue("hoursWorkedMonth", res.data.data.hoursWorkedMonth); 
                setValue("dateBirth", dateBirth); 

            });
        }

        axios.get(`https://airsegurosbackend.herokuapp.com/api/municipialitys`).then((res) => {
        setMunicipiality(res.data.data);
        });
    }, [id]);  

    useEffect(() => {

        axios.get(`https://airsegurosbackend.herokuapp.com/api/type_identifications`).then((res) => {
        setDocumentType(res.data.data);
        });
    }, []);   

    useEffect(() => {

        axios.get(`https://airsegurosbackend.herokuapp.com/api/type_jobs`).then((res) => {
        setJob(res.data.data);
        });
    }, []);   

  return (
    <InsuranceLayout>
        <form className="border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl text-blue-700">Solicitud de afiliaci??n</h1>
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

                {...register("id_documentType")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                <option>{user.id_documentType}</option>
                {documentType.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                N??mero de identificaci??n
                </label>
                <input
                type="number"
                id="document"
                name="document"

                {...register("document", {
                    valueAsNumber: true,
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Identificaci??n"
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
                {...register("first_name")}

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

                {...register("second_name")}
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

                {...register("first_last_name")}
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

                {...register("second_last_name")}
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

                {...register("id_municipality")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >                
                <option>{user.id_municipality}</option>
                {municipiality.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Direcci??n de residencia
                </label>
                <input
                type="text"
                id="address"
                name="address"

                {...register("address")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Direcci??n completa sin s??mbolos"                
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

                {...register("cellphone", {
                    valueAsNumber: true,
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="313-100-0000"
                maxLength={10}               
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Correo electr??nico
                </label>
                <input
                type="email"
                id="email"
                name="email"

                {...register("email")}
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

                {...register("eps")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                R??gimen EPS
                </label>
                <input
                type="text"
                id="regimen"
                name="regimen"

                {...register("regimen")}
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

                {...register("ips")}
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
                id="position"
                name="position"

                {...register("position")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ingrese el cargo del colaborador"                
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Actividad
                </label>
                <select                
                id="id_job"
                name="id_job"

                {...register("id_job")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                <option>{user.id_job}</option>
                {job.map((item) => {
                    return <option key={item._id} value={item.name}>{item.name}</option>;
                })}
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Salario
                </label>
                <input
                type="number"
                id="salary"
                name="salary"

                {...register("salary", {
                    valueAsNumber: true,
                })}
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

                {...register("dateAdmission", {
                    valueAsDate: true,
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                
                />
            </div>
            </div>
            
            <InformacionAdicional 
                register={register}
                user={user}
                setValue={setValue}
            />

            <button
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
            ????
            </button>
        </form>
    </InsuranceLayout>
  );
};
