import React from "react";
import img1 from "../assets/car1.jpeg";
import img2 from "../assets/car2.jpeg";
import img3 from "../assets/car3.jpeg";

const CarsList = () => {
  const cars = [
    { img: img1, name: "TATA Punch" },
    { img: img2, name: "Alto" },
    { img: img3, name: "Honda City" },
  ];

  return (
    <div className="container-fluid">
      <h4 className="mb-4">Cars List</h4>
      <div className="row g-3">
        {cars.map((car, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="card h-100">
              <img
                src={car.img}
                className="card-img-top"
                alt={car.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-0">{car.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
