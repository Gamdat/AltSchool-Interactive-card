import React, {useState} from "react";
import CardForm from "./Components/CardForm";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
import Success from "./Components/Success";
import './App.css'


export default function App () {

const [cardData, setCardData] = useState({
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (field, value) => {
  setCardData((prev) => ({...prev, [field]: value}));
};

const handleSubmit = () => {
  setSubmitted(true);
};

const handleReset = () => {
  setCardData({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  setSubmitted(false);
};

  return (
    <div className="container">
      <div className="side-a">d</div>
      <div className="side-b">
      <div className="card-preview">
        <CardFront data={cardData}/>
        <CardBack data={cardData.cvc}/>
      </div>
      <div className="form-container">
        {!submitted ? (
          <CardForm
          data={cardData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          />
        ): (
          <Success onContinue={handleReset}/>
        )}
      </div>
      </div>
    </div>
  )
}

