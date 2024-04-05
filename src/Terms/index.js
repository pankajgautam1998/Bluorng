import { React, useEffect } from "react";

const Terms = () => {
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
          PRIVACY POLICY
        </p>
        <div className="text-xs lg:pt-20 pt-10">
          <p className="pt-1">
            THIS PRIVACY POLICY DESCRIBES HOW BLUORNG.COM (THE “SITE”) COLLECTS,
            USES, AND DISCLOSES YOUR PERSONAL INFORMATION WHEN YOU VISIT OR MAKE
            A PURCHASE FROM THE SITE.
          </p>

          <div>
            <p className="pt-5 font-bold">COLLECTING PERSONAL INFORMATION</p>
            <p className="pt-1">
              WHEN YOU VISIT THE SITE, WE COLLECT CERTAIN INFORMATION ABOUT YOUR
              DEVICE, YOUR INTERACTION WITH THE SITE, AND INFORMATION NECESSARY
              TO PROCESS YOUR PURCHASES. WE MAY ALSO COLLECT ADDITIONAL
              INFORMATION IF YOU CONTACT US FOR CUSTOMER SUPPORT. IN THIS
              PRIVACY POLICY, WE REFER TO ANY INFORMATION THAT CAN UNIQUELY
              IDENTIFY AN INDIVIDUAL (INCLUDING THE INFORMATION BELOW) AS
              “PERSONAL INFORMATION”. SEE THE LIST BELOW FOR MORE INFORMATION
              ABOUT WHAT PERSONAL INFORMATION WE COLLECT AND WHY.
            </p>
          </div>
          <p className="pt-5 underline font-bold">DEVICE INFORMATION</p>
          <div className="pt-2">
            <p className="pt-1">
              <li>
                <span className="font-bold">
                  EXAMPLES OF PERSONAL INFORMATION COLLECTED:
                </span>
                <span>
                  VERSION OF WEB BROWSER, IP ADDRESS, TIME ZONE, COOKIE
                  INFORMATION, WHAT SITES OR PRODUCTS YOU VIEW, SEARCH TERMS,
                  AND HOW YOU INTERACT WITH THE SITE.
                </span>
              </li>
            </p>

            <p className="pt-1">
              <li>
                <span className="font-bold">PURPOSE OF COLLECTION: </span>
                <span>
                  TO LOAD THE SITE ACCURATELY FOR YOU, AND TO PERFORM ANALYTICS
                  ON SITE USAGE TO OPTIMISE OUR SITE.
                </span>
              </li>
            </p>
            <p className="pt-1">
              <li>
                <span className="font-bold">SOURCE OF COLLECTION:</span>
                <span>
                  COLLECTED AUTOMATICALLY WHEN YOU ACCESS OUR SITE USING
                  COOKIES, LOG FILES, WEB BEACONS, TAGS, OR PIXELS.
                </span>
              </li>
            </p>
            <p className="pt-1">
              <li>
                <span className="font-bold">
                  DISCLOSURE FOR A BUSINESS PURPOSE:
                </span>
                <span>SHARED WITH OUR PROCESSOR SHOPIFY</span>
              </li>
            </p>
          </div>
        </div>
        <p className="pt-5 underline font-bold">ORDER INFORMATION</p>
        <div className="pt-2">
          <p className="pt-1">
            <li>
              <span className="font-bold">
                EXAMPLES OF PERSONAL INFORMATION COLLECTED:
              </span>
              <span>
                NAME, BILLING ADDRESS, SHIPPING ADDRESS, PAYMENT INFORMATION
                (INCLUDING CREDIT CARD NUMBERS), EMAIL ADDRESS, AND PHONE
                NUMBER.
              </span>
            </li>
          </p>

          <p className="pt-1">
            <li>
              <span className="font-bold">PURPOSE OF COLLECTION: </span>
              <span>
                TO PROVIDE PRODUCTS OR SERVICES TO YOU TO FULFILL OUR CONTRACT,
                TO PROCESS YOUR PAYMENT INFORMATION, ARRANGE FOR SHIPPING, AND
                PROVIDE YOU WITH INVOICES AND/OR ORDER CONFIRMATIONS,
                COMMUNICATE WITH YOU, SCREEN OUR ORDERS FOR POTENTIAL RISK OR
                FRAUD, AND WHEN IN LINE WITH THE PREFERENCES YOU HAVE SHARED
                WITH US, PROVIDE YOU WITH INFORMATION OR ADVERTISING RELATING TO
                OUR PRODUCTS OR SERVICES.
              </span>
            </li>
          </p>
          <p className="pt-1">
            <li>
              <span className="font-bold">SOURCE OF COLLECTION:</span>
              <span>COLLECTED FROM YOU.</span>
            </li>
          </p>
          <p className="pt-1">
            <li>
              <span className="font-bold">
                DISCLOSURE FOR A BUSINESS PURPOSE:
              </span>
              <span>SHARED WITH OUR PROCESSOR SHOPIFY, RAZORPAY, PICKRR.</span>
            </li>
          </p>
        </div>

        <p className="pt-5 underline font-bold">CUSTOMER SUPPORT INFORMATION</p>
        <div className="pt-2">
          <p className="pt-1">
            <li>
              <span className="font-bold">
                EXAMPLES OF PERSONAL INFORMATION COLLECTED:
              </span>
              <span>
                NAME, BILLING ADDRESS, SHIPPING ADDRESS, PAYMENT INFORMATION
                (INCLUDING CREDIT CARD NUMBERS), EMAIL ADDRESS, AND PHONE
                NUMBER.
              </span>
            </li>
          </p>

          <p className="pt-1">
            <li>
              <span className="font-bold">PURPOSE OF COLLECTION:</span>
              <span>TO PROVIDE CUSTOMER SUPPORT.</span>
            </li>
          </p>
          <p className="pt-1">
            <li>
              <span className="font-bold">SOURCE OF COLLECTION:</span>
              <span>COLLECTED FROM YOU.</span>
            </li>
          </p>
          <p className="pt-1">
            <li>
              <span className="font-bold">
                DISCLOSURE FOR A BUSINESS PURPOSE:
              </span>
              <span>SHARED WITH OUR PROCESSOR SHOPIFY</span>
            </li>
          </p>
        </div>

        <div className="pt-5">
          <p>SHARING PERSONAL INFORMATION</p>
          <p>
            WE SHARE YOUR PERSONAL INFORMATION WITH SERVICE PROVIDERS TO HELP US
            PROVIDE OUR SERVICES AND FULFILL OUR CONTRACTS WITH YOU, AS
            DESCRIBED ABOVE. FOR EXAMPLE:
          </p>
          <li>
            WE USE SHOPIFY TO POWER OUR ONLINE STORE. YOU CAN READ MORE ABOUT
            HOW SHOPIFY USES YOUR PERSONAL INFORMATION HERE:
            HTTPS://WWW.SHOPIFY.COM/LEGAL/PRIVACY.
          </li>
          <li>
            WE MAY SHARE YOUR PERSONAL INFORMATION TO COMPLY WITH APPLICABLE
            LAWS AND REGULATIONS, TO RESPOND TO A SUBPOENA, SEARCH WARRANT OR
            OTHER LAWFUL REQUEST FOR INFORMATION WE RECEIVE, OR TO OTHERWISE
            PROTECT OUR RIGHTS.
          </li>
          <li>[INSERT INFORMATION ABOUT OTHER SERVICE PROVIDERS]</li>
        </div>

        <div className="pt-5">
          <p className="font-bold">BEHAVIOURAL ADVERTISING</p>
          <p>
            AS DESCRIBED ABOVE, WE USE YOUR PERSONAL INFORMATION TO PROVIDE YOU
            WITH TARGETED ADVERTISEMENTS OR MARKETING COMMUNICATIONS WE BELIEVE
            MAY BE OF INTEREST TO YOU. FOR EXAMPLE:
          </p>
          <li>
            WE USE GOOGLE ANALYTICS TO HELP US UNDERSTAND HOW OUR CUSTOMERS USE
            THE SITE. YOU CAN READ MORE ABOUT HOW GOOGLE USES YOUR PERSONAL
            INFORMATION HERE: HTTPS://POLICIES.GOOGLE.COM/PRIVACY?HL=EN.YOU CAN
            ALSO OPT-OUT OF GOOGLE ANALYTICS HERE:
            HTTPS://TOOLS.GOOGLE.COM/DLPAGE/GAOPTOUT.
          </li>
          <li>
            WE SHARE INFORMATION ABOUT YOUR USE OF THE SITE, YOUR PURCHASES, AND
            YOUR INTERACTION WITH OUR ADS ON OTHER WEBSITES WITH OUR ADVERTISING
            PARTNERS. WE COLLECT AND SHARE SOME OF THIS INFORMATION DIRECTLY
            WITH OUR ADVERTISING PARTNERS, AND IN SOME CASES THROUGH THE USE OF
            COOKIES OR OTHER SIMILAR TECHNOLOGIES (WHICH YOU MAY CONSENT TO,
            DEPENDING ON YOUR LOCATION).
          </li>
          <p>
            FOR MORE INFORMATION ABOUT HOW TARGETED ADVERTISING WORKS, YOU CAN
            VISIT THE NETWORK ADVERTISING INITIATIVE’S (“NAI”) EDUCATIONAL PAGE
            AT{" "}
            <span className="font-bold">
              {" "}
              HTTP://WWW.NETWORKADVERTISING.ORG/UNDERSTANDING-ONLINE-ADVERTISING/HOW-DOES-IT-WORK
            </span>
          </p>
          <p>YOU CAN OPT OUT OF TARGETED ADVERTISING BY:</p>
          <li>FACEBOOK - HTTPS://WWW.FACEBOOK.COM/SETTINGS/?TAB=ADS</li>
          <li>GOOGLE - HTTPS://WWW.GOOGLE.COM/SETTINGS/ADS/ANONYMOUS</li>
          <p>
            ADDITIONALLY, YOU CAN OPT OUT OF SOME OF THESE SERVICES BY VISITING
            THE DIGITAL ADVERTISING ALLIANCE’S OPT-OUT PORTAL AT:
            HTTP://OPTOUT.ABOUTADS.INFO/.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">USING PERSONAL INFORMATION</p>
          <p>
            WE USE YOUR PERSONAL INFORMATION TO PROVIDE OUR SERVICES TO YOU,
            WHICH INCLUDES: OFFERING PRODUCTS FOR SALE, PROCESSING PAYMENTS,
            SHIPPING AND FULFILMENT OF YOUR ORDER, AND KEEPING YOU UP TO DATE ON
            NEW PRODUCTS, SERVICES, AND OFFERS.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">DO NOT TRACK</p>
          <p>
            PLEASE NOTE THAT BECAUSE THERE IS NO CONSISTENT INDUSTRY
            UNDERSTANDING OF HOW TO RESPOND TO “DO NOT TRACK” SIGNALS, WE DO NOT
            ALTER OUR DATA COLLECTION AND USAGE PRACTICES WHEN WE DETECT SUCH A
            SIGNAL FROM YOUR BROWSER.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">CHANGES</p>
          <p>
            WE MAY UPDATE THIS PRIVACY POLICY FROM TIME TO TIME IN ORDER TO
            REFLECT, FOR EXAMPLE, CHANGES TO OUR PRACTICES OR FOR OTHER
            OPERATIONAL, LEGAL, OR REGULATORY REASONS.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">CONTACT</p>
          <p>
            FOR MORE INFORMATION ABOUT OUR PRIVACY PRACTICES, IF YOU HAVE
            QUESTIONS, OR IF YOU WOULD LIKE TO MAKE A COMPLAINT, PLEASE CONTACT
            US BY E-MAIL AT CONTACT@BLUORNG.COM OR BY MAIL USING THE DETAILS
            PROVIDED.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
