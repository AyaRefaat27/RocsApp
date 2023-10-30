import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

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

export default function ImageUpload() {
  // Language
  const { t } = useTranslation();
  const languages = [
    {
      lang: "Arabic",
      code: "ar",
      dir: "rtl",
    },
    {
      lang: "English",
      code: "en",
    },
  ];

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Title");
  }, [currentLanguage, t]);
  return (
    <Card
      sx={{
        minWidth: 300,
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="./assets/images/Bold Modern Minimalist Gradient Technology Business Logo  (1).png"
          alt=""
        />
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          varient="outlined"
          sx={{ color: "#d1a981", pl: 1 }}
          startIcon={<CloudUploadIcon />}
        >
          {t("Upload Image")}
          <VisuallyHiddenInput type="file" sx={{ color: "#d1a981" }} />
        </Button>
      </CardActions>
    </Card>
  );
}
