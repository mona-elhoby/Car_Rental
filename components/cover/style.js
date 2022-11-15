import styled from "@emotion/styled";

export const CoverWrapper = styled.div`
  padding-top: 210px !important;
  text-align: center;
  height: 600px;
  background-position: center center;
  color: #ffffff;
  margin-top: -65px;
`;

export const Overlay = styled.div`
  z-index: 1;
  visibility: visible;
  opacity: 1;
  position: absolute;
  -ms-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
  background: rgba(0, 0, 0, 0.2);
`;

export const CoverHeader = styled.h2`
  font-size: 4.2vw;
`;

export const CoverSubtitle = styled.p`
  font-size: 1.5vw;
  font-weight: 500;
  margin-top: -8px;
  margin-bottom: 20px;
`;

const CoverInputSearch = ` 
width: 95%;
border: 1px solid #dce0e0;
border-radius: 5px;
background: #fff;
padding: 10px;
-webkit-transition: border-color linear 0.3s;
-moz-transition: border-color linear 0.3s;
-o-transition: border-color linear 0.3s;
transition: border-color linear 0.3s;
`;

export const CoverSearchSelect = styled.select`
  ${CoverInputSearch};
  //   -webkit-appearance: none;
  //   -moz-appearance: none;
  //   appearance: none;
`;

export const InputSearch = styled.input`
  ${CoverInputSearch};
  color: #FFF;
  border: none;
  background-color: ${props => props.theme.palette.primary.main};
  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
  }
`;
