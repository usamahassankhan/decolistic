import React from 'react';
import './Oversized.css';
import emailjs from 'emailjs-com';
import { Data } from './../../../../src/userComponent/SubHeading/data';
const Oversized = (props) => {
    const ans = Data.filter((a) => a.id == props.match.params.id);
    console.log('fine', ans);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_eg6p74k', 'template_ndd927q', e.target, 'user_FYBIHvOwrLaSZY974lmaS')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log('sdad', error.text);
                }
            );
    };

    return (
        <div className='oversized'>
            <form onSubmit={sendEmail}>
                <p>CUSTOMER SERVICE</p>
                <h1>CONTACT US</h1>
                <div className='row1label'>
                    <div className='row1c'>
                        <label>Name*</label>
                        <input name='name' type='text' />
                    </div>
                    <div className='row1c'>
                        <label>Last Name*</label>
                        <input name='lastname' type='text' />
                    </div>
                </div>
                <div className='row1label'>
                    <div className='row1c'>
                        <label>EMAIL</label>
                        <input name='email' type='text' />
                    </div>
                    <div className='row1c'>
                        <label>DAYTIME PHONE</label>
                        <input name='daytimephone' type='text' />
                    </div>
                </div>
                {/* <div className="row1label">
        <div className="row1c">
          <label>EMAIL</label>
          <input name="email" type="text" />
        </div>
        <div className="row1c">
          <label>DAYTIME PHONE</label>
          <input name="daytimephone" type="text" />
        </div>
      </div> */}

                <div className='row1label'>
                    {/* <div className="row1c">
          <label>SUBJECT</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div> */}
                    {/* <div className="row1c">
          <label>OTHER, PLEASE SPECIFY A SUBJECT</label>
          <input type="text" />
        </div> */}
                    <div className='row1c'>
                        <label>OTHER, PLEASE SPECIFY A SUBJECT</label>
                        <input type='text' name='subject1' />
                    </div>
                    <div className='row1c'>
                        <label>ORDER NUMBER IF APPLICABLE</label>
                        <input type='text' value={ans[0].name} name='ordernumber' />
                    </div>
                </div>
                {/* <div className="row1label">
        <div className="row1c">
          <label>ORDER NUMBER IF APPLICABLE</label>
          <input type="text" />
        </div>
      
      </div> */}
                <div className='row1labels'>
                    <div className='row1cd'>
                        <label>COMMENT</label>
                        <p>2000 character limit</p>
                        <textarea id='w3review' name='comment' rows='4' cols='50'></textarea>
                    </div>
                </div>
                {/* <div className='row1label'>
                    <div className='row1c'>
                        <label>File Attachment (image or pdf up to 2.5MB)</label>
                        <input type='file' />
                    </div>
                </div> */}
                <div className='row1label'>
                    <button className='rowbutton'>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default Oversized;
