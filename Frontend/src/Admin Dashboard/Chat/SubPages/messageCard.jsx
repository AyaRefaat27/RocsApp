import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function MessageCard() {
  const cardData = useSelector((state) => state.card);
  const buttonsData = useSelector((state) => state.data);
  // const navigate = useNavigate();
  return (
    <Box>
      <Typography varient="body1" sx={{ p: 1 }}>
        {" "}
        Build Your Message
      </Typography>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title={cardData.category} subheader={cardData.title} />

        {/* Text */}
        {cardData.dataType === "text" && (
          <Typography variant="body1" sx={{ color: "#333" }}>
            {cardData.textValue}
          </Typography>
        )}

        {/* Photo */}
        {cardData.dataType === "photo" && (
          <Box>
            {cardData.photoValue && (
              <CardMedia
                component="img"
                height="194"
                image={URL.createObjectURL(cardData.photoValue)}
                alt=" Selected Image"
              />
            )}
          </Box>
        )}

        {/* Video */}
        {cardData.dataType === "video" && (
          <Box>
            {cardData.videoValue && (
              <CardMedia
                component="video"
                height="194"
                controls
                image={URL.createObjectURL(cardData.videoValue)}
                alt=" Selected Video"
              />
            )}
          </Box>
        )}

        <CardContent>
          <Box>
            <Typography variant="body1" sx={{ color: "#333" }}>
              {cardData.messageBody}
            </Typography>
          </Box>
        </CardContent>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {cardData.messageFooter}
          </Typography>
        </Box>

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
            {buttonsData.map((button, index) => {
              return (
                <Button
                  fullWidth
                  key={index}
                  variant={button.variant}
                  href={button.path}
                  size={button.size}
                  sx={{ mt: 1, mb: 1 }}
                >
                  {button.text}
                </Button>
              );
            })}
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
