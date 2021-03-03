import React from "react";
import "./Oversized.css";
const Oversized = () => {
  return (
    <div className="oversized">
      <p>CUSTOMER SERVICE</p>
      <h1>CONTACT US</h1>
      <div className="row1label">
        <div className="row1c">
          <label>Name*</label>
          <input type="text" />
        </div>
        <div className="row1c">
          <label>Last Name*</label>
          <input type="text" />
        </div>
      </div>
      <div className="row1label">
        <div className="row1c">
          <label>EMAIL</label>
          <input type="text" />
        </div>
        <div className="row1c">
          <label>DAYTIME PHONE</label>
          <input type="text" />
        </div>
      </div>

      <div className="row1label">
        <div className="row1c">
          <label>SUBJECT</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="row1c">
          <label>OTHER, PLEASE SPECIFY A SUBJECT</label>
          <input type="text" />
        </div>
      </div>
      <div className="row1label">
        <div className="row1c">
          <label>ORDER NUMBER IF APPLICABLE</label>
          <input type="text" />
        </div>
        <div className="row1c">
          <label>COMMENT</label>
          <input type="text" />
        </div>
      </div>
      <div className="row1labels">
        <div className="row1cd">
          <label>COMMENT</label>
          <p>2000 character limit</p>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </div>
      </div>
      <div className="row1label">
        <div className="row1c">
          <label>File Attachment (image or pdf up to 2.5MB)</label>
          <input type="file" />
        </div>
      </div>
      <div className="row1label">
        <button className="rowbutton">SEND</button>
      </div>
    </div>
  );
};

export default Oversized;
