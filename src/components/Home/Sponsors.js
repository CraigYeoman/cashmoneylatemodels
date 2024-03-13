import sponsors from "../../images/sponsors.png"

const images = require.context('../../images/sponsors', true);
const sponsorList = images.keys().map(image => images(image));

const Sponsors = () => {

  return (
    <div className="col-lg-12 py-4">
      <div className="shadow">
        <div className="row bg-main rounded-top">
        <h2 className="display-5 fw-bold lh-1 mb-3 text-white text-center pt-2">
            Sponsors
          </h2>
          <p className="text-center">
            Supports our sponsors who support us!
          </p>
        </div>
      
        <div className="bg-white row rounded-bottom">
          {sponsorList.map((image, index) => (
            <div key={index} className="col">
            <img className="mx-auto d-block" src={image} alt={`image-${index}`} />
            </div>
          ))}
        </div>
          
          
      </div>  
    </div>
  );
};

export default Sponsors;
