import { useEffect, React } from "react";

const Exchanges = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  }, []);
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="flex justify-center pt-10">
          <p>REFUND POLICY</p>
        </div>
        <div className="">
          <p>CANCELLATION AND REFUND</p>
          <p>
            UNFORTUNATELY, AS PER STORE POLICY, CANCELLATION AND REFUNDS ARE NOT
            POSSIBLE AGAINST ANY ORDERS.
          </p>
          <p>RETURN AND EXCHANGE PROCEDURE</p>
        </div>
        <div>
          <p>INITIATING AN EXCHANGE:</p>
          <p>
            TO INITIATE AN EXCHANGE, PLEASE VISIT EITHER OF OUR STORES LOCATED
            IN DELHI, MUMBAI AND HYDERABAD OR CONTACT OUR CUSTOMER SERVICE TEAM
            WITH YOUR ORDER ID, SIZE PURCHASED AND SIZE EXCHANGE REQUESTED AT
            EXCHANGES@BLUORNG.COM WITHIN 7 DAYS OF RECEIVING THE ITEM. WE WILL
            WRITE BACK TO YOU WITHIN 24 HOURS.
          </p>
        </div>
        <div>
          <p>QUALITY CHECK:</p>
          <p>
            ALL EXCHANGES WILL UNDERGO A QUALITY CHECK BY OUR TEAM. WE RESERVE
            THE RIGHT TO DECLINE AN EXCHANGE IF:
          </p>
          <li>THE PRODUCT/S ARE RETURNED AFTER USE.</li>
          <li>THE PRODUCTS ARE DAMAGED.</li>
        </div>
        <div>
          <p>SHIPPING THE EXCHANGE:</p>
          <p>
            IF THE EXCHANGE IS CONFIRMED, THE CUSTOMER IS RESPONSIBLE FOR
            SHIPPING THE PRODUCT BACK TO BLUORNG. PLEASE PROVIDE THE TRACKING ID
            TO EXCHANGES@BLUORNG.COM IN THE SAME EMAIL THREAD.
          </p>
        </div>
        <div>
          <p>PROCESSING TIME:</p>
          <p>
            ONCE WE RECEIVE THE RETURNED ITEM, WE WILL PROCESS THE EXCHANGE
            WITHIN 5-7 BUSINESS DAYS.
          </p>
        </div>
        <div>
          <p>DEFECTIVE PRODUCTS:</p>
          <p>
            IF YOU RECEIVE A DEFECTIVE PRODUCT, SHARE ORDER DETAILS AND IMAGES
            AT ORDERSUPPORT@BLUORNG.COM, AND WE WILL RESPOND WITHIN 24 HOURS.
          </p>
        </div>
        <div>
          <p>EXCHANGE LIMITATIONS:</p>
          <li>
            EXCHANGES ARE ALLOWED FOR THE SAME PRODUCT FOR SIZE ONLY ONCE.
          </li>
          <li>
            EXCHANGES ARE SUBJECT TO AVAILABILITY. IF THE DESIRED SIZE IS NOT IN
            STOCK, WE WILL ISSUE A STORE CREDIT.
          </li>
        </div>
        <div>
          <p>STORE CREDIT:</p>
          <p>
            IN CASE OF A RETURN, THE AMOUNT WILL BE CREDITED BACK TO THE
            CUSTOMER IN THE FORM OF STORE CREDIT THAT CAN BE USED FOR YOUR NEXT
            PURCHASE ONLINE OR REDEEMABLE IN-STORES. YOU WILL RECEIVE A UNIQUE
            CODE ON YOUR REGISTERED EMAIL ADDRESS.
          </p>
        </div>
        <div>
          <p>STORE CREDIT VALIDITY:</p>
          <p>THE STORE CREDIT IS VALID FOR ONE MONTH FROM THE DATE OF ISSUE.</p>
        </div>
        <div>
          THE STORE CREDIT IS VALID FOR ONE MONTH FROM THE DATE OF ISSUE.
        </div>
      </div>
    </>
  );
};

export default Exchanges;
