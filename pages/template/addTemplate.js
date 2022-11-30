import React from "react";
import dynamic from "next/dynamic";

const PostTemplate = dynamic(
  () => import("../../container/template/postTemplate"),
  { ssr: false }
);
import Layout from "../../layout/pageLayout";

const CreateTemplate = () => {
  return (
    <Layout>
      <PostTemplate />
    </Layout>
  );
};

export default CreateTemplate;
