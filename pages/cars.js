import { React, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Filter from "../components/search_page/filter";
import Cover from "../components/search_page/cover";
import Item from "../components/search_page/item";
import Layout from "../layout/pageLayout";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";

import { api_url } from "../store/config";
import { getImage } from "../store/reducer/profile";
import PaginationContainer from '../components/pagination'
import { storeWrapper } from "../store/index";

function Cars(props) {
const [images, setImages] = useState([])
const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
    let newArr = []
    props.cars?.data?.map( ele => {
        dispatch(getImage(ele.image)).then(res => {
          newArr.push({img: res.payload.request.responseURL, id: ele.image})
          setImages(newArr)
        })
    })
  }, [dispatch])

  return (
    <div>
      <Head>
        <title>Cars</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Cover />
        <Filter />
        <Grid container>
          <Grid item sm={9} xs={12}>
            {/* <GetCars /> */}
            {props.cars?.data?.map((ele, i) => (
              <Item key={i} image={images?.find(img => img.id == ele.image)?.img} car={ele} />
            ))}
            <PaginationContainer count={Math.ceil(props.cars?.totalRecords / 10)} page={page} handleChange={useCallback((e, val) => setPage(val), [])}/>
          </Grid>
          <Grid item sm={3}>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async ({req, res}) => {
    const result = await axios.get(`${api_url}/vehicle?total=true`, {
      params: null,
      headers: {
        "Authorization": `Bearer ${JSON.parse(req.cookies.user)?.data?.accessToken}`,
        "Content-Type": "application/json",
      },
    });
   
    
    return { props: { cars: result.data} };
  }
);

export default Cars;
