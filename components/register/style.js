import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";
import Input from '@mui/material/Input';
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Wrapper = styled.div`
  background: #a2a2b1;
  background: ${props => `linear-gradient(to bottom right, #a2a2b1 0%, ${props.theme.palette.secondary.main} 100%)`};
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Screen = styled.div`
  background: ${props => `linear-gradient(90deg, #a2a2b1, ${props.theme.palette.secondary.main})`};
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: ${props => `0px 0px 24px ${props.theme.palette.secondary.main}`};
`;

export const ScreenContent = styled.div`
  z-index: 99;
  position: relative;
  height: 100%;
`;

export const BgBubbles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const squareAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1000px) rotate(600deg);
  }
`;

export const BgBubblesLi = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: ${squareAnimation} 25s infinite;
  animation: ${squareAnimation} 25s infinite;
  transition-timing-function: linear;
  &:nth-child(1) {
    left: 10%;
  }
  &:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    -webkit-animation-duration: 17s;
    animation-duration: 17s;
  }
  &:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  &:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    background-color: rgba(255, 255, 255, 0.25);
  }
  &:nth-child(5) {
    left: 70%;
  }
  &:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }
  &:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
  }
  &:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 11s;
    animation-delay: 11s;
  }
`;

export const ScreenBackgorund = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
  z-index: -1;
`;

export const ScreenBkgShap = styled.span`
  transform: rotate(45deg);
  position: absolute;
`;

export const ScreenBkgShap1 = styled(ScreenBkgShap)`
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
`;

export const ScreenBkgShap2 = styled(ScreenBkgShap)`
  height: 220px;
  width: 220px;
  background: ${props => props.theme.palette.secondary.main};
  top: -172px;
  right: 0;
  border-radius: 32px;
`;

export const ScreenBkgShap3 = styled(ScreenBkgShap)`
  height: 540px;
  width: 190px;
  background: ${props => `linear-gradient(270deg, #a2a2b1, ${props.theme.palette.secondary.main})`};
  top: -24px;
  right: 0;
  border-radius: 32px;
`;

export const ScreenBkgShap4 = styled(ScreenBkgShap)`
  height: 400px;
  width: 200px;
  background: ${props => props.theme.palette.secondary.main};
  top: 420px;
  right: 50px;
  border-radius: 60px;
`;

export const Login = styled.div`
  width: 320px;
  padding: 30px 0 30px 20px;
  padding-top: 156px;
`;

export const LoginFeild = styled.div`
  padding: 20px 0 0px;
  position: relative;
  margin-bottom: 10px;
  &::focus-visible {
    outline: none !important;
  }
`;

const iconStyle = `
  position: absolute;
  top: 25px;
  color: ${props => props.theme.palette.secondary.main};
  width: .8em !important`;

export const PersonIconStyle = styled(PersonIcon)`
  ${iconStyle};
  color: ${props => props.theme.palette.secondary.main};
`;

export const LockIconStyle = styled(LockIcon)`
  ${iconStyle};
  color: ${props => props.theme.palette.secondary.main};
`;

export const BusinessIconStyle = styled(BusinessIcon)`
  ${iconStyle};
  color: ${props => props.theme.palette.secondary.main};
`;

export const MailIconStyle = styled(MailIcon)`
  ${iconStyle};
  color: ${props => props.theme.palette.secondary.main};
`;

export const PhoneIphoneIconStyle = styled(PhoneIphoneIcon)`${iconStyle};
color: ${props => props.theme.palette.secondary.main};`;

export const LoginInput = styled(Input)`
  border: none;
  background: transparent;
  padding: 3px 0 0 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;

`;

export const LoginSubmit = styled.button`
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: ${props => `1px solid ${props.theme.palette.secondary.main}`};
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.palette.secondary.main};
  box-shadow:  ${props => `0px 2px 2px ${props.theme.palette.secondary.main}`};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #fff;
    background: ${props => props.theme.palette.primary.main};
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

export const IconSubmit = styled(ArrowForwardIosIcon)`
  font-size: 24px;
  margin-left: auto;
`;

export const Signup = styled.div`
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: -15px;
  right: 0px;
  color: #fff;
`;

export const NoAccount = styled.p`
  font-size: 10px;
`;

export const SignupForm = styled(Login)`
  padding-top: 0;
`;

export const LoginLink = styled(Signup)`
  bottom: -80px;
`;

export const IconStyle = {
  vertivalAlign: "middle",
};

// verify page

export const VerifyInput = styled(Input)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  color: #FFF;
  padding: 10px;
  font-size:20px;
  text-align: center;
  background: ${props => props.theme.palette.secondary.main};
  input{
    display: inline-block !important
  }
`
