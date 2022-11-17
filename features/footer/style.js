import styled from "@emotion/styled";

export const Footerbkg = styled.div`
  background: #000;
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  word-wrap: break-word;
  margin-bottom: 0;
  padding-top: 50px;
  float: left;
  clear: both;
  border-bottom: 1px solid #333
`;

export const ListOrderItem = styled.li`
  margin-right: 3%;
`;

export const LastListOrderItem = styled(ListOrderItem)`
  margin-right: 0;
`;

export const HeaderItemList = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

export const Content = styled.p`
  color: rgb(204, 204, 204);
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 12px;
  line-height: 20px;
`;

export const OrderListFooter = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const SocialFooter = styled.li`
  margin: 0 5px 10px 5px !important;
  display: inline-block;
  text-align: center;
  &:nth-of-type(1) a {
    background: #2d5f9a;
  }
  &:nth-of-type(2) a {
    background: #00c3f3;
  }
  &:nth-of-type(3) a {
    background: #cc181e;
  }
  &:nth-of-type(4) a {
    background: #bd081c;
  }
  &:nth-of-type(5) a {
    background: #405de6;
  }
`;

export const SocialIconFooter = styled.a`
    display: block;
    width: 35px;
    height: 35px;
    color: #fff !important;
    background: #000;
    border-radius: 250px;
    line-height: 42px;
}
`;

export const SubmitFormFooter = styled.input`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  border: none;
  background: '#FFF';
  text-align: center;
`;

export const SubmitFormFooterBtn = styled(SubmitFormFooter)`
  margin-top: 10px;
  color: #FFF;
  background-color: ${props => props.theme.palette.primary.main};
  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
  }
`;

// copyright
export const CopyRightBkg = styled.div`
  background: #000;
  color: #fff;
  width: 100%
`;

