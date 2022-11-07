export const InformacionAdicional = () => {
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nacionalidad</label>
                    <select 
                    required
                    id="nationality" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="CO">Colombia</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>  
                    <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Estado civil
                    </label>
                    <select 
                    required
                    id="maritalStatus" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="Casado">Casado</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Genero
                    </label>
                    <select 
                    required
                    id="gender" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="Casado">Masculino</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Departamento residencia
                    </label>
                    <select 
                    required
                    id="department" 
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="1-000-000"
                    maxLength={7}
                    required
                    />
                </div>
                <div class="flex justify-center items-center mb-4">
                    <input 
                    id="sendEmail"
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
                    required
                    id="contractType" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected></option>
                    <option value="Fijo">Fijo</option>
                    </select>
                </div>
            </div>
        </>
    );  
};
