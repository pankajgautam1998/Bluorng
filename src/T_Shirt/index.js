import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TShirt = () => {
  const [page, setPage] = useState();
  const navigate = useNavigate();

  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/0-kn.jpg?v=1710771167&width=360",
      title: "BURGUNDY INK T-SHIRT",

      price: "RS. 3,995",
    },
    {
      id: 2,
      image:
        "https://bluorng.com/cdn/shop/files/injn.jpg?v=1710770975&width=360",
      title: "BLU INK T-SHIRT  ",

      price: "RS. 3,995",
    },
    {
      id: 3,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-9747.jpg?v=1709571893&width=360",
      title: "BLIND DROP 7.2  ",

      price: "RS. 4,495 ",
    },
    {
      id: 4,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960349.jpg?v=1710257088&width=360",
      title: "DUTCH BLU GARLAND T-SHIRT  ",

      price: "RS. 4,495   ",
    },
    {
      id: 5,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960319.jpg?v=1707820698&width=360",
      sold: "SOLD OUT",
      title: "FIRE SHENRON T-SHIRT   ",

      price: "RS. 4,995",
    },
    {
      id: 6,
      image:
        "https://bluorng.com/cdn/shop/files/fvvvv.jpg?v=1708941504&width=360",
      title: "GREEN DRAGONFLY T-SHIRT",

      price: "RS. 4,495      ",
    },
    {
      id: 7,
      image:
        "https://bluorng.com/cdn/shop/files/utrnf.jpg?v=1709005578&width=360",
      sold: "SOLD OUT",
      title: "BLU RACING T-SHIRT      ",

      price: "RS. 3,995",
    },
    {
      id: 8,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960318.jpg?v=1707839737&width=360",
      title: "BLACK RACING T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 9,
      image:
        "https://bluorng.com/cdn/shop/files/0-_n.jpg?v=1708246058&width=360",
      title: "WHITE GARLAND T-SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 10,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960333.jpg?v=1707898139&width=360",
      title: "BLACK AFFECTION T-SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 11,
      image:
        "https://bluorng.com/cdn/shop/files/jewru.jpg?v=1708150749&width=360",
      sold: "SOLD OUT",
      title: "DARK SHENRON T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 12,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960338.jpg?v=1707898102&width=360",
      title: "RED AFFECTION T-SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 13,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960341.jpg?v=1709818184&width=360",
      title: "BLIND DROP 7      ",

      price: "RS. 4,495      ",
    },
    {
      id: 14,
      image: "https://bluorng.com/cdn/shop/files/2.jpg?v=1708315985&width=360",
      sold: "SOLD OUT",
      title: "LILAC SNAKE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 15,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576037.jpg?v=1707823320&width=360",
      title: "PINK SNAKE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 16,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576022.jpg?v=1707823747&width=360",
      title: "MUSTARD SHIZEN T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 17,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576016.jpg?v=1707823770&width=360",
      sold: "SOLD OUT",
      title: "OFF WHITE SHIZEN T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 18,
      image:
        "https://bluorng.com/cdn/shop/files/ioio78.jpg?v=1703311292&width=360",
      title: "GLACIER GREY FULL SLEEVE T- SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 19,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6203.jpg?v=1703478075&width=360",
      title: "BLACK WASH FULL SLEEVE T- SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 20,
      image:
        "https://bluorng.com/cdn/shop/files/F2358F29-71DB-4DDB-B433-33F6A741038E.jpg?v=1703478260&width=360",
      sold: "SOLD OUT",
      title: "MARS RED FULL SLEEVE T- SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 21,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0466227.jpg?v=1702283124&width=360",
      title: "NAVY CRANE T-SHIRT      ",

      price: "RS. 5,495      ",
    },
    {
      id: 22,
      image:
        "https://bluorng.com/cdn/shop/files/DSC057606.jpg?v=1701417176&width=360",
      title: "BLACK TIGER T- SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 23,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-4946.jpg?v=1700907677&width=360",
      title: "MELODY T-SHIRT      ",

      price: "RS. 3,495      ",
    },
    {
      id: 24,
      image:
        "https://bluorng.com/cdn/shop/files/4E9F5B93-315A-40CD-8C99-4C2B4AA01120.jpg?v=1700973951&width=360",
      sold: "SOLD OUT",
      title: "WHITE SPIDER T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 25,
      image:
        "https://bluorng.com/cdn/shop/files/4E561D07-7805-47BD-B4C3-92B360B77E9A.jpg?v=1699709937&width=360",
      title: "BLIND DROP 6      ",

      price: "RS. 3,495      ",
    },
    {
      id: 26,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_6871.jpg?v=1695360057&width=360",
      title: "BLACK VICTORY T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 27,
      image: "https://bluorng.com/cdn/shop/files/v1.jpg?v=1699166246&width=360",
      title: "NAVY SPIDER T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 28,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork826.jpg?v=1698493255&width=360",
      sold: "SOLD OUT",
      title: "WORLD T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 29,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0275214.jpg?v=1695527270&width=360",
      title: "RED VICTORY T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 30,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork795_e5dd67ea-eebf-46b1-9a41-a40aa06de28a.jpg?v=1697455554&width=360",
      title: "GREEN FOREST T-SHIRT      ",

      price: "RS. 4,495      ",
    },
    {
      id: 31,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork785_11b04539-fb1b-4aa2-820b-45bf5b56be0a.jpg?v=1697345937&width=360",
      title: "SIAMESE T-SHIRT",

      price: "RS. 5,995      ",
    },
    {
      id: 32,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork791_6dfab7b8-4493-48b0-bfd5-4f515a3d884f.jpg?v=1697345828&width=360",
      sold: "SOLD OUT",
      title: "GREY SHARK T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 33,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_6979.jpg?v=1697345713&width=360",
      title: "BLACK SHARK T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 34,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork790_b1027bad-21fe-4c41-be1f-bd833773607a.jpg?v=1697345592&width=360",
      title: "NAVY FLAMBOYANT T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 35,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork789_8ce436c9-e09f-47bf-9fba-d39ae1b79dce.jpg?v=1698136005&width=360",
      title: "TEAL FLAMBOYANT T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 36,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork792.jpg?v=1697345291&width=360",
      title: "TEAL FLAMBOYANT T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 37,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork792.jpg?v=1697345291&width=360",
      sold: "SOLD OUT",
      title: "BLU TREASURE T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 38,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork795_b2427b70-468f-42e8-9ace-3c2e8ce54a00.jpg?v=1705136125&width=360",
      title: "ALL EARS T-SHIRT      ",

      price: "RS. 6,009      ",
    },
    {
      id: 39,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork788.jpg?v=1697273367&width=360",
      sold: "SOLD OUT",
      title: "WHITE UNCONDITIONAL LOVE T-SHIRT      ",

      price: "RS. 6,009      ",
    },
    {
      id: 40,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork783.jpg?v=1697264169&width=360",
      sold: "SOLD OUT",
      title: "RED UNCONDITIONAL LOVE T-SHIRT      ",

      price: "RS. 6,009      ",
    },
    {
      id: 41,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork776.jpg?v=1695359809&width=360",
      title: "OLIVE STRIVE T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 42,
      image:
        "https://bluorng.com/cdn/shop/files/0-kn.jpg?v=1710771167&width=360",
      title: "OLIVE STRIVE T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 43,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork769.jpg?v=1695359100&width=360",
      title: "TREASURE T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 44,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_7009.jpg?v=1708150859&width=360",
      title: "BLACK STRIVE T-SHIRT      ",

      price: "RS. 4,995      ",
    },
    {
      id: 45,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165217.jpg?v=1694703883&width=360",
      title: "ROSETTES T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 46,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork796_e029cb79-0940-4f1b-a84e-095dc27ff61b.jpg?v=1697346232&width=360",
      sold: "SOLD OUT",
      title: "BLACK FOR THE ARTICLES T-SHIRT      ",

      price: "RS. 6,009      ",
    },
    {
      id: 47,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165193.jpg?v=1694451976&width=360",
      title: "INVISIBLE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 48,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165188.jpg?v=1694434470&width=360",
      title: "BASIC ICE WATER T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 49,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165181.jpg?v=1694434428&width=360",
      title: "BASIC GREIGE T-SHIRT      ",

      price: "BASIC GREIGE T-SHIRT  ",
    },
    {
      id: 50,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165185.jpg?v=1694434333&width=360",
      sold: "SOLD OUT",
      title: "BASIC STRAWBERRY CREAM T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 51,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165177.jpg?v=1694434283&width=360",
      title: "BASIC GRAPE ROYALE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 52,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165174.jpg?v=1693990036&width=360",
      title: "RED BONSAI T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 53,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165170.jpg?v=1693989814&width=360",
      title: "BLACK NATURE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 54,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165150.jpg?v=1693377006&width=360",
      title: "WILL YOU (GREEN) T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 55,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165144.jpg?v=1692802605&width=360",
      title: "PURPLE NATURE T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 56,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165137.jpg?v=1692853095&width=360",
      title: "MEANINGLESS T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 57,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165134.jpg?v=1692710241&width=360",
      sold: "SOLD OUT",
      title: "WILL YOU (CREAM) T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 58,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_7833.jpg?v=1691429686&width=360",
      title: "BLACK DRAGONFLY T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 59,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165106.jpg?v=1690268565&width=360",
      sold: "SOLD OUT",
      title: "SPA BLU FLORAL T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 60,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516597.jpg?v=1690268428&width=360",
      title: "WHITE DRAGONFLY T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 61,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516596.jpg?v=1690874846&width=360",
      title: "CRASH T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 62,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork752.jpg?v=1688734950&width=360",
      title: "SCORPION T-SHIRT      ",

      price: "RS. 3,495      ",
    },
    {
      id: 63,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08071.jpg?v=1687339126&width=360",
      title: "CROCODILE T-SHIRT      ",
      sold: "SOLD OUT",

      price: "RS. 3,995      ",
    },
    {
      id: 64,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516573.jpg?v=1686557934&width=360",
      title: "CREAM HEARTS T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 65,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516571.jpg?v=1686557854&width=360",
      title: "GREY HEARTS T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 66,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516563.jpg?v=1685796931&width=360",
      title: "BROWN SUNFLOWER T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 67,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516561.jpg?v=1685797155&width=360",
      title: "WHITE SUNFLOWER T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 68,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516555.jpg?v=1685796735&width=360",
      title: "BLU FRNDS T-SHIRT      ",

      price: "RS. 3,995      ",
    },
    {
      id: 69,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165.jpg?v=1683035239&width=360",
      sold: "SOLD OUT",
      title: "BLU BASIC T-SHIRT      ",

      price: "RS. 3,495      ",
    },
    {
      id: 70,
      image:
        "https://bluorng.com/cdn/shop/products/DSC0375929.jpg?v=1681396081&width=360",
      title: "RED BASIC T-SHIRT      ",

      price: "RS. 3,495      ",
    },
    {
      id: 71,
      image:
        "https://bluorng.com/cdn/shop/products/green-wheel-t-shirt-172847.jpg?v=1681551844&width=360",
      title: "GREEN WHEEL T- SHIRT      ",

      price: "RS. 3,495      ",
    },
    {
      id: 72,
      image:
        "https://bluorng.com/cdn/shop/products/black-cap-sleeve-croptop-759335.jpg?v=1671744051&width=360",
      sold: "SOLD OUT",
      title: "BLACK CAP SLEEVE CROPTOP      ",

      price: "RS. 3,495      ",
    },
    {
      id: 73,
      image:
        "https://bluorng.com/cdn/shop/products/navy-cap-sleeve-croptop-778566.jpg?v=1671744051&width=360",
      solds: "SOLD OUT",
      title: "NAVY CAP SLEEVE CROPTOP      ",

      price: "RS. 3,495      ",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 max-lg:pt-[9rem] gap-1">
        {array.map((hello, index) => (
          <div key={hello.id} onClick={() => navigate(`/tshirt/${hello.id}`)}>
            <div key={index} className="overflow-hidden relative">
              <img
                src={hello.image}
                alt=""
                className="hover:scale-110 transition-all"
              />

              {hello.sold && (
                <p className="absolute bottom-3 left-3 bg-white text-black p-2 text-sm">
                  {hello.sold}
                </p>
              )}
            </div>

            <p>{hello.title}</p>
            <p>{hello.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TShirt;
