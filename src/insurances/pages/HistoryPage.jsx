import { InsuranceLayout } from "../Layout/InsuranceLayout";

export const HistoryPage = () => {
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
                          Empresa
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Nombre colaborador
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Tipo Documento
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Número documento
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Consultar
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b hover:bg-[#ebffa1]">
                      <td className="p-4 w-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900">
                          DIA Technology SAS
                      </th>
                      <td className="py-4 px-6">
                          Juan David Torres
                      </td>
                      <td className="py-4 px-6">
                          CC
                      </td>
                      <td className="py-4 px-6">
                          1020731613
                      </td>
                      <td className="py-4 px-6">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-[#ebffa1]">
                      <td className="p-4 w-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                          </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900">
                          DIA Technology SAS
                      </th>
                      <td className="py-4 px-6">
                          Jairo Combita
                      </td>
                      <td className="py-4 px-6">
                          CC
                      </td>
                      <td className="py-4 px-6">
                          1020731614
                      </td>
                      <td className="py-4 px-6">
                          <a href="#" className="font-medium text-blue-600 hover:underline">Ver</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </InsuranceLayout>
  );
};
