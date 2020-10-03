import React from "react";

function Inzamam(props) {
  const meObj = {
    name: "Inzamam",
    Git: "https://github.com/mrinzamamasghar",
  };
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        <body>
          <div class="container">
            <div>
              <label>Name:</label>
              <span>{meObj.name}</span>
            </div>
            <div>
              <label>GitHub:</label>
              <a href={meObj.Git}>Inzamam_Asghar</a>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Inzamam;
