import { Popover } from "@headlessui/react";
import axios from "axios";
import { CaretDown, Coffee } from "phosphor-react";
import React, { useState } from "react";

const Pop: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [sex, setSex] = useState(1);

  async function saveClient() {
    axios
      .post(
        "https://facec-webapi-2022.herokuapp.com/clientes",
        JSON.stringify({
          nome: name,
          docuumento: cpf,
          sexo: sex,
        })
      )
      .then((res) => {
        console.log("DEU CERTO", res);
      })
      .catch((err) => {
        console.log("DEU ERRADO", err);
      });
    // const res = await fetch(
    //   "https://facec-webapi-2022.herokuapp.com/clientes",
    //   {
    //     cache: "no-cache",
    //     method: "POST",
    //     mode: "no-cors",
    //     body: JSON.stringify({ nome: name, documento: cpf, sexo: sex }),
    //   }
    // )
    //   .then(function (response) {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     return Promise.reject(response);
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.warn("Something went wrong.", error);
    //   });
    // console.log(res);
    // .then(function (res) {
    //   console.log(res);
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", data);
    // });
  }

  return (
    <Popover>
      <Popover.Button className="bg-primary-500 text-zinc-100 hover:bg-primary-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-primary-500 outline-none transition-colors ease-linear py-2 px-4 rounded-md flex items-center fixed left-5 top-5">
        Add
        <CaretDown weight="bold" className="ml-4" />
      </Popover.Button>
      <Popover.Panel>
        <div className="h-[364px] w-[364px] bg-zinc-800 border border-zinc-700 p-6 z-50 flex flex-col text-zinc-100 rounded-md absolute left-5 top-20 transition-all duration-300 ease-linear">
          <span className="font-semibold text-md mb-2">Name</span>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="User name"
            className="bg-transparent border border-zinc-600 focus:border-primary-300 rounded-md px-4 py-2 outline-none"
            type="text"
          />
          <span className="font-semibold text-md mb-2 mt-4">CPF</span>
          <input
            onChange={(e) => setCpf(e.target.value)}
            placeholder="User document"
            className="bg-transparent border border-zinc-600 focus:border-primary-300 rounded-md px-4 py-2 outline-none"
            type="text"
          />
          <button
            onClick={saveClient}
            disabled={name.length == 0 || cpf.length == 0}
            type="submit"
            className="disabled:opacity-50 bg-primary-500 text-zinc-100 hover:bg-primary-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-primary-500 outline-none transition-colors ease-linear py-2 px-4 rounded-md mt-6"
          >
            Save
          </button>
          <p className="mt-10 border border-primary-300 rounded-full py-2 px-4 w-32 flex items-center">
            Web <span className="text-primary-300">API</span>{" "}
            <Coffee weight="bold" className="ml-4" />
          </p>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Pop;
