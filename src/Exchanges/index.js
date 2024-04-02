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
      <div className="bg-gray-200 ">
        <div className="flex justify-center pt-10">
          <p>REFUND POLICY</p>
        </div>
        <div className="px-[3rem] text-xs">
          <div>
            <p className="font-bold">CANCELLATION AND REFUND</p>
            <p className="pt-1">
              UNFORTUNATELY, AS PER STORE POLICY, CANCELLATION AND REFUNDS ARE
              NOT POSSIBLE AGAINST ANY ORDERS.
            </p>
            <p className="font-bold pt-5">RETURN AND EXCHANGE PROCEDURE</p>
          </div>
          <div>
            <p>INITIATING AN EXCHANGE:</p>
            <p className="pt-1">
              TO INITIATE AN EXCHANGE, PLEASE VISIT EITHER OF OUR STORES LOCATED
              IN DELHI, MUMBAI AND HYDERABAD OR CONTACT OUR CUSTOMER SERVICE
              TEAM WITH YOUR ORDER ID, SIZE PURCHASED AND SIZE EXCHANGE
              REQUESTED AT{" "}
              <span className="font-bold">EXCHANGES@BLUORNG.COM</span> WITHIN 7
              DAYS OF RECEIVING THE ITEM. WE WILL WRITE BACK TO YOU WITHIN 24
              HOURS.
            </p>
          </div>
          <div>
            <p className="pt-5">QUALITY CHECK:</p>
            <p className="pt-1">
              ALL EXCHANGES WILL UNDERGO A QUALITY CHECK BY OUR TEAM. WE RESERVE
              THE RIGHT TO DECLINE AN EXCHANGE IF:
            </p>
            <li className="pt-1">THE PRODUCT/S ARE RETURNED AFTER USE.</li>
            <li className="pt-1">THE PRODUCTS ARE DAMAGED.</li>
          </div>
          <div>
            <p className="pt-5">SHIPPING THE EXCHANGE:</p>
            <p className="pt-1">
              IF THE EXCHANGE IS CONFIRMED, THE{" "}
              <span className="font-bold">CUSTOMER IS RESPONSIBLE</span> FOR
              SHIPPING THE PRODUCT BACK TO BLUORNG. PLEASE PROVIDE THE TRACKING
              ID TO <span className="font-bold">EXCHANGES@BLUORNG.COM</span> IN
              THE SAME EMAIL THREAD.
            </p>
          </div>
          <div>
            <p className="pt-5">PROCESSING TIME:</p>
            <p className="pt-1">
              ONCE WE RECEIVE THE RETURNED ITEM, WE WILL PROCESS THE EXCHANGE
              WITHIN 5-7 BUSINESS DAYS.
            </p>
          </div>
          <div>
            <p className="pt-5">DEFECTIVE PRODUCTS:</p>
            <p className="pt-1">
              IF YOU RECEIVE A DEFECTIVE PRODUCT, SHARE ORDER DETAILS AND IMAGES
              AT <span className="font-bold">ORDERSUPPORT@BLUORNG.COM</span>,
              AND WE WILL RESPOND WITHIN 24 HOURS.
            </p>
          </div>
          <div>
            <p className="pt-5">EXCHANGE LIMITATIONS:</p>
            <li className="pt-1">
              EXCHANGES ARE ALLOWED FOR THE SAME PRODUCT FOR SIZE ONLY ONCE.
            </li>
            <li className="pt-1">
              EXCHANGES ARE SUBJECT TO AVAILABILITY. IF THE DESIRED SIZE IS NOT
              IN STOCK, WE WILL ISSUE A STORE CREDIT.
            </li>
          </div>
          <div>
            <p className="pt-5">STORE CREDIT:</p>
            <p className="pt-1">
              IN CASE OF A RETURN, THE AMOUNT WILL BE CREDITED BACK TO THE
              CUSTOMER IN THE FORM OF STORE CREDIT THAT CAN BE USED FOR YOUR
              NEXT PURCHASE ONLINE OR REDEEMABLE IN-STORES. YOU WILL RECEIVE A
              UNIQUE CODE ON YOUR REGISTERED EMAIL ADDRESS.
            </p>
          </div>
          <div>
            <p className="pt-5">STORE CREDIT VALIDITY:</p>
            <p className="pt-1">
              THE STORE CREDIT IS VALID FOR ONE MONTH FROM THE DATE OF ISSUE.
            </p>
          </div>
          <div className="pt-5 mb-10">
            THE STORE CREDIT IS VALID FOR ONE MONTH FROM THE DATE OF ISSUE.
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchanges;
