import React, { useEffect } from "react";

const Shipping = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="flex flex-col lg:px-[5rem] max-lg:px-[1rem] bg-gray-200 pb-10 text-xs">
        <p className="flex justify-center lg:pt-10 max-lg:pt-[10rem] text-gray-500 font-bold">
          SHIPPING POLICY
        </p>
        <div className="text-xs pt-10">
          <p className="font-bold">ORDER PROCESSING:</p>
          <p className="pt-1">
            PLEASE ALLOW 24 HOURS FOR ORDER PROCESSING, PENDING PRODUCT
            AVAILABILITY AND PAYMENT VERIFICATION. ONCE AN ORDER HAS BEEN
            PLACED, IT CANNOT BE MODIFIED OR CANCELLED. PLEASE CONFIRM THAT ALL
            ORDER DETAILS ARE CORRECT BEFORE COMPLETING THE CHECKOUT PROCESS.
            BLUORNG DOES NOT SHIP ON WEEKENDS OR MAJOR HOLIDAYS. ALL ORDERS SHIP
            FROM NEW DELHI, INDIA.
          </p>

          <p className="pt-5">
            YOU WILL RECEIVE AN AUTOMATIC CONFIRMATION EMAIL ONCE YOUR ORDER HAS
            BEEN PLACED. IF YOU DO NOT SEE THE ORDER CONFIRMATION WITHIN A FEW
            MINUTES OF ORDERING, PLEASE CHECK YOUR SPAM EMAIL FOLDER.
          </p>
          <p className="pt-5">
            DUE TO HIGH DEMAND, ITEMS MAY BECOME UNAVAILABLE EVEN AFTER AN ORDER
            HAS BEEN PLACED. IN THIS CASE, A REFUND WILL BE ISSUED TO THE
            ORIGINAL PAYMENT METHOD OR BY CHECK MAILED TO THE ADDRESS LISTED FOR
            THE ORDER FOR THE AMOUNT INITIALLY PAID. FOR REFUNDS ISSUED TO THE
            ORIGINAL PAYMENT METHOD, PLEASE ALLOW 5-10 BUSINESS DAYS FOR THE
            REFUND TO APPEAR ON YOUR BANK STATEMENT.
          </p>
          <p className="pt-5">
            ALL ORDERS ARE REVIEWED BY OUR SECURITY TEAM AND CAN BE CANCELLED BY
            BLUORNG AT ANY TIME.
          </p>
          <p className="pt-5">
            ONCE YOUR ORDER HAS BEEN PROCESSED BY OUR FULFILLMENTS TEAM, YOU
            WILL RECEIVE A SHIPPING CONFIRMATION EMAIL WITH TRACKING INFORMATION
            ENCLOSED.
          </p>
          <p className="pt-5">
            ORDERS MAY EXPERIENCE SHIPPING DELAYS DURING SPECIAL RELEASES, MAJOR
            HOLIDAYS, AND MARKDOWN PERIODS.
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">PRE-ORDER POLICY:</p>
          <p>
            ITEMS THAT ARE MARKED AS PRE-ORDER ARE EXPECTED TO SHIP UPON ARRIVAL
            TO OUR FACILITY. ALL CUSTOMERS ARE CHARGED AT CHECKOUT FOR PRE-ORDER
            ITEMS TO THE PAYMENT METHOD PROVIDED. ONCE YOUR ORDER HAS BEEN
            PLACED, WE ARE UNABLE TO CANCEL OR MODIFY. SHOULD YOU HAVE ANY
            QUESTIONS PLEASE CONTACT OUR TEAM AT ORDERSUPPORT@BLUORNG.COM
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">SHIPPING METHODS:</p>
          <p className="pt-1">
            FOR ORDERS WITHIN INDIA, BLUORNG OFFERS COMPLIMENTARY 3-5 DAY
            STANDARD SHIPPING.
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">INTERNATIONAL SHIPPING:</p>
          <p className="pt-1">
            BLUORNG OFFERS WORLDWIDE SHIPPING. DELIVERY DUTIES AND FEES ARE
            DEPENDENT ON SHIPPING LOCATION. REACH OUT TO
            ORDERSUPPORT@BLUORNG.COM WITH ANY QUESTIONS ABOUT INTERNATIONAL
            SHIPPING ABILITIES.
          </p>
          <p className="pt-5 ">
            ALL INTERNATIONAL ORDERS WILL BE SHIPPED VIA DHL
            EXPRESS/UPS/COURIERVIA. SHIPPING TIMES ARE NOT GUARANTEED AND DO NOT
            ACCOUNT FOR THE 24 HOUR ORDER PROCESSING WINDOW.
          </p>
          <p className="pt-5 ">
            PLEASE CONTACT YOUR LOCAL CUSTOMS OFFICE FOR ASSISTANCE WITH
            ESTIMATING ADDITIONAL COSTS AND OR PROCEED TO OUR CHECKOUT PAGE FOR
            CALCULATION.
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">CUSTOMER SERVICE HOURS:</p>
          <p className="pt-1">
            MONDAY – SATURDAY | 11:30 AM – 7:00 PM IST | +91 844 844 1388
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">
            PLEASE NOTE THAT BLUORNG OBSERVES THE FOLLOWING HOLIDAYS:
          </p>
          <li>DIWALI</li>
          <li>NEW YEAR’S DAY</li>
          <li>INDEPENDENCE DAY</li>
          <li>CHRISTMAS EVE</li>
          <li>CHRISTMAS</li>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">LOST PACKAGES:</p>
          <p className="pt-1">
            PLEASE NOTE THAT ONCE PROOF OF DELIVERY IS ATTACHED TO A TRACKING
            NUMBER, BLUORNG IS NOT RESPONSIBLE FOR LOST, DAMAGED, OR STOLEN
            ITEMS. ALL RISKS ARE ASSUMED BY THE COURIER.
          </p>
          <p className="pt-5 ">
            IF YOU HAVE ANY ADDITIONAL QUESTIONS OR REQUIRE FURTHER ASSISTANCE,
            PLEASE CONTACT ORDERSUPPORT@BLUORNG.COM.
          </p>
        </div>
        <div className="pt-5 ">
          <p className="font-bold">FINAL SALE ITEMS:</p>
          <p className="pt-1">
            DURING ANY SALE/PROMOTION PERIOD, ALL SALES ARE FINAL. BLUORNG
            RESERVES THE RIGHT TO EXTEND, MODIFY, OR DISCONTINUE MARKDOWNS AT
            ANY TIME WITHOUT NOTICE. NO ADJUSTMENTS WILL BE MADE FOR YOUR
            PURCHASES IF BLUORNG LOWERS THE PRICE OF AN ITEM YOU HAVE ALREADY
            PURCHASED.
          </p>
        </div>
      </div>
    </>
  );
};

export default Shipping;
