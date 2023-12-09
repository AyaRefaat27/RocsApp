import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import EditPhoto from "./EditPhoto";
import EditInfo from "./EditInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

export default function EditUser({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", background: "#fff" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1, color: "#333" }}
            variant="h6"
            component="div"
          >
            Edit User
          </Typography>
          <Button
            autoFocus
            sx={{ color: "#333" }}
            onClick={handleClose}
            variant="outlined"
          >
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          margin: "20px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 3,
          width: "100%",
        }}
      >
        <Box sx={{ width: "350px" }}>
          <EditPhoto />
        </Box>
        <Box
          sx={{
            width: "70%",
            height: "100% auto",
            borderRadius: "25px",
            boxShadow: "0px 0px 10px #ddd",
            p: 3,
          }}
        >
          <EditInfo />
        </Box>
      </Box>
    </Dialog>
  );
}
