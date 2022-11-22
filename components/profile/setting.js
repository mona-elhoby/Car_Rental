import {
  Avatar,
  TextField,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  FormLabel,
  Radio,
  useMediaQuery,
  FormHelperText
} from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { LoginInput } from "../../components/register/style";
import { inputText, ContainerDiv, AvaterContainer } from "./style";

const SettingForm = (props) => {
  const smallMatches = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <AvaterContainer>
        <Avatar
          alt="avatar"
          sx={{ width: 168, height: 168, margin: "auto auto 20px" }}
          //   img={}
        />
        <input type="file" />
      </AvaterContainer>
      <TextField
        id="standard-basic"
        label="First Name"
        variant="standard"
        sx={inputText}
        value={props.firstName}
        onChange={props.handleChangeFName}
      />
      <TextField
        id="standard-basic"
        label="Last Name"
        variant="standard"
        sx={inputText}
        value={props.lastName}
        onChange={props.handleChangeLName}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        sx={inputText}
        value={props.email}
        onChange={props.handleChangeEmail}
        error={props.phoneValid ? true : false}
      />{props.phoneValid ? (
        <FormHelperText
          sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
        >
          account not verified
        </FormHelperText>
      ) : null}
      <ContainerDiv smallScreen={smallMatches}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PhoneInput
            international
            countryCallingCodeEditable={true}
            // defaultCountry="AD"
            placeholder="key"
            value={props.phoneKey}
            onChange={props.setPhoneKey}
            maxLength={props.phoneKey?.length}
          />
          <LoginInput
            type="tel"
            placeholder="Phone"
            value={props.phone}
            onChange={props.handleChangePhone}
            required
            maxLength="14"
            error={props.phoneValid ? true : false}
            sx={{
              display: "inline-block",
              width: "calc(75% - 70px) !important",
              padding: "3px 0 0 10px !important",
            }}
          /> {props.phoneValid ? (
            <FormHelperText
              sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
            >
            account not verified
            </FormHelperText>
          ) : null}
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Nationality</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={props.nationality}
            onChange={props.handleChangeNationality}
            label="Nationality"
          >
            {
                props.nationalites?.data?.map(ele => (<MenuItem key={ele.id} value={ele.id}>{ele.name}</MenuItem>))
            }
          </Select>
        </FormControl>
        <FormControl sx={{marginTop: '20px'}}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
          row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={props.gender}
            onChange={props.handleChangeGender}
          >
           <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>
      </ContainerDiv>
    </div>
  );
};

export default SettingForm;
