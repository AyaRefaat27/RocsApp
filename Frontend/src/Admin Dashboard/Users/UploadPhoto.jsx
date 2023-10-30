import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function UploadPhoto() {
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
            // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            // badgeContent={
            //   <Tooltip placement="right" arrow title="Select Status">
            //     <SmallAvatar onClick={handleClickBadge}>
            //       <EmojiEmotionsRounded />
            //     </SmallAvatar>
            //   </Tooltip>
            // }
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                border: "3px dashed #ddd",
                boxShadow: "0px 0px 10px #ddd",
              }}
              alt=""
              src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344464.jpg"
            />
          </Badge>
        </CardMedia>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          sx={{ textAlign: "center" }}
          fullWidth
        >
          Upload Profile Photo
        </Button>
      </CardActions>
    </Card>
  );
}
