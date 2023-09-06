// import React from "react";
// import "./style.css"
// function Donation()
// {
//     return (
//     <div className="Dcontainer">
//         <div className="Dheading">Donate For Good!</div>
//             <div class="Dcard">
//                 <div class="Dcard__content">
//                 <form method="POST" action="">
//                     <div className="ipDiv" id="nameIp">
//                         <label for="name">Name</label><br/>
//                         <input type="text" name="name"/>
//                     </div>
//                     <div className="ipDiv">
//                         <label for="locality">Locality</label><br/>
//                         <input type="text" name="locality"/>
//                     </div>
//                     <div className="ipDiv">
//                         <label for="phno">Phone Number</label><br/>
//                         <input type="text" name="phno"/>
//                     </div>
//                     <div className="ipDiv">
//                         <label for="amt">Amount</label><br/>
//                         <input type="number" name="amt"/>
//                     </div>
//                     <span>What do you want us to implant?</span>
//                     <div class="radio-inputs">
                    
//                     <label class="radio">
//                         <input type="radio" name="radio" required/>
//                         <span class="name">Dustbins</span>
//                     </label>
//                     <label class="radio">
//                         <input type="radio" name="radio" required/>
//                         <span class="name">Trees</span>
//                     </label>
//                     </div>
//                     <div className="submitBtn">
//                         <button type="submit" class="btn">Proceed to Pay</button>
//                     </div>
//                 </form>
                
//                 </div>
//             </div>
//     </div>
//     );
// }

// export default Donation;



import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./style.css";

function Donation() {
  const handleToken = (token) => {
    // You can send the token to your server for processing the payment
    console.log(token);
  };

  return (
    <div className="Dcontainer">
      <div className="Dheading">Donate For Good!</div>
      <div className="Dcard">
        <div className="Dcard__content">
          <form method="POST" action="">
            <div className="ipDiv" id="nameIp">
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" name="name" />
            </div>
            <div className="ipDiv">
              <label htmlFor="locality">Locality</label>
              <br />
              <input type="text" name="locality" />
            </div>
            <div className="ipDiv">
              <label htmlFor="phno">Phone Number</label>
              <br />
              <input type="text" name="phno" />
            </div>
            <div className="ipDiv">
              <label htmlFor="amt">Amount</label>
              <br />
              <input type="number" name="amt" />
            </div>
            <span>What do you want us to implant?</span>
            <div className="radio-inputs">
              <label className="radio">
                <input type="radio" name="radio" required />
                <span className="name">Dustbins</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" required />
                <span className="name">Trees</span>
              </label>
            </div>
            <div className="submitBtn">
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51NKIwDSBNl6Ptx1wvzYNsTXtrLi3Ne2crtZDSSTUebN08QZ8NMWRPjtUxj7Yt4kR9bFD52hOvIyjHKx7UXFThEji00VmE0n6at"
                amount={500} // The amount in cents ($5.00)
                currency="USD"
                name="Donate For Good"
                description="Proceed to pay $5 for donation"
                billingAddress
                zipCode
              >
                <button type="submit" className="btn">
                  Proceed to Pay
                </button>
              </StripeCheckout>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donation;
