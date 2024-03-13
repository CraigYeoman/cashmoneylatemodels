import rules from "../images/rules2024.pdf"

const Rules = () => {

    return (
      <div className="container vh-100">
        <div className="mt-5 bg-main p-4 rounded">
        
        <h2 className="text-center text-white fw-bold text-decoration-underline">2024 Cash Money Late Model Series Rules</h2>
        <p className="text-white">The rules and/or regulations do not express or imply warranty of safety, from publication of, or compliance
          with these rules and/or regulations. They are intended as a guide for the conduct of the Cash Money Series
          and are in no way a guarantee against injury to participants. These rules and/or regulations will apply to all
          Cash Money Series racing events. These rules are subject for revision and change at the discrepancy of Cash
          Money Officials, ALL OFFICIAL’S DECISIONS ARE FINAL. </p>
        <p className="text-white text-decoration-underline">* Drivers- it is YOUR responsibility to be aware of your crew at the track as well as on social media (ANY
negative comments directed towards another driver, crew, official, Cash Money Series, track, or fan will
result in being banned from the series Facebook page) *</p>
        <a className="mt-3 btn"href={rules} without rel="noreferrer" target="_blank">
          <button className="btn btn-light">
            2024 Rule Book
          </button>
        </a>
        </div>
        

      </div>
    );
  };
  
  export default Rules;