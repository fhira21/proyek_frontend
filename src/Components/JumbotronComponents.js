import { Button } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import React from "react";

const JumbotronComponent = (props) => {
  const redirectToGithub = () => {
    window.location.assign("https://github.com/fhira21");
  };

  const redirectToInstagram = () => {
    window.location.assign("https://instagram.com/fhira_2105?igshid=ZDc4ODBmNjlmNQ==");
  };

  return (
    <div>
      <Jumbotron className="jumbotron">
        <p>
          <Button
            variant="github"
            className="btn btn-github"
            onClick={redirectToGithub}
          >
            GitHub
          </Button>{" "}
          <Button
            variant="instagram"
            className="btn btn-instagram"
            onClick={redirectToInstagram}
          >
            Instagram
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
