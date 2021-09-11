import React from "react";

const TouristInfoCard = props => (
  <div className="card col">
    <img src={props.image} className="card-img-top" alt="" />
    <div className="card-body">
      <h5 className="card-title"> {props.cityName} </h5>
      <a href={props.url} className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);
const TouristInfoCards = () => {
  return (
    <div>
      <TouristInfoCard
        cityName="Glasgow"
        url="http://peoplemakeglasgow.com"
        image="https://peoplemakeglasgow.com/images/IntroducingGlasgow/Queens_Drive.jpg"
      />
      <TouristInfoCard
        cityName="Manchester"
        url="http://visitmanchester.com"
        image="https://peoplemakeglasgow.com/images/IntroducingGlasgow/Queens_Drive.jpg"
      />
      <TouristInfoCard
        cityName="London"
        url="http://visitlondon.com"
        image="https://peoplemakeglasgow.com/images/IntroducingGlasgow/Queens_Drive.jpg"
      />
    </div>
  );
};
export default TouristInfoCards;
