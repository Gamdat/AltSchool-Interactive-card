import React, { useState } from "react";
import "./CardForm.css";

export default function CardForm({data, onChange, onSubmit}) {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if(!data.name.trim()) newErrors.name = "Can't be blank";
        if (!/^\{16}$/.test(data.number)) newErrors.number = "Wrong Format";
        if (!/^\{2}$/.test(data.month)) newErrors.month = "Invalid Month";
      if (!/^\{2}$/.test(data.year)) newErrors.year = "Invalid Year";
     if (!/^\{3}$/.test(data.cvc)) newErrors.cvc = "Invali CVC";
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit();
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                CARDHOLDER NAME
                <input
                type="text"
                value={data.name}
                onChange={(e) => onChange("name", e.target.value)}
                placeholder="e.g  Ajayi Gloria"/>
                {errors.name &&<small>{errors.name}</small>}
            </label>

            <label>
                CARD NUMBER
                <input
                type="text"
                value={data.number}
                onChange={(e) => onChange("number", e.target.value.replace(/\s/g, ""))}
                placeholder="e.g  1234 5678 9123 0023"
                maxLength={16}/>
                {errors.number &&<small>{errors.number}</small>}
                
            </label>

            <div className="form-row">
                <label>
                    EXP. DATE (MM/YY)
                    <div className="expiry">
                        <input
                type="text"
                value={data.month}
                onChange={(e) => onChange("month", e.target.value)}
                placeholder=" MM"
                maxLength={2}/>

                  <input
                type="text"
                value={data.year}
                onChange={(e) => onChange("year", e.target.value)}
                placeholder=" YY"
                maxLength={2}/>
                    </div>
                    {(errors.month || errors.year) && (
                        <small>{errors.month || errors.year}</small>
                    )}
                </label>
               
                <label>
                    CVC
                     <input
                type="text"
                value={data.cvc}
                onChange={(e) => onChange("cvc", e.target.value)}
                placeholder=" e.g 123"
                maxLength={3}/>
                {errors.cvc && <small>{errors.cvc}</small>}
                </label>
            </div>
            <button type="submit">Confirm</button>
        </form>
  
    )
}

      