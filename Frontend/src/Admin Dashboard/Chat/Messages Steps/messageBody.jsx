import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import styled from "@emotion/styled";
import TextControll from "../Functions/textControll";
import { useDispatch } from "react-redux";
import { saveCardData } from "../Functions/cardSlice";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
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

export default function MessageBody() {
  const [messageBody, setMessageBody] = useState("");
  const dispatch = useDispatch();

  const handleMessageBodyChange = (event) => {
    setMessageBody(event.target.value);
  };

  const handleStepThree = (event) => {
    event.preventDefault();

    const cardData = { messageBody };
    dispatch(saveCardData(cardData));

    setMessageBody("");
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleStepThree}
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
            Type Your Message
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
              placeholder="Enter your Message..."
              rows={5}
              cols={40}
              value={messageBody}
              onChange={handleMessageBodyChange}
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
