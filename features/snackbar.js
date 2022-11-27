import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAlert = (props) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.closeAlert(false)
  };

  return (
    <Snackbar
      open={true}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {props.msg}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
