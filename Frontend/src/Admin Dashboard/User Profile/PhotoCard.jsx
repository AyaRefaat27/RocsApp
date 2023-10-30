import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { EmojiEmotionsRounded } from "@mui/icons-material";
import ConfirmationDialogRaw from "./UserStatus";

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

export default function PhotoCard() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Online");

  const handleClickBadge = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
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
          sx={{ textAlign: "center" }}
          fullWidth
        >
          Change Profile Photo
        </Button>
      </CardActions>
    </Card>
  );
}
