import styled from "@emotion/styled";

export const ProfileContainerDiv = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const header = {
  fontWeight: "300 !important",
  marginBottom: "20px",
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: "5px",
};

export const icon = {
  verticalAlign: "middle",
};

export const nationality = {
  display: "block",
  marginBottom: "10px",
};

export const Item = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.palette.primary.main};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  vertical-align: text-bottom;
  margin-left: 10px;
  cursor: pointer;
  transation: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const SettingContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const inputText = {
  margin: "40px 30px 40px 0",
};

export const ContainerDiv = styled.div`
  display: ${props => !props.smallScreen ? 'flex' : 'block'};
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const AvaterContainer = styled.div`
  text-align: center;
`;

export const SettingBtn = styled(Button)`
    width: 30% !important;
    margin: 20px auto;
    padding: 10px 0;
    &:nth-of-type(2){
        background: red
    }
`
