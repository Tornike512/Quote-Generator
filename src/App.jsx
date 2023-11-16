import { useState, useEffect } from "react";
import axios from "axios";

import { Background } from "./Components/Background/background";

function App() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");
  const [random, setRandom] = useState(0);

  async function getQuotes() {
    try {
      const response = await axios.get(
        `https://api.quotable.io/quotes?limit=20`
      );

      const randomIndex = getRandomQuote(response.data.results.length);
      setQuote(response.data.results[randomIndex]);

      console.log(response.data.results);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getQuotes();
    console.log("Random value updated:", random);
  }, [random]);

  function getRandomQuote(length) {
    return Math.floor(Math.random() * length);
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <Background>
        <div className="flex justify-center flex-col w-[600px] text-xl">
          <button
            onClick={() => {
              console.log("Before setRandom:", random);
              setRandom(getRandomQuote(20));
              console.log("After setRandom:", random);
            }}
            className="w-[62px] pl-9 pr-[5.25rem] py-3 rounded-lg border-0 bg-[#89cff0] shadow-[2px_1px_4px_#000000] absolute top-1/2 left-1/2 transform translate(-50%, -50%) "
          >
            Generate
          </button>
          {quote && (
            <div key={quote.id}>
              <p className="text-[30px]">{quote.content}</p>
              <h1 className="mt-6">{quote.author}</h1>
            </div>
          )}
        </div>
      </Background>
    </>
  );
}

export default App;
