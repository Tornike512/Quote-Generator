import { useState, useEffect } from "react";
import axios from "axios";

import { Background } from "./Components/Background/background";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  async function getQuotes() {
    try {
      const response = await axios.get("https://api.quotable.io/quotes?limit=");
      setQuotes(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

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
          {quotes.map((quote) => {
            return (
              <p className="text-[30px]" key={quote.id}>
                {quote.content}
              </p>
            );
          })}
          <h1 className="mt-6"> -Charles Dickens</h1>
        </div>
      </Background>
    </>
  );
}

export default App;
