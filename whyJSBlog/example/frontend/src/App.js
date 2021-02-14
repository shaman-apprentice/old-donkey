import { useEffect, useState } from "react";

export default function App() {
  const [since, setSince ] = useState({
    text: "I don't know",
    color: "initial"
  });

  useEffect(() => {
    const fetchController = new AbortController();
    fetch("http://localhost:3001", { signal: fetchController.signal })
      .then(response => response.json())
      .then(setSince)
      .catch(console.error)

    return () => fetchController.abort();
  }, [ setSince ])

  return <>
    <h1 style={{textAlign: "center"}}>
      Coffee makes developers happy since
      <span style={{
        display: "block",
        color: since.color,
        fontStyle: "italic",
      }}>
        "{since.text}"
      </span>
    </h1>

    <img
      src="developer-with-coffee.png"
      style={{width: "100%"}}
      alt="Happy Developer"
    />
  </>
} 
