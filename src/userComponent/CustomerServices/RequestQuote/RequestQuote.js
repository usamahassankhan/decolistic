import React from "react";
import Sidebarcustomerservices from "../Sidebarcustomerservices/Sidebarcustomerservices";
import "./RequestQuote.css";
const RequestQuote = () => {
  return (
    <>
      {/* <Sidebarcustomerservices /> */}
      <div className="request">
        <p>CUSTOMER SERVICE</p>
        <h1>INTERNATIONAL ORDER QUOTE</h1>
        <p>
          We are able to provide international shipping on eligible merchandise
          that totals $5000 or more. Please complete the form below. We will
          reply via email within 2-3 business days. Please note that some items
          are not available for international shipping. These items can include
          oversized items, items with exporting restrictions, and/or items with
          licensing restrictions. If you have questions, please contact us here.
        </p>
        <h2> HOW IT WORKS</h2>

        <div className="requestfooter">
          <div className="mainf1">
            <h1>1</h1>
            <div className="mainf11">
              <p>
                Navigate to this page after you have completed your shopping.
              </p>
              <p>
                Items in your cart will automatically appear in the "Order
                Items" list below.
              </p>
            </div>
          </div>
          <div className="mainf1">
            <h1>2</h1>
            <div className="mainf11">
              <p>
                Navigate to this page after you have completed your shopping.
              </p>
              <p>
                Items in your cart will automatically appear in the "Order
                Items" list below.
              </p>
            </div>
          </div>
          <div className="mainf1">
            <h1>3</h1>
            <div className="mainf11">
              <p>
                Navigate to this page after you have completed your shopping.
              </p>
              <p>
                Items in your cart will automatically appear in the "Order
                Items" list below.
              </p>
            </div>
          </div>
        </div>

        <div className="rqmain">
          <div className="rqrow1">
            <label>Name*</label>
            <input type="text" />
          </div>
          <div className="rqrow1">
            <label>Last Name*</label>
            <input type="text" />
          </div>
        </div>
        <div className="rqmaintext">
          <div className="rqrow1text">
            <h5>Shipping Address</h5>
            <label>ADDRESS1</label>
            <input type="text" />
          </div>
        </div>
        <div className="rqmaintext">
          <div className="rqrow1text">
            <label>ADDRESS2</label>
            <input type="text" />
          </div>
        </div>
        <div className="rqmaintext">
          <div className="rqrow1text">
            <label>ADDRESS3</label>
            <input type="text" />
          </div>
        </div>

        <div className="rqmain">
          <div className="rqrow1">
            <label>CITY*</label>
            <input type="text" />
          </div>
          <div className="rqrow1">
            <label>PROVIENCE</label>
            <input type="text" />
          </div>
        </div>
        <div className="rqmain">
          <div className="rqrow1">
            <label>POSTAL CODE*</label>
            <input type="text" />
          </div>
          <div className="rqrow1">
            <label>COUNTRY</label>
            <input type="text" />
          </div>
        </div>
        <h5>CONTACT INFORMATION</h5>
        <div className="rqmain">
          <div className="rqrow1">
            <label>PHONE NUMBER</label>
            <input type="text" />
          </div>
          <div className="rqrow1">
            <label>EMAIL</label>
            <input type="emaiL" />
          </div>
        </div>

        <div className="rqmain">
          <div className="rqrow1check">
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">
              Yes, I would like to be notified of news and happenings at CB2 via
              this email address.
            </label>
          </div>
        </div>
        <h4>ORDER ITEMS</h4>
        <div className="rqmain">
          <div className="rqrow11">
            <label>SKU</label>
            <input type="text" />
          </div>
          <div className="rqrow12">
            <label>DESCRIPTION</label>
            <input type="text" />
          </div>
          <div className="rqrow13">
            <label>QUANTITY</label>
            <input type="text" />
          </div>
          <div className="rqrow14">
            <label>EXTENDED PRICE</label>
            <input type="text" />
          </div>
        </div>
        <div className="rqmain">
          <div className="rqrow1checks">
            <p>ADD ANOTHER ITEM</p>
            <div>
              <label>Estimated Total</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="row1labels">
          <div className="row1cde">
            <label>COMMENT</label>
            <p>2000 character limit</p>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
          </div>
        </div>

        <div className="rqmain">
          <button className="rowbutton">SUBMIT REQUEST</button>
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
