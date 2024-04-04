import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [page, setPage] = useState("DESCRIPTION");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="DESCRIPTION"
            onClick={() => setPage("DESCRIPTION")}
            {...a11yProps(0)}
          />
          <Tab
            label="SHIPPING"
            onClick={() => setPage("SHIPPING")}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <div>
        {page === "DESCRIPTION" && (
          <div>
            <p className="text-xs">
              BLUORNG OLIVE RIPSTOP CARGO IS IN OLIVE COLOUR. THE DESIGN IS
              INSPIRED FROM BLUORNG’S TAKE ON CARGOS. THE MATERIAL IS PREMIUM
              QUALITY AND TEXTURED; DOESNT RIP. THE CARGOS ARE CONVERTIBLE INTO
              SHORTS AND CAN BE STYLED IN MULTIPLE WAYS. THERE ARE 2 DETACHABLE
              POCKETS, LOW HANGING SUSPENDERS ON EACH SIDE AND 12 MORE
              MULTIPURPOSE POCKETS. THE FIT IS A BLUORNG’S BAGGY FLARED FIT.
            </p>
          </div>
        )}
      </div>
      <div>
        {page === "SHIPPING" && (
          <div>
            <p className="text-xs">PACKED WITHIN 24 HOURS.</p>
            <p className="text-xs">FREE DELIVERY PAN-INDIA.</p>
            <p className="text-xs">DISPATCHES NEXT DAY</p>
          </div>
        )}
      </div>
    </Box>
  );
}
