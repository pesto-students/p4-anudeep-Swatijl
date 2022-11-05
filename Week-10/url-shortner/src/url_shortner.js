import React, { useState } from "react";
import { v4 } from "uuid";

function URLShortner() {
  const [url, setURL] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const getShortURL = async () => {
    setIsLoaded(true);
    setURL("")
    const itemExist = items.find(x => x.long_url === url)
    if(itemExist){
        setIsLoaded(false);
        return
    }
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((res) => res.json())
      .then(
        (data) => {
          setItems((items) => [
            ...items,
            {
              id: v4(),
              short_url: data.result.full_short_link,
              long_url: url,
            },
          ]);
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const inputField = {
    width: "90%",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
  };

  const btnColor = {
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    textTransform: "Kuppercase",
    fontWeight: "bold",
    width: "10%",
    backgroundColor: "darkblue",
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <div className="center-all">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            style={inputField}
            onChange={(e) => setURL(e.target.value)}
          />
          <input
            type="submit"
            value="Generate"
            onClick={() => getShortURL(url)}
            style={btnColor}
          />
        </div>
        {isLoaded && <div>Loading...</div>}
        {items.length > 0 && (
          <table>
            <tbody>
              <tr>
                <th>Long url</th>
                <th>Short url</th>
              </tr>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.long_url}</td>
                    <td>
                      <a href={item.short_url} rel="noreferrer" target="_blank">
                        {item.short_url}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default URLShortner;
