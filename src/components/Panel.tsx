import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Panel: React.FC = () => {
  const [clients, setClients] = useState([
    {
      name: "Gabriel",
      cpf: "25488181818",
      sex: "M",
    },
  ]);

  useEffect(() => {
    fetch("https://facec-webapi-2022.herokuapp.com/clientes", {
      cache: "no-cache",
      method: "GET",
      mode: "no-cors",
    })
      .then(function (res) {
        console.log(res);
        return res.text();
      })
      .then((data) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", data);
      });
  }, []);
  return (
    <div className="text-xl text-zinc-100 border border-zinc-700 bg-gradient-to-r from-zinc-800 to-zinc-900 bg-opacity-40 h-full w-full rounded-xl p-6 mx-h-[1024px] overflow-auto scrollbar-thin scrollbar-track-zinc-700">
      <div className="relative overflow-x-auto">
        <table className="w-full h-full text-md text-left text-gray-500">
          <thead className="text-md text-zinc-100 uppercase bg-gradient-to-r from-primary-300 to-primary-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Document
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client, i) => {
                return (
                  <tr
                    key={client.cpf}
                    className="bg-transparent border-b text-zinc-100"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      {client.name}
                    </th>
                    <td className="px-6 py-4">{client.cpf}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        className="hover:text-red-400 border-2 border-zinc-100 hover:border-red-400 focus:border-red-400 focus:text-red-400 outline-none transition-colors rounded-md py-2 px-8"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Panel;
