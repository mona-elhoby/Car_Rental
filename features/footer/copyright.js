import React from "react";

import { CopyRightBkg, OrderListCopyright } from "./style";
import Layout from "../../layout/layout";

const Copyright = () => {
  return (
    <CopyRightBkg>
      <Layout>
        {/* <div>
          <OrderListCopyright>
            <li>
              <a href="#" style={{ color: "#FFF" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#FFF" }}>
                Limousine
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#FFF" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#FFF" }}>
                FAQs
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#FFF" }}>
                Contact Us
              </a>
            </li>
          </OrderListCopyright>
        </div> */}
        <p style={{lineHeight: '30px', fontSize: '12px'}}>
          © Copyright Grand Car Rental
        </p>
      </Layout>
    </CopyRightBkg>
  );
};

export default Copyright;
