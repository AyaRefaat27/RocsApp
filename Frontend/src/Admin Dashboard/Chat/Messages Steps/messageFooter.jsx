import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import styled from "@emotion/styled";
import TextControll from "../Functions/textControll";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useDispatch } from "react-redux";
import { updateData } from "../Functions/cardSlice";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const StyledTextarea = styled.textarea`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #ddd;
  }
`;

export default function MessageFooter() {
  //Language
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

  //Message
  const [messageFooter, setMessageFooter] = useState("");
  const dispatch = useDispatch();

  const handleMessageFooterChange = (event) => {
    setMessageFooter(event.target.value);
  };

  const handleStepFour = (event) => {
    event.preventDefault();

    const cardData = { messageFooter };

    localStorage.setItem("formData", JSON.stringify(cardData));
    dispatch(updateData(cardData));

    // setMessageFooter("");
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleStepFour}
        sx={{
          p: 1,
          mt: 2,
          mb: 2,
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px #ddd",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "10px",
          }}
        >
          <Typography
            varient="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d1a981",
              color: "#333",
            }}
          >
            {" "}
            {t("Type Your Message")}
          </Typography>

          <Box>
            <BorderColorRoundedIcon sx={{ color: "#be9164" }} />
          </Box>
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            columnGap: "0.5rem",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <StyledTextarea
              placeholder={t("Enter your Message")}
              rows={5}
              cols={40}
              value={messageFooter}
              onChange={handleMessageFooterChange}
            />
          </div>
        </Box>
        <Button type="submit" sx={{ color: "#be9164" }}>
          {t("Save")} <ArrowRightRoundedIcon />
        </Button>
      </Box>
    </>
  );
}
