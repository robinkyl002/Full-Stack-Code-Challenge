import React from "react";

export function Play() {
  const [word, setWord] = React.useState("");
  const [displayWord, setDisplayWord] = React.useState("");
  const [letter, setLetter] = React.useState("");

  React.useEffect(() => {
    const wordLength = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
        setWord(data[0]);
      });
  }, []);

  function validateInput(e) {
    if (isLetter(e)) {
      setLetter(e);
    } else {
    }
  }

  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }

  return (
    <main>
      <div className="container-fluid">
        <h3>Your Word</h3>
        <div className="input-group mb-3">
          <label for="guess" className="form-label">
            Enter a letter to guess:
          </label>
          <input
            type="text"
            className="form-control"
            id="guess"
            maxLength="1"
            onChange={(e) => {
              setLetter(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </main>
  );
}
