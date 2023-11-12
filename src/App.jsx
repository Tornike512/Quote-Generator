import { useState, useEffect } from "react";
import axios from "axios";

import { Background } from "./Components/Background/background";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");
  const [value, setValue] = useState(20);

  async function getQuotes() {
    try {
      const response = await axios.get(
        `https://api.quotable.io/quotes?limit=${getRandomQuote(value)}`
      );
      setQuotes(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  function getRandomQuote(value) {
    return Math.floor(Math.random() * value);
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <Background>
        <div className="flex justify-center flex-col w-[600px] text-xl">
          <button
            value={value}
            onClick={() => getRandomQuote(20)}
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
          {quotes.map((quote) => {
            return (
              <h1 key={quote.id} className="mt-6">
                {" "}
                {quote.author}
              </h1>
            );
          })}
        </div>
      </Background>
    </>
  );
}

export default App;
