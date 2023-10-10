import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import styled from "@emotion/styled";
import TextControll from "../Functions/textControll";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useDispatch } from "react-redux";
import { saveCardData } from "../Functions/cardSlice";

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
  const [messageFooter, setMessageFooter] = useState("");
  const dispatch = useDispatch();

  const handleMessageFooterChange = (event) => {
    setMessageFooter(event.target.value);
  };

  const handleStepFour = (event) => {
    event.preventDefault();

    const cardData = { messageFooter };
    dispatch(saveCardData(cardData));

    setMessageFooter("");
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
              borderBottom: "2px solid #0288D1",
              color: "#333",
            }}
          >
            {" "}
            Type Your End Message
          </Typography>

          <Box>
            <BorderColorRoundedIcon color="info" />
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
              placeholder="Enter your End Message..."
              rows={5}
              cols={40}
              value={messageFooter}
              onChange={handleMessageFooterChange}
            />
          </div>
          <TextControll />
        </Box>
        <Button type="submit" varient="outlined">
          Save <ArrowRightRoundedIcon />
        </Button>
      </Box>
    </>
  );
}
