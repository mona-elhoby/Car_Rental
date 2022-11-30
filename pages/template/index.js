import React from "react";
import Link from "next/link";

import GetTemplate from "../../container/template/getTemplate";
import { SettingBtn } from "../../components/profile/style";
import Container from "../../layout/layout";
import Layout from "../../layout/pageLayout";

const Template = () => {
  return (
    <Layout>
      <Container>
        <SettingBtn>
          <Link href="/template/addTemplate" style={{ color: "#FFF" }}>
            Add Template
          </Link>
        </SettingBtn>
        <GetTemplate />
      </Container>
    </Layout>
  );
};

export default Template;
