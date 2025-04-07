import React from "react";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <h2>Welcome to WordGames!</h2>
        <p>
          Try to guess the word! For each turn, enter a single letter to see if
          it is in the word. As you find correct letters, they will be displayed
          in the word, while the rest of the letters are represented by blanks.
          Be careful, though! Guess wrong 7 times and you lose!
        </p>

        <Button
          variant="primary"
          onClick={() => {
            navigate("/play");
          }}
        >
          Play Now!
        </Button>
      </div>
    </main>
  );
}
