import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import { EditNoteRounded, UploadRounded } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext.js";

import { FormGroup, FormControl, InputLabel, Input } from "@mui/material";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

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

export default function UserInfo() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  return (
    <>
      <Box height="100% auto">
        <Box
          sx={{
            margin: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
            image="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
            alt=""
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {user.name}
            </Typography>

            <Button
              size="small"
              component="label"
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
              }}
            >
              <UploadRounded />
              Upload Image
              <VisuallyHiddenInput type="file" />
            </Button>
          </CardContent>
        </Box>

        <Container injectFirst>
          <Typography variant="h4">Edit Information</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              name="name"
              value="aya"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              name="username"
              value="ayarefaat200"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              name="email"
              value="aya@gmail.com"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              name="phone"
              value="010372612168"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <Button
              size="large"
              component="label"
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
              }}
            >
              <EditNoteRounded />
              Edit User
            </Button>
          </FormControl>
        </Container>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "80%",
            margin: "1rem",
            padding: "1rem",
            borderRadius: "50px",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              User Information
            </Typography>
          </CardContent>

          <Box
            component="form"
            validate
            sx={{
              "& > :not(style)": {
                m: 2,
                width: "50ch",
              },
            }}
          >
            {user ? (
              <>
                <TextField
                  margin="normal"
                  id="outlined-controlled"
                  label="Name"
                  name="name"
                  value={user.name}
                />

                <TextField
                  margin="normal"
                  id="outlined-controlled"
                  label="Username"
                  name="username"
                  value={user.username}
                />

                <TextField
                  margin="normal"
                  id="outlined-controlled"
                  label="Email Address"
                  name="email"
                  value={user.email}
                />

                <TextField
                  margin="normal"
                  id="outlined-controlled"
                  label="Phone Number"
                  name="phone"
                  value={user.phone}
                />
              </>
            ) : (
              <Typography varient="h4" component="h1">
                Error In Displaying Data
              </Typography>
            )}
          </Box>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
              }}
              onClick={() => navigate("/setting")}
            >
              <EditNoteRounded />
              Edit
            </Button>
          </CardActions>
        </Card>
      </Box> */}
    </>
  );
}
