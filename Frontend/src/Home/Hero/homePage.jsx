import styled from "@emotion/styled";
import { Box, Button, Container, Typography, createTheme } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/navbar";
import CustomButton from "./customButton";

export default function HomePage() {
  const theme = createTheme();
  const CustomBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(() => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/abstract-technological-background_23-2148897676.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "80vh",
        }}
      >
        <Container>
          <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#fff",
                  textAlign: "ceter",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                Welcome to QmmaTech
              </Typography>

              <Title variant="h1">Best Solution to your Company</Title>

              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#fff", my: 4 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam doloremque nihil, laudantium neque accusantium autem
                voluptas architecto tempora. repellendus?
              </Typography>
              {/* <CustomButton
                backgroundColor="#0f184c"
                color="#fff"
                // buttonText="More About Us"
                heroBtn={true}
              >
              </CustomButton> */}
              <Button variant="contained" color="primary">
                {" "}
                More about Us
              </Button>
            </Box>

            {/* <Box sx={{ flex: "1.25" }}>
              <img
                src="./assets/images/hero.png"
                alt=""
                style={{ maxWidth: "100%", marginBottom: "2rem" }}
              />
            </Box> */}
          </CustomBox>
        </Container>
      </Box>
    </>
  );
}
