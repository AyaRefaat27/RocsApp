import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function MessageCard() {
  const cardData = useSelector((state) => state.card);
  return (
    <Box>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          title={cardData.category}
          subheader={cardData.title}
        ></CardHeader>
        <CardMedia
          component="img"
          height="194"
          image="https://www.filemail.com/images/marketing/upload-your-files.svg"
          // image="https://www.ilovepdf.com/storage/blog/42-1623231606-Add-image-to-PDF.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" sx={{ color: "#333" }}>
            {cardData.messageBody}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {cardData.messageFooter}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
              Contact Service Center
            </Button>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
              Go to Your Profile
            </Button>
            <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
              Visit Our Site
            </Button>
          </Box>
        </CardActions>
      </Card>

      <Button variant="contained" fullWidth sx={{ mt: 1, mb: 1 }}>
        {" "}
        Preview Message
      </Button>
    </Box>
  );
}
