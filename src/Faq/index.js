import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";

const Faq = () => {
  const [page, setPage] = useState("DELIVERY");
  return (
    <>
      <div className="bg-gray-200 px-[5rem]">
        <div className="flex justify-center pt-10">
          <p>FAQ'S</p>
        </div>
        <div className="grid grid-cols-6 px-[1rem] ">
          <div>
            <button
              onClick={() => setPage("PRODUCT")}
              className={classNames(
                " h-fit  w-44 p-3 items-center",
                page === "PRODUCT"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white"
              )}
            >
              PRODUCT
            </button>
            {page === "PRODUCT" && (
              <div className="pt-10  w-[80rem]">
                {" "}
                <Accordion>
                  <AccordionSummary>
                    <p>WHAT IS MY RIGHT SIZE?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-xs">
                      AS BLUORNG CATERS TO THE OVERSIZED FIT, IF YOU'RE UNSURE
                      ABOUT SIZING, WE RECOMMEND GOING ONE SIZE DOWN FROM YOUR
                      REGULAR SIZE. FOR EXAMPLE, IF YOU NORMALLY WEAR AN M, YOU
                      CAN GO AHEAD WITH AN S WITH US. ONCE COMFORTABLE, YOU CAN
                      ALWAYS UPSIZE IF YOU PREFER A LOOSER LOOK. IT'S WORTH
                      NOTING THAT OUR SIZING CHART IS AVAILABLE ON OUR WEBSITE,
                      WHICH PROVIDES DETAILED MEASUREMENTS FOR EACH SIZE TO HELP
                      YOU CHOOSE THE PERFECT FIT.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHAT ARE THE CARE INSTRUCTIONS ON THE T-SHIRTS?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-xs">
                      MACHINE WASH WORKS FOR ALL OUR TEES. AIR-DRY. AVOID DRY
                      CLEANING. USE COLD WATER TO AVOID COLOUR BLEED &
                      SHRINKAGE. DO NOT IRON THE PRINT DIRECTLY.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW DO OUR NEW DROPS WORK?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-xs">
                      WE USUALLY ANNOUNCE OUR UPCOMING DESIGNS AND COLLECTIONS
                      ON OUR OFFICIAL INSTAGRAM ACCOUNT - @BLUORNG WE RECOMMEND
                      FOLLOWING US ON INSTAGRAM TO STAY UPDATED WITH OUR LATEST
                      RELEASES AND DROPS. ONCE THE DESIGNS ARE ANNOUNCED, THEY
                      ARE AVAILABLE TO PURCHASE ON OUR WEBSITE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHAT IS A PRE-ORDER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-xs">
                      A PRE-ORDER IS THE RESERVATION OF AN ITEM THAT IS
                      AVAILABLE TO PURCHASE BUT WILL BE SHIPPED OUT BASED ON THE
                      MENTIONED DATE. PLEASE MAKE SURE TO READ THE PRODUCT
                      DESCRIPTION ON ORDERS THAT ARE OF PRE-ORDER STATUS.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
            {page === "DELIVERY" && (
              <div className="pt-10 w-[80rem]">
                {" "}
                <Accordion>
                  <AccordionSummary>
                    <p>WHERE DO WE DELIVER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WE SHIP AND DELIVER ALL OUR ORDERS PAN-INDIA AND
                      INTERNATIONALLY IN ALL 192 COUNTRIES.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHERE IS MY ORDER SHIPPED FROM?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      ALL ONLINE ORDERS ARE SHIPPED FROM OUR FULFILMENT CENTRE
                      LOCATED IN NEW DELHI.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHAT ARE THE DELIVERY CHARGES?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      ALL ONLINE ORDERS FROM BLUORNG.COM ARE ELIGIBLE FOR FREE
                      SHIPPING PAN-INDIA. INTERNATIONAL ORDERS HAVE AN
                      ADDITIONAL CHARGE WHICH IS MENTIONED AT THE TIME OF
                      CHECKOUT BASIS THE DELIVERY ADDRESS.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>DO YOU HAVE A STORE PICK UP OPTION?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      KINDLY REACH OUT TO EITHER OF THE STORES ON CALL OR
                      WHATSAPP MENTIONING THAT YOU WOULD LIKE TO HAVE SOMETHING
                      PURCHASED. ONCE BILLING IS CONFIRMED, THE PRODUCT CAN
                      EITHER BE PICKED UP IN PERSON FROM THE STORE OR CAN BE
                      DELIVERED AT THE COST OF THE CUSTOMER BY BOOKING A LOCAL
                      COURIER SERVICE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHEN CAN I EXPECT MY DELIVERY?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WE SHIP ALL ORDERS WITHIN 24 HOURS OF RECEIVING THEM,
                      UNTIL SPECIFIED WITH A DATE OF SHIPPING (IN CASE OF
                      PRE-ORDERS). PLEASE CHECK YOUR SPAM FOLDER IN CASE OUR
                      EMAIL WAS REDIRECTED THERE. KINDLY ALLOW US 2-5 WORKING
                      DAYS FOR YOUR ORDER TO BE DELIVERED. INTERNATIONAL ORDERS
                      TAKE 5-10 WORKING DAYS TO GET DELIVERED.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHICH COURIER DO WE USE?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      MOST OF OUR SHIPMENTS GET FULFILLED BY BLUEDART AIR
                      COURIER SERVICE WHICH IS THE FASTEST DOMESTIC COURIER
                      SERVICE PROVIDER. FOR OTHER PINCODES, OUR SHIPPING
                      AGGREGATOR MAKES SURE TO ASSIGN THE STRONGEST COURIER
                      PARTNER TO SHIP YOUR ORDER AT THE EARLIEST.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW CAN I TRACK MY ORDER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      YOU WILL RECEIVE AN EMAIL FROM US WITH YOUR TRACKING
                      INFORMATION AND ESTIMATED DELIVERY DATE WHICH IS PROVIDED
                      BY OUR SHIPPING AGGREGATION SERVICE. FOR INTERNATIONAL
                      ORDERS, WE USE A LOCAL COURIER SERVICE PROVIDER AND WILL
                      CONTACT YOU PERSONALLY ON THE TRACKING NUMBER FOR THE
                      SAME. ADDITIONALLY, AN ORDER CONFIRMATION MESSAGE IS
                      SHARED WITH YOU ON YOUR REGISTERED WHATSAPP NUMBER.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHY IS MY ORDER NOT SHIPPED AFTER IT IS CONFIRMED?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      DUE TO LOGISTIC ISSUES OUT OF OUR CONTROL, THERE MAY
                      OCCASIONALLY BE A DELAY IN SHIPPING YOUR ORDER. DO NOT
                      WORRY AS WE ARE ONLY LOOKING TO FULFIL ALL ORDERS THAT ARE
                      CONFIRMED.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>
                      WHY IS MY ORDER NOT DELIVERED AFTER THE MENTIONED DATE?
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      DUE TO LOGISTIC ISSUES OUT OF OUR CONTROL, THERE MIGHT BE
                      AN OCCURRENCE OF DELAYED DELIVERY ON THE EXPECTED DATE.
                      FEEL FREE TO CONTACT US AND WE WILL SOLVE THIS AT THE
                      EARLIEST.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>
                      ARE THERE ANY EXTRA CHARGES WHEN I ORDER INTERNATIONALLY?
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WHEN ORDERING GOODS FROM OUR SITE FOR DELIVERY OVERSEAS
                      YOU MAY BE SUBJECT TO ADDITIONAL IMPORT DUTIES AND TAXES,
                      WHICH ARE LEVIED ONCE THE ORDER REACHES THE SPECIFIED
                      DESTINATION.
                    </p>
                    <p>
                      ANY ADDITIONAL CHARGES FOR CUSTOMS CLEARANCE MUST BE BORNE
                      BY YOU. WE HAVE NO CONTROL OVER THESE CHARGES AND CANNOT
                      PREDICT WHAT THEY MAY BE SO WE'D ALWAYS RECOMMEND
                      CONTACTING YOUR LOCAL CUSTOMS FOR MORE INFORMATION BEFORE
                      PLACING AN ORDER. IF THESE CHARGES ARE UNPAID OR YOU
                      REFUSE TO PAY THEM, YOUR ORDER MAY BE RETURNED TO US AND
                      WE WILL BE UNABLE TO REFUND SHIPPING COSTS. THERE MAY ALSO
                      BE COSTS ASSOCIATED WITH THE RETURN TO US, WHICH WILL BE
                      DEDUCTED FROM ANY REFUND VALUE. IN CERTAIN SITUATIONS,
                      YOUR ORDER MAY BE DESTROYED BY CUSTOMS IF DUTIES AND TAXES
                      ARE NOT PAID. IN THIS INSTANCE, WE CANNOT REFUND PRODUCT
                      OR SHIPPING COSTS FOR THESE REASONS.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
            {page === "ORDER" && (
              <div className="pt-10  w-[80rem]">
                <Accordion>
                  <AccordionSummary>
                    <p>HOW DO I CONFIRM MY ORDER STATUS?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      YOUR ORDER WILL BEEN CONFIRMED WITH A 5 DIGIT ORDER NUMBER
                      (EG: #55555). WE SHIP ALL ORDERS WITHIN 24 HOURS OF
                      RECEIVING THEM, AND YOU SHOULD HAVE RECEIVED AN EMAIL FROM
                      US WITH YOUR TRACKING INFORMATION AND ESTIMATED DELIVERY
                      DATE. PLEASE CHECK YOUR SPAM FOLDER IN CASE OUR EMAIL WAS
                      REDIRECTED THERE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>I CANNOT PLACE AN ORDER ONLINE.</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      NO PROBLEM; REACH OUT TO OUR WHATSAPP CHAT AND YOU CAN
                      PLACE AN ORDER OVER THE PHONE INSTANTLY BY MENTIONING THE
                      REQUIRED PRODUCT AND BY FILLING IN ALL THE RIGHT SHIPPING
                      DETAILS.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I CANCEL OR AMEND MY ORDER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      ALL ORDERS ONCE CONFIRMED WITH AN ORDER NUMBER CANNOT BE
                      CANCELLED. WE WILL LOOK TO FULFIL THIS ORDER AT THE
                      EARLIEST. HOWEVER, YOU CAN MODIFY THE ORDER FOR SIZE OR
                      PRODUCT PROVIDED THE ORDER IS IN THE ‘UNFULFILLED’ STATUS.
                      ONCE THE AWB IS PRINTED FOR AN ORDER, THE CHANGES CANNOT
                      BE MODIFIED. TO DO SO, SIMPLY DROP AN EMAIL TO
                      ORDERSUPPORT@BLUORNG.COM IMMEDIATELY WITH YOUR ORDER
                      NUMBER AND THE CHANGES TO BE MADE AND THE TEAM WILL
                      HAPPILY ASSIST YOU.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I CHANGE MY DELIVERY ADDRESS?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      AMENDMENTS IN DELIVERY ADDRESS CAN BE MODIFIED PROVIDED
                      THE ORDER IS IN THE “UNFULFILLED” STATUS. ONCE THE AWB IS
                      PRINTED FOR AN ORDER, THE CHANGES CANNOT BE MODIFIED. TO
                      DO SO, SIMPLY DROP AN EMAIL TO ORDERSUPPORT@BLUORNG.COM
                      IMMEDIATELY WITH YOUR ORDER NUMBER AND THE CHANGES TO BE
                      MADE AND THE TEAM WILL HAPPILY ASSIST YOU.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW DO I APPLY MY STORE CREDIT?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      IN THE CASE OF A STORE CREDIT, SIMPLY USE THE CODE
                      PROVIDED TO YOU ON EMAIL AT THE END OF THE CHECKOUT
                      PROCESS. STORE CREDIT CAN BE USED FOR PURCHASES MADE
                      ONLINE AND IN-STORE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHY ISN'T MY STORE CREDIT WORKING?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      PLEASE NOTE THAT THERE IS A VALIDITY OF 1 MONTHS FROM THE
                      DATE OF ISSUE ON ANY STORE CREDITS SENT OUT. MAKE SURE TO
                      HAVE THIS UTILISED IN THIS PERIOD AS YOUR STORE CREDIT
                      WILL EXPIRE POST THE TIMELINE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW CAN I PAY FOR MY ORDER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      IN-STORE PURCHASES: CAN BE DONE THROUGH THE FOLLOWING
                      PAYMENT METHODS: CASH, CARD, AMEX AND UPI.
                    </p>
                    <p>
                      ONLINE PURCHASES: CAN BE DONE THROUGH THE FOLLOWING
                      PAYMENT METHODS: CARD, AMEX AND UPI. PLEASE NOTE THAT WE
                      DO NOT ACCEPT COD FOR ONLINE PURCHASES.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>
                      THE PRODUCT I WANT TO ORDER IS OUT OF STOCK. WHEN WILL IT
                      BE AVAILABLE?
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      AT OUR BRAND, WE STRIVE TO PROVIDE OUR CUSTOMERS WITH
                      EXCLUSIVE AND UNIQUE DESIGNS THAT STAND OUT FROM THE REST.
                      AS SUCH, WE DO NOT RESTOCK DESIGNS OR SIZES ONCE THEY ARE
                      SOLD OUT. THIS ENSURES THAT OUR CUSTOMERS CAN ENJOY THE
                      EXCLUSIVITY OF OUR BRAND AND LOOK FORWARD TO OUR NEXT
                      DROP.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>I WON’T BE HOME TO ACCEPT MY ORDER. WHAT SHOULD I DO?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WE WOULD ADVISE HAVING YOUR ORDER DELIVERED TO AN ADDRESS
                      WITH SOMEONE THERE TO ACCEPT IT. IF THERE IS NO ONE AT THE
                      ADDRESS TO ACCEPT THE ORDER, OUR COURIERS WILL RE-ATTEMPT
                      THE DELIVERY 2 MORE TIMES UNTIL THE ORDER IS RETURNED TO
                      ORIGIN (RTO). TO AVOID AN RTO, PLEASE MAKE SURE TO INFORM
                      US ABOUT THE SAME ON ORDERSUPPORT@BLUORNG.COM SO THAT WE
                      CAN HOLD OUR SHIPMENT UNTIL YOU ARE AVAILABLE AT THE
                      LOCATION.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
            {page === "ORDER RECEIVED" && (
              <div className="pt-10 w-[80rem]">
                <Accordion>
                  <AccordionSummary>
                    <p>
                      I HAVE RECEIVED A FAULTY/DAMAGED PRODUCT. WHAT DO I DO?
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      KINDLY DROP IN AN EMAIL TO ORDERSUPPORT@BLUORNG.COM WITH
                      THE ORDER NUMBER AS WELL AS PICTURES OF PROOF ON THE
                      DEFECTS. ONCE CONFIRMED, OUR TEAM WILL SHOOT AN EMAIL BACK
                      TO YOU MENTIONING THAT YOUR PRODUCT WILL BE RECALLED TO
                      THE WAREHOUSE AND WILL SHIP A FRESH PIECE BACK TO YOU.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>MY ORDER HAS AN INCORRECT/MISSING ITEM. WHAT DO I DO?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      KINDLY DROP IN AN EMAIL TO ORDERSUPPORT@BLUORNG.COM WITH
                      THE ORDER NUMBER AS WELL AS PICTURES OF PROOF ON THE
                      DEFECTS. ONCE CONFIRMED, OUR TEAM WILL SHOOT AN EMAIL BACK
                      TO YOU MENTIONING THAT YOUR PRODUCT WILL BE RECALLED TO
                      THE WAREHOUSE AND WILL SHIP A FRESH PIECE BACK TO YOU.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
            {page === "EXCHANGES" && (
              <div className="pt-10 w-[80rem]">
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I EXCHANGE AN ITEM?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WE HAVE AN EXCHANGE POLICY OF 7 DAYS FROM THE DATE OF
                      RECEIVING THE PRODUCT FOR ONLINE ORDERS AND DATE OF
                      BILLING FOR STORE PURCHASES. TO INITIATE AN EXCHANGE,
                      PLEASE WRITE TO EXCHANGES@BLUORNG.COM WITHIN 7 DAYS OF
                      RECEIVING THE ITEM.
                    </p>
                    <p>
                      CATERING TO THE HYGIENE STANDARDS FOR OUR PRODUCTS; ALL
                      THE EXCHANGES RECEIVED WILL GO THROUGH A QUALITY CHECK BY
                      OUR TEAM AND WOULD BE FURTHER APPROVED/DECLINED FOR
                      EXCHANGE. WE RESERVE THE RIGHT TO NOT ACCEPT A RETURN IF;
                    </p>
                    <li>THE PRODUCT/S ARE RETURNED AFTER USE.</li>
                    <li>THE PRODUCTS ARE DAMAGED.</li>
                    <li>THE PRODUCTS DO NOT HAVE ALL THE TAGS.</li>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW DO I INITIATE AN EXCHANGE?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      OUR CUSTOMER SUPPORT TEAM WILL REACH OUT TO YOU WITHIN 24
                      HOURS AND WILL INFORM YOU TO SHIP YOUR ORDER BACK TO OUR
                      FULFILMENT CENTRE.
                    </p>
                    <li>
                      THE ORDER HAS TO BE SHIPPED BY THE CUSTOMER WITH THE
                      TRACKING ID SENT TO US ON THE SAME EMAIL THREAD.
                    </li>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>DO I HAVE TO SHIP THE ORDER MYSELF?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      THE ORDER HAS TO BE SHIPPED BY THE CUSTOMER WITH THE
                      TRACKING ID SENT TO US ON THE SAME EMAIL THREAD WHERE YOU
                      HAVE REQUESTED FOR AN EXCHANGE.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>HOW LONG DOES IT TAKE FOR THE EXCHANGE TO TAKE PLACE?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <li>
                      ONCE WE RECEIVE THE RETURNED ITEM, YOU WILL BE INFORMED
                      WITH A CONFIRMATION THAT WE WILL PROCESS THE EXCHANGE
                      WITHIN 7-10 BUSINESS DAYS
                    </li>
                    <li>
                      YOU CAN ALSO WALK INTO EITHER OF OUR STORES LOCATED IN NEW
                      DELHI, MUMBAI AND HYDERABAD WITHIN 7 DAYS OF PURCHASE TO
                      INITIATE AN EXCHANGE.
                    </li>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I RETURN THE PRODUCT FOR A REFUND?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      WE DO NOT HAVE A RETURN POLICY DUE TO THE LIMITED
                      QUANTITIES WE PRODUCE. HENCE, ALL ORDERS ARE FINAL AND WE
                      DO NOT PROVIDE ANY REFUNDS. FOR MORE INFO, PLEASE DROP US
                      AN EMAIL AT ORDERSUPPORT@BLUORNG.COM AND THE TEAM WILL BE
                      HAPPY TO ASSIST YOU.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
            {page === "GENERAL FAQS" && (
              <div className="pt-10 w-[80rem]">
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I GET A GST RECEIPT FOR MY ORDER?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      YES, SIMPLY DROP IN AN EMAIL TO{" "}
                      <span className="text-blue-700">
                        {" "}
                        ORDERSUPPORT@BLUORNG.COM
                      </span>{" "}
                      AND THE TEAM WILL FACILITATE A GST INVOICE AGAINST YOUR
                      ORDER.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>CAN I GET A CUSTOM MADE DESIGN FOR MYSELF?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      FOR CUSTOM ORDERS, KINDLY DROP US AN EMAIL TO{" "}
                      <span className="text-blue-700">CONTACT@BLUORNG.COM</span>{" "}
                      AND THE TEAM WILL REACH OUT TO YOU SHORTLY.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHERE ARE YOU LOCATED?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      THE DELHI STORE IS IN GK2 M-BLOCK MARKET (ABOVE
                      THEOBROMA). THE DELHI STORE IS IN M-81, GK2 M-BLOCK
                      MARKET. THE DELHI STORE NUMBER IS +919599191998. OPEN FROM
                      11.30 AM TO 9 PM, ALL 7 DAYS.
                    </p>
                    <p>
                      THE MUMBAI STORE IS ON 14TH ROAD IN KHAR WEST. THE MUMBAI
                      STORE NUMBER IS +919599199537. OPEN FROM 11.30 AM TO 8.30
                      PM, ALL 7 DAYS.
                    </p>
                    <p>
                      THE HYDERABAD STORE IS IN 101, VIMBRI BOULEVARD, STREET
                      NO. 4, GREEN VALLEY, BANJARA HILLS, HYDERABAD, TELANGANA
                      500034 . THE HYDERABAD STORE NUMBER IS +919599199537. OPEN
                      FROM 11.30 AM TO 8.30 PM, ALL 7 DAYS.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>MY TRANSACTION HAS FAILED. WHAT DO I DO?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      IF YOU HAVE RECEIVED AN ORDER CONFIRMATION EMAIL AND A
                      FOLLOW-UP EMAIL MENTIONING THAT YOUR TRANSACTION HAS
                      FAILED, DO NOT WORRY. YOUR ORDER WILL BE SHIPPED AS THIS
                      WOULD BE A GLITCH WITH OUR PAYMENTS AGGREGATOR. ONCE AN
                      ORDER NUMBER HAS BEEN GENERATED, YOUR ORDER WILL BE
                      SHIPPED AND DELIVERED AS PER OUR POLICY.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <p>WHAT ARE THE CONTACT CHANNELS?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      ORDER RELATED -{" "}
                      <span className="text-blue-700">
                        ORDERSUPPORT@BLUORNG.COM
                      </span>
                    </p>
                    <p>
                      EXCHANGES -{" "}
                      <span className="text-blue-700">
                        {" "}
                        EXCHANGES@BLUORNG.COM
                      </span>
                    </p>
                    <p>
                      CONTACT -{" "}
                      <span className="text-blue-700">CONTACT@BLUORNG.COM</span>{" "}
                    </p>
                    <p>
                      CUSTOMER RELATIONS -{" "}
                      <span className="text-blue-700">+91 844 844 1388</span>{" "}
                    </p>
                    <p>
                      DELHI STORE -{" "}
                      <span className="text-blue-700"> +91 95991 91998</span>
                    </p>
                    <p>
                      MUMBAI STORE -{" "}
                      <span className="text-blue-700">+91 95991 99537</span>{" "}
                    </p>
                    <p>
                      HYDERABAD STORE -{" "}
                      <span className="text-blue-700"> +91 95991 98004</span>
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setPage("DELIVERY")}
              className={classNames(
                "h-fit w-44 p-3 items-center",
                page === "DELIVERY"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white"
              )}
            >
              DELIVERY
            </button>
          </div>
          <div>
            <button
              className={classNames(
                " h-fit  w-44 p-3 items-center",
                page === "ORDER"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white"
              )}
              onClick={() => setPage("ORDER")}
            >
              ORDER
            </button>
          </div>
          <div>
            <button
              className={classNames(
                " h-fit w-44 p-3 items-center",
                page === "ORDER RECEIVED"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white"
              )}
              onClick={() => setPage("ORDER RECEIVED")}
            >
              ORDER RECEIVED
            </button>
          </div>
          <div>
            <button
              className={classNames(
                " h-fit  w-44 p-3 items-center",
                page === "EXCHANGES"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white "
              )}
              onClick={() => setPage("EXCHANGES")}
            >
              EXCHANGES
            </button>
          </div>
          <div>
            <button
              className={classNames(
                " h-fit  w-44 p-3 items-center",
                page === "GENERAL FAQS"
                  ? "bg-gray-200 border border-black p-2"
                  : "bg-black text-white"
              )}
              onClick={() => setPage("GENERAL FAQS")}
            >
              GENERAL FAQS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
