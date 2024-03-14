import Button from "react-bootstrap/Button";

const Bio = () => {
  return (
    <div className="px-4 py-5 bg-body-tertiary my-4 rounded shadow" id="About">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            About/Mission Statement
          </h1>
          <p className="lead text-secondary">
          Cash Money Dirt Late Model Series designed to save the racers money while still providing high quality racing for the fans!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button href="#Contact" variant="outline-secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
