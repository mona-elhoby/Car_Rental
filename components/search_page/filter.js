import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import ImportExportIcon from '@mui/icons-material/ImportExport';

import Layout from "../../layout/layout";
import { CoverSearchSelect, InputSearch, SpanIcon } from "../home/cover/style";
import {FilterWrapper} from './style'

const Cover = props => {
    const theme = useTheme()
  return (
    <div>
        <Layout>
          <FilterWrapper>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <div style={{position: 'relative'}}>
                  <CoverSearchSelect onChange={props.handleChangeMaker}>
                    <option value="">Any Brand</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Mercedes Benz">Mercedes Benz</option>
                    <option value="MINI">MINI</option>
                    <option value="Porsche">Porsche</option>
                  </CoverSearchSelect>
                  <Image src={require('../../assets/down-arrow.png')} alt="down-arrow-image" height={15} width={15} style={SpanIcon}/>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{position: 'relative'}}>
                  <CoverSearchSelect onChange={props.handleChangeModel}>
                    <option value="">Any Type</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                  </CoverSearchSelect>
                  <Image src={require('../../assets/down-arrow.png')} alt="down-arrow-image" height={15} width={15} style={SpanIcon}/>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div style={{position: 'relative'}}>
                  <CoverSearchSelect>
                    <option value="price_low">Price Low to High</option>
                    <option value="price_high">Price High to Low</option>
                    <option value="model">Sort By Model</option>
                    <option value="popular">Sort By Popularity</option>
                    <option value="review">Sort By Review Score</option>
                  </CoverSearchSelect>
                  <ImportExportIcon sx={SpanIcon}/>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div>
                  <InputSearch
                  theme={theme}
                    id="car_search_btn"
                    type="submit"
                    value="Search"
                  />
                </div>
              </Grid>
            </Grid>
          </FilterWrapper>
        </Layout>
    </div>
  );
};

export default Cover;
