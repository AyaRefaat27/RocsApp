import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import {
  DeleteOutlineRounded,
  DisabledByDefaultRounded,
  EmojiEmotionsRounded,
  RestaurantTwoTone,
} from "@mui/icons-material";
import ConfirmationDialogRaw from "./UserStatus";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function EditPhoto() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Online");
  const [expanded, setExpanded] = useState(false);

  const handleClickBadge = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // SnackBar

  const [state, setState] = React.useState({
    openBar: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openBar } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, openBar: true });
  };

  const handleCloseSnackBar = () => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setState({ ...state, openBar: false });
  };

  const action = (
    <>
      <Button size="small" onClick={handleCloseSnackBar}>
        UNDO
      </Button>
      <Button size="small" onClick={handleCloseSnackBar}>
        OK
      </Button>
    </>
  );

  //Photo
  const [photoValue, setPhotoValue] = useState(null);
  const handlePhotoChange = (event) => {
    setPhotoValue(event.target.files[0]);
  };
  return (
    <Card sx={{ borderRadius: "25px", boxShadow: "0px 0px 10px #ddd" }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia height="100% auto">
          <Badge
            sx={{ m: 5 }}
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Tooltip placement="right" arrow title="Select Status">
                <SmallAvatar onClick={handleClickBadge}>
                  <EmojiEmotionsRounded />
                </SmallAvatar>
              </Tooltip>
            }
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                border: "1px solid #ddd",
                boxShadow: "0px 0px 10px #ddd",
              }}
              alt=""
              //   src={URL.createObjectURL(photoValue)}
              //   image={URL.createObjectURL(photoValue)}
              src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
            />
          </Badge>

          <ConfirmationDialogRaw
            id="ringtone-menu"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
          />
        </CardMedia>
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Mohammed Hassan
          </Typography>
          <Typography variant="body1" component="div" sx={{ mb: 1 }}>
            CEO Manager
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #44b700",
              borderRadius: "50px",
              ml: 7,
              width: "50%",
            }}
          >
            <StyledBadge
              overlap="circular"
              // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ paddingInlineStart: "1rem" }}
            >
              {value}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          sx={{ textAlign: "left" }}
          fullWidth
          component="label"
        >
          Change Profile Photo
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            borderRadius: "50%",
            background: "lightBlue",
            p: 1,
            color: "#444",
          }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            m: 2,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<DisabledByDefaultRounded />}
              // onClick={handleClick({ vertical: "top", horizontal: "center" })}
            >
              Disable Account
            </Button>

            {/* <Snackbar
                open={openBar}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message="Are you sure you want to disable your account?"
                action={action}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
                sx={{ background: "#fff" }}
              /> */}
          </Box>

          <Box>
            <Button
              variant="contained"
              color="error"
              fullWidth
              startIcon={<DeleteOutlineRounded />}
              onClick={handleClick({ vertical: "top", horizontal: "center" })}
            >
              Delete Account
            </Button>

            <Snackbar
              open={openBar}
              autoHideDuration={6000}
              onClose={handleCloseSnackBar}
              message="Are you sure you want to delete account?"
              action={action}
              anchorOrigin={{ vertical, horizontal }}
              key={vertical + horizontal}
            />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
