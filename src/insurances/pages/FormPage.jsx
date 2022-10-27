import { InsuranceLayout } from "../Layout/InsuranceLayout"
import { Grid, Typography } from "@mui/material"
import { InsertDriveFile } from "@mui/icons-material"

export const FormPage = () => {
  return (
    <InsuranceLayout>
      <form className='border border-gray-300 p-6 rounded-lg'>
          <h1 className='text-4xl text-blue-700'>Solicitud de afiliación</h1>
          <hr/>
          <br/>
          <div className='grid gap-6 mb-6 md:grid-cols-4'>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Número de identificación</label>
                  <input type='number' id='document' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Identificación' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Primer Nombre</label>
                  <input type='text' id='first_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Ingresa tu primer nombre' />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Segundo Nombre</label>
                  <input type='text' id='second_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Ingresa tu segundo nombre' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Primer Apellido</label>
                  <input type='text' id='first_last_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Ingresa tu primer apellido' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Segundo Apellido</label>
                  <input type='text' id='second_last_name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Ingresa tu segundo apellido' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Ciudad de residencia</label>
                  <input type='text' id='city' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Ciudad' required/>
              </div>  
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Dirección de residencia</label>
                  <input type='text' id='address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Dirección completa sin símbolos' required/>
              </div>  
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Celular</label>
                  <input type='tel' id='cellphone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='313-100-0000' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>Correo electrónico</label>
                  <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='@email.com' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>EPS</label>
                  <input type='text' id='eps' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='' required />
              </div>
              <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>IPS</label>
                  <input type='text' id='IPS' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='' required />
              </div>
          </div>
          <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Registrar</button>
      </form>
    </InsuranceLayout>
  )
}
