import {
  Avatar,
  TextField,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  useMediaQuery,
  FormHelperText,
  Autocomplete,
  Grid,
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
        <input
          type="file"
          onChange={props.handleChangeAttached}
          value={props.attachedFile}
        />
      </AvaterContainer>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            sx={inputText}
            value={props.firstName}
            onChange={props.handleChangeFName}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            sx={inputText}
            value={props.lastName}
            onChange={props.handleChangeLName}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            sx={inputText}
            value={props.email}
            onChange={props.handleChangeEmail}
            error={props.phoneValid ? true : false}
          />
          {props.phoneValid ? (
            <FormHelperText
              sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
            >
              account not verified
            </FormHelperText>
          ) : null}
        </Grid>
        <Grid item sm={4} xs={12}>
          <div style={{ display: "flex", alignItems: "flex-end", marginTop: '15px' }}>
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
                width: "calc(65% - 70px) !important",
                padding: "3px 0 0 10px !important",
              }}
            />{" "}
            {props.phoneValid ? (
              <FormHelperText
                sx={{ marginTop: "0 !important", marginBottom: "-15px" }}
              >
                account not verified
              </FormHelperText>
            ) : null}
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Autocomplete
            freeSolo
            id="disable-close-on-select"
            disableCloseOnSelect
            onChange={(event, newValue) => {
              console.log("newValue: ", newValue);
              props.handleChangeNationality(newValue);
            }}
            inputValue={props.nationality}
            onInputChange={(event, newInputValue) => {
              console.log("newInputValue: ", newInputValue);
              props.getNationality(newInputValue);
            }}
            options={
              props.options ? props.options?.map((option) => option.name) : []
            }
            renderInput={(params) => (
              <TextField {...params} label="Nationality" variant="standard" />
            )}
            sx={{width: '70%'}}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl sx={{ marginTop: "20px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={props.gender}
              onChange={props.handleChangeGender}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingForm;
