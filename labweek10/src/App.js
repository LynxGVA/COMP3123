import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [f, setF] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });
  const [out, setOut] = useState(null);

  function change(e) {
    const { name, value, type, checked } = e.target;
    setF({ ...f, [name]: type === "checkbox" ? checked : value });
  }

  function submit(e) {
    e.preventDefault();
    setOut(f);
  }

  return (
    <div className="page">
      <div className="panel">
        <h1>Data Entry Form</h1>

        <form onSubmit={submit}>
          <div className="row two">
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={f.email}
                onChange={change}
                required
              />
            </div>
            <div>
              <label>Name</label>
              <input
                name="fullName"
                placeholder="Full Name"
                value={f.fullName}
                onChange={change}
                required
              />
            </div>
          </div>

          <div className="row one">
            <div>
              <label>Address</label>
              <input
                name="address1"
                placeholder="1234 Main St"
                value={f.address1}
                onChange={change}
                required
              />
            </div>
          </div>

          <div className="row one">
            <div>
              <label>Address 2</label>
              <input
                name="address2"
                placeholder="Apartment, studio, or floor"
                value={f.address2}
                onChange={change}
              />
            </div>
          </div>

          <div className="row three">
            <div>
              <label>City</label>
              <input
                name="city"
                value={f.city}
                onChange={change}
                required
              />
            </div>

            <div>
              <label>Province</label>
              <select
                name="province"
                value={f.province}
                onChange={change}
                required
              >
                <option value="">Choose...</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Manitoba</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Nova Scotia</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>
                <option>Quebec</option>
                <option>Saskatchewan</option>
              </select>
            </div>

            <div>
              <label>Postal Code</label>
              <input
                name="postalCode"
                value={f.postalCode}
                onChange={change}
                required
              />
            </div>
          </div>

          <div className="row center">
            <label className="check">
              <input
                type="checkbox"
                name="agree"
                checked={f.agree}
                onChange={change}
              />
              <span> Agree Terms &amp; Condition?</span>
            </label>
          </div>

          <div className="row center">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>

      {out && (
        <div className="panel output">
          <div>
            <b className="lbl">Email:</b> {out.email}
          </div>
          <div>
            <b className="lbl">Full Name:</b> {out.fullName}
          </div>
          <div>
            <b className="lbl">Address:</b> {out.address1}
          </div>
          <div>
            <b className="lbl">City:</b> {out.city}
          </div>
          <div>
            <b className="lbl">Province:</b> {out.province}
          </div>
          <div>
            <b className="lbl">Postal Code:</b> {out.postalCode}
          </div>
        </div>
      )}
    </div>
  );
}

