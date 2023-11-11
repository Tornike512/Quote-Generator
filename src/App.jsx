import { useState, useEffect } from "react";
import axios from "axios";

import { Background } from "./Components/Background/background";

function App() {
  return (
    <>
      <Background>
        <div className="flex justify-center flex-col w-[600px] text-xl">
          <button
            className="w-[62px] pl-9 pr-[5.25rem] py-3 rounded-lg border-[none]
           bg-[#89cff0] shadow-[2px_1px_4px_#000000]  absolute top-[10rem] left-[36.5rem]"
          >
            Generate
          </button>
          <p className="text-[30px]">
            "Reflect on your present blessings, of which every man has many; not
            on your past misfortunes, of which all men have some."
          </p>
          <h1 className="mt-6"> -Charles Dickens</h1>
        </div>
      </Background>
    </>
  );
}

export default App;
