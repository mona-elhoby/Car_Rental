import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  background: #222;
  position: relative;
  z-index: 3;
  border-bottom: 1px solid #333;
  display: ${props => props.smallMedia ? 'none' : 'block'}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 0;
  margin-top: 0;
  height: 44px
`;

export const SocialWrapper = styled.div`
  margin: 0;
  float: right;
  width: auto;
`;

export const SocialWrapperul = styled.ul`
  text-align: right;
  list-style: none;
  margin-left: 0 !important;
`;

export const SocialWrapperulli = styled.li`
  background: transparent;
  margin-right: 0px;
  display: inline-block;
`;

export const SocialWrapperullia = styled.a`
  display: inline-block;
  color: #fff;
  padding: 0;
  margin-left: 15px;
  line-height: 44px;
  font-size: 16px;
  &:hover{
    color: ${props => props.theme.palette.secondary.main}
  }
`;

export const ContactInfo = styled.div`
  font-size: 13px;
  float: left;
  line-height: 44px;
  width: 60%;
  color: #FFF
`;

export const ContactInfoDiv = styled.div`
  display: inline-block;
  float: left;
  font-size: 13px;
`;

export const AddressInfo = styled(ContactInfoDiv)`
  width: 40%;
`;

export const OtherInfo = styled(ContactInfoDiv)`
  width: 30%;
`;
