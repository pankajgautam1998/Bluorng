import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAll = () => {
  const navigate = useNavigate();
  const array = [
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/fvvvv.jpg?v=1708941504&width=360",
      name: "GREEN DRAGONFLY T-SHIRT            ",
      price: "RS. 4,495            ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/jewru.jpg?v=1708150749&width=360",
      name: "DARK SHENRON T-SHIRT        ",
      price: "RS. 4,995        ",
    },
    {
      id: 1,
      image: "https://bluorng.com/cdn/shop/files/2.jpg?v=1708315985&width=360",
      name: "LILAC SNAKE T-SHIRT        ",
      price: "RS. 4,495            ",
    },
    {
      id: 1,
      image:
        "https://bluorng.com/cdn/shop/files/0-kn.jpg?v=1710771167&width=360",
      name: "BURGUNDY INK T-SHIRT        ",
      price: "RS. 3,995        ",
    },
    {
      id: 5,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-9747.jpg?v=1709571893&width=360",
      name: "BLIND DROP 7.2      ",
      price: "RS. 4,495      ",
    },
    {
      id: 6,
      image:
        "https://bluorng.com/cdn/shop/files/i6x_350ed334-d7b9-4206-b64a-5640b09d8962.jpg?v=1710505460&width=360",
      name: "STARFLOWER DENIMS      ",
      price: "  RS. 9,995      ",
    },
    {
      id: 7,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576022.jpg?v=1707823747&width=360",
      name: "MUSTARD SHIZEN T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 8,
      image:
        "https://bluorng.com/cdn/shop/files/utrnf.jpg?v=1709005578&width=360",
      name: "BLU RACING T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 9,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960333.jpg?v=1707898139&width=360",
      name: "BLACK AFFECTION T-SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 10,
      image:
        "https://bluorng.com/cdn/shop/files/injn.jpg?v=1710770975&width=360",
      name: "BLU INK T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 11,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960349.jpg?v=1710257088&width=360",
      name: "DUTCH BLU GARLAND T-SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 12,
      image: "https://bluorng.com/cdn/shop/files/i8.jpg?v=1710501118&width=360",
      name: "GREEN CAST DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 13,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960338.jpg?v=1707898102&width=360",
      name: "RED AFFECTION T-SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 14,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960318.jpg?v=1707839737&width=360",
      name: "BLACK RACING T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 15,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960341.jpg?v=1709818184&width=360",
      name: "BLIND DROP 7      ",
      price: "RS. 4,495      ",
    },
    {
      id: 16,
      image:
        "https://bluorng.com/cdn/shop/files/0-_n.jpg?v=1708246058&width=360",
      name: "WHITE GARLAND T-SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 17,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576037.jpg?v=1707823320&width=360",
      name: "PINK SNAKE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 18,
      image: "https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
      name: "NOT SO BLACK DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 19,
      image:
        "https://bluorng.com/cdn/shop/files/i2b.jpg?v=1710504391&width=360",
      name: "BLU DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 20,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0960319.jpg?v=1707820698&width=360",
      name: "FIRE SHENRON T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 21,
      image: "https://bluorng.com/cdn/shop/files/s1.jpg?v=1708613587&width=360",
      name: "BLACK AFFECTION SHORTS      ",
      price: "RS. 4,995      ",
    },
    {
      id: 22,
      image: "https://bluorng.com/cdn/shop/files/i7.jpg?v=1710504495&width=360",
      name: "OVER DYE DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 23,
      image: "https://bluorng.com/cdn/shop/files/s8.jpg?v=1707119051&width=360",
      name: "RED AFFECTION SHORTS      ",
      price: "RS. 4,995      ",
    },
    {
      id: 24,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576016.jpg?v=1707823770&width=360",
      name: "OFF WHITE SHIZEN T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 25,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576014.jpg?v=1707823794&width=360",
      name: "MARBLE GREY WAFFLE SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 26,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0576010.jpg?v=1707823818&width=360",
      name: "BLU WAFFLE SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 27,
      image:
        "https://bluorng.com/cdn/shop/files/Q16.jpg?v=1705211162&width=360",
      name: "GREEN PAISLEY HOODIE      ",
      price: "RS. 9,995      ",
    },
    {
      id: 28,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0466227.jpg?v=1702283124&width=360",
      name: "NAVY CRANE T-SHIRT      ",
      price: "RS. 5,495      ",
    },
    {
      id: 29,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6218.jpg?v=1703479113&width=360",
      name: "GREY HERRINGBONE HOODIE      ",
      price: "RS. 9,995      ",
    },
    {
      id: 30,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6220.jpg?v=1703478951&width=360",
      name: "RED HERRINGBONE HOODIE      ",
      price: "RS. 9,995      ",
    },
    {
      id: 31,
      image:
        "https://bluorng.com/cdn/shop/files/ioio78.jpg?v=1703311292&width=360",
      name: "GLACIER GREY FULL SLEEVE T- SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 32,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6203.jpg?v=1703478075&width=360",
      name: "BLACK WASH FULL SLEEVE T- SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 33,
      image:
        "https://bluorng.com/cdn/shop/files/F2358F29-71DB-4DDB-B433-33F6A741038E.jpg?v=1703478260&width=360",
      name: "MARS RED FULL SLEEVE T- SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 34,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6208.jpg?v=1703479221&width=360",
      name: "BLU FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 35,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6210.jpg?v=1703478155&width=360",
      name: "OCHRE FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 36,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6210.jpg?v=1703478155&width=360",
      name: "OCHRE FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 37,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-6205.jpg?v=1703478219&width=360",
      name: "ORNG FLANNEL SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 38,
      image:
        "https://bluorng.com/cdn/shop/files/DSC057606.jpg?v=1701417176&width=360",
      name: "BLACK TIGER T- SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 39,
      image:
        "https://bluorng.com/cdn/shop/files/IMG-4946.jpg?v=1700907677&width=360",
      name: "MELODY T-SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 40,
      image:
        "https://bluorng.com/cdn/shop/files/4E9F5B93-315A-40CD-8C99-4C2B4AA01120.jpg?v=1700973951&width=360",
      name: "WHITE SPIDER T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 41,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork831.jpg?v=1700923944&width=360",
      name: "VIVID SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 42,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork843.jpg?v=1700924040&width=360",
      name: "BONE SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 43,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork838.jpg?v=1700923997&width=360",
      name: "RED CHAIN SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 44,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork847.jpg?v=1700924704&width=360",
      name: "BLU STONE SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 45,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork834_d70d1042-37b1-4091-9944-3b214668f543.jpg?v=1700924823&width=360",
      name: "BLACK STONE SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 46,
      image:
        "https://bluorng.com/cdn/shop/files/4E561D07-7805-47BD-B4C3-92B360B77E9A.jpg?v=1699709937&width=360",
      name: "BLIND DROP 6      ",
      price: "RS. 3,495      ",
    },
    {
      id: 47,
      image: "https://bluorng.com/cdn/shop/files/v1.jpg?v=1699166246&width=360",
      name: "NAVY SPIDER T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 48,
      image: "https://bluorng.com/cdn/shop/files/w6.jpg?v=1700749714&width=360",
      name: "WHITE FAVOURITE HOODIE      ",
      price: "RS. 8,995      ",
    },
    {
      id: 49,
      image: "https://bluorng.com/cdn/shop/files/k3.jpg?v=1699165759&width=360",
      name: "BLACK FAVOURITE HOODIE      ",
      price: "RS. 8,995      ",
    },
    {
      id: 50,
      image:
        "https://bluorng.com/cdn/shop/files/DSC046622.jpg?v=1699165083&width=360",
      name: "PARLIAMENT HOODIE      ",
      price: "RS. 11,995      ",
    },
    {
      id: 51,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork826.jpg?v=1698493255&width=360",
      name: "WORLD T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 52,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_7009.jpg?v=1708150859&width=360",
      name: "BLACK STRIVE T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 53,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork796_e029cb79-0940-4f1b-a84e-095dc27ff61b.jpg?v=1697346232&width=360",
      name: "BLACK FOR THE ARTICLES T-SHIRT      ",
      price: "RS. 6,009      ",
    },
    {
      id: 54,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork795_e5dd67ea-eebf-46b1-9a41-a40aa06de28a.jpg?v=1697455554&width=360",
      name: "GREEN FOREST T-SHIRT      ",
      price: "RS. 4,495      ",
    },
    {
      id: 55,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork785_11b04539-fb1b-4aa2-820b-45bf5b56be0a.jpg?v=1697345937&width=360",
      name: "SIAMESE T-SHIRT      ",
      price: "RS. 5,995      ",
    },
    {
      id: 56,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork791_6dfab7b8-4493-48b0-bfd5-4f515a3d884f.jpg?v=1697345828&width=360",
      name: "GREY SHARK T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 57,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_6979.jpg?v=1697345713&width=360",
      name: "BLACK SHARK T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 58,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork790_b1027bad-21fe-4c41-be1f-bd833773607a.jpg?v=1697345592&width=360",
      name: "NAVY FLAMBOYANT T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 59,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork789_8ce436c9-e09f-47bf-9fba-d39ae1b79dce.jpg?v=1698136005&width=360",
      name: "TEAL FLAMBOYANT T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 60,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork792.jpg?v=1697345291&width=360",
      name: "BLU TREASURE T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 61,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork795_b2427b70-468f-42e8-9ace-3c2e8ce54a00.jpg?v=1705136125&width=360",
      name: "ALL EARS T-SHIRT      ",
      price: "RS. 6,009      ",
    },
    {
      id: 62,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork788.jpg?v=1697273367&width=360",
      name: "WHITE UNCONDITIONAL LOVE T-SHIRT      ",
      price: "RS. 6,009      ",
    },
    {
      id: 63,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork783.jpg?v=1697264169&width=360",
      name: "RED UNCONDITIONAL LOVE T-SHIRT      ",
      price: "RS. 6,009      ",
    },
    {
      id: 64,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0275214.jpg?v=1695527270&width=360",
      name: "RED VICTORY T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 65,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_6871.jpg?v=1695360057&width=360",
      name: "BLACK VICTORY T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 66,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork776.jpg?v=1695359809&width=360",
      name: "OLIVE STRIVE T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 67,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork769.jpg?v=1695359100&width=360",
      name: "TREASURE T-SHIRT      ",
      price: "RS. 4,995      ",
    },
    {
      id: 68,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165217.jpg?v=1694703883&width=360",
      name: "ROSETTES T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 69,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165193.jpg?v=1694451976&width=360",
      name: "INVISIBLE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 70,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165188.jpg?v=1694434470&width=360",
      name: "BASIC ICE WATER T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 71,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165181.jpg?v=1694434428&width=360",
      name: "BASIC GREIGE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 72,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165185.jpg?v=1694434333&width=360",
      name: "BASIC STRAWBERRY CREAM T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 73,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165177.jpg?v=1694434283&width=360",
      name: "BASIC GRAPE ROYALE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 74,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165174.jpg?v=1693990036&width=360",
      name: "RED BONSAI T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 75,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165170.jpg?v=1693989814&width=360",
      name: "BLACK NATURE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 76,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165150.jpg?v=1693377006&width=360",
      name: "WILL YOU (GREEN) T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 77,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165144.jpg?v=1692802605&width=360",
      name: "PURPLE NATURE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 78,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165137.jpg?v=1692853095&width=360",
      name: "MEANINGLESS T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 79,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165134.jpg?v=1692710241&width=360",
      name: "WILL YOU (CREAM) T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 80,
      image:
        "https://bluorng.com/cdn/shop/files/IMG_7833.jpg?v=1691429686&width=360",
      name: "BLACK DRAGONFLY T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 81,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165106.jpg?v=1690268565&width=360",
      name: "SPA BLU FLORAL T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 82,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516597.jpg?v=1690268428&width=360",
      name: "WHITE DRAGONFLY T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 83,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516596.jpg?v=1690874846&width=360",
      name: "CRASH T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 84,
      image:
        "https://bluorng.com/cdn/shop/files/Untitled_Artwork752.jpg?v=1688734950&width=360",
      name: "SCORPION T-SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 85,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08607.png?v=1688450563&width=360",
      name: "OLIVE KHAKI RIPSTOP CARGOS      ",
      price: "RS. 7,995      ",
    },
    {
      id: 86,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08597.jpg?v=1688450386&width=360",
      name: "MILITARY GREY RIPSTOP CARGOS      ",
      price: "RS. 7,995      ",
    },
    {
      id: 87,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08679_48bbc864-2277-4d51-a13b-c1dd970f61aa.png?v=1688715468&width=360",
      name: "MILITARY NAVY RIPSTOP CARGOS      ",
      price: "RS. 7,995      ",
    },
    {
      id: 88,
      image:
        "https://bluorng.com/cdn/shop/files/DSC08071.jpg?v=1687339126&width=360",
      name: "CROCODILE T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 89,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516573.jpg?v=1686557934&width=360",
      name: "CREAM HEARTS T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 90,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516571.jpg?v=1686557854&width=360",
      name: "GREY HEARTS T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 91,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516563.jpg?v=1685796931&width=360",
      name: "BROWN SUNFLOWER T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 92,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516561.jpg?v=1685797155&width=360",
      name: "WHITE SUNFLOWER T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 93,
      image:
        "https://bluorng.com/cdn/shop/files/DSC0516555.jpg?v=1685796735&width=360",
      name: "BLU FRNDS T-SHIRT      ",
      price: "RS. 3,995      ",
    },
    {
      id: 94,
      image:
        "https://bluorng.com/cdn/shop/files/DSC05165.jpg?v=1683035239&width=360",
      name: "BLU BASIC T-SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 95,
      image: "https://bluorng.com/cdn/shop/files/C1.jpg?v=1683615603&width=360",
      name: "BLACK RIPSTOP CARGOS      ",
      price: "RS. 14,995      ",
    },
    {
      id: 96,
      image:
        "https://bluorng.com/cdn/shop/files/DSC047966.jpg?v=1682854190&width=360",
      name: "OLIVE RIPSTOP CARGOS      ",
      price: "RS. 14,995      ",
    },
    {
      id: 97,
      image:
        "https://bluorng.com/cdn/shop/products/DSC0375929.jpg?v=1681396081&width=360",
      name: "RED BASIC T-SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 98,
      image:
        "https://bluorng.com/cdn/shop/products/DSC037599.jpg?v=1680850210&width=360",
      name: "FLORAL DENIMS      ",
      price: "RS. 9,995      ",
    },
    {
      id: 99,
      image:
        "https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
      name: "LIGHT WASH DENIMS      ",
      price: "RS. 8,995      ",
    },
    {
      id: 100,
      image:
        "https://bluorng.com/cdn/shop/products/DSC0375915.jpg?v=1680850839&width=360",
      name: "DARK WASH DENIMS      ",
      price: "RS. 8,995      ",
    },
    {
      id: 101,
      image:
        "https://bluorng.com/cdn/shop/products/green-wheel-t-shirt-172847.jpg?v=1681551844&width=360",
      name: "GREEN WHEEL T- SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 102,
      image:
        "https://bluorng.com/cdn/shop/products/black-cap-sleeve-croptop-759335.jpg?v=1671744051&width=360",
      name: "BLACK CAP SLEEVE CROPTOP      ",
      price: "RS. 3,495      ",
    },
    {
      id: 103,
      image:
        "https://bluorng.com/cdn/shop/products/navy-cap-sleeve-croptop-778566.jpg?v=1671744051&width=360",
      name: "NAVY CAP SLEEVE CROPTOP      ",
      price: "RS. 3,495      ",
    },
    {
      id: 104,
      image:
        "https://bluorng.com/cdn/shop/products/basic-red-hoodie-851668.jpg?v=1671744051&width=360",
      name: "BASIC RED HOODIE      ",
      discount: "RS. 7,995 ",
      price: "   RS. 5,400  ",
    },
    {
      id: 105,
      image:
        "https://bluorng.com/cdn/shop/products/red-shorts-455277.jpg?v=1671700691&width=360",
      name: "RED SHORTS      ",
      price: "RS. 3,495      ",
    },
    {
      id: 106,
      image:
        "https://bluorng.com/cdn/shop/products/black-shorts-658348.jpg?v=1671700692&width=360",
      name: "BLACK SHORTS      ",
      price: "RS. 3,495      ",
    },
    {
      id: 107,
      image:
        "https://bluorng.com/cdn/shop/products/stone-grey-mini-crossbody-bag-148907.jpg?v=1671744058&width=360",
      name: "STONE GREY MINI CROSSBODY BAG      ",
      price: "RS. 9,995      ",
    },
    {
      id: 108,
      image:
        "https://bluorng.com/cdn/shop/products/flame-orng-mini-crossbody-bag-535602.jpg?v=1671744054&width=360",
      name: "FLAME ORNG MINI CROSSBODY BAG      ",
      price: "RS. 9,995      ",
    },
    {
      id: 109,
      image:
        "https://bluorng.com/cdn/shop/products/ruby-red-mini-crossbody-bag-443952.jpg?v=1671744057&width=360",
      name: "RUBY RED MINI CROSSBODY BAG      ",
      price: "RS. 9,995      ",
    },
    {
      id: 110,
      image:
        "https://bluorng.com/cdn/shop/products/olive-paisley-tee-688548.jpg?v=1668802325&width=360",
      name: "OLIVE PAISLEY T-SHIRT      ",
      price: "RS. 3,495      ",
    },
    {
      id: 111,
      image:
        "https://bluorng.com/cdn/shop/products/leather-shopping-bag-black-594650.jpg?v=1668802328&width=360",
      name: "LEATHER BAG (BLACK)      ",
      price: "RS. 11,995      ",
    },
    {
      id: 112,
      image:
        "https://bluorng.com/cdn/shop/products/image.heic?v=1670479696&width=360",
      name: "BLACK SHINE SWEATSHIRT      ",
      price: "RS. 6,995      ",
    },
    {
      id: 113,
      image:
        "https://bluorng.com/cdn/shop/products/red-shine-sweatshirt-776713.jpg?v=1670480438&width=360",
      name: "RED SHINE SWEATSHIRT      ",
      price: "RS. 6,995      ",
    },
    {
      id: 114,
      image:
        "https://bluorng.com/cdn/shop/products/red-kraken-hoodie-225509.jpg?v=1667677513&width=360",
      name: "RED KRAKEN HOODIE      ",
      discount: "RS. 8,995 ",
      price: "   RS. 6,000   ",
    },
    {
      id: 115,
      image:
        "https://bluorng.com/cdn/shop/products/favour-green-sweatshirt-244545.jpg?v=1672130320&width=360",
      name: "FAVOR GREEN SWEATSHIRT      ",
      price: "RS. 6,995      ",
    },
    {
      id: 116,
      image:
        "https://bluorng.com/cdn/shop/products/blu-favour-sweatshirt-820408.jpg?v=1672130772&width=360",
      name: "BLU FAVOUR SWEATSHIRT      ",
      price: "RS. 6,995      ",
    },
    {
      id: 117,
      image:
        "https://bluorng.com/cdn/shop/products/green-snake-hoodie-298683.jpg?v=1668419463&width=360",
      name: "GREEN SNAKE HOODIE      ",
      discount: "RS. 8,995 ",
      price: "RS. 6,000           ",
    },
    {
      id: 118,
      image:
        "https://bluorng.com/cdn/shop/products/bw-heart-on-my-sleeve-tee-160711.jpg?v=1657284797&width=360",
      name: "B/W HEART ON MY SLEEVE TEE      ",
      price: "RS. 3,495      ",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {array.map((i, index) => (
          <div>
            <div
              key={i.id}
              onClick={() => navigate(`/viewall/${i.id}`)}
              className="overflow-hidden"
            >
              <img
                src={i.image}
                alt=""
                className="hover:scale-110 transition-all"
              />
            </div>
            <p>{i.name}</p>
            <span className="flex gap-1">
              <s>{i.discount}</s>
              <p>{i.price}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewAll;
