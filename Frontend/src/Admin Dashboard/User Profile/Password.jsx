// import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export default function Password() {

//   const storedData = localStorage.getItem("User");
//   const userInfo = JSON.parse(storedData);
//   const userID = userInfo[0].UserID;

//   //Update User
//   const updateUser = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3002/api/user?userID=${userID}`, // Replace with your update user API endpoint
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formValues),
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         console.log("User data updated successfully:", data);
//         // You can update the user state here to reflect the changes in UI
//       } else {
//         console.error("Error updating user:", data.message);
//       }
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   return (
//     <>
//       <Typography gutterBottom variant="h4" component="div">
//         Change Your Password
//       </Typography>

//       <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
//         {/* Name */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-password"
//               id="password"
//               name="password"
//               label="New Password"
//               type="password"
//               required
//               fullWidth
//               onChange={handleInputChange}
//               value={formValues.UserPassword}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-password"
//               id="password"
//               name="password"
//               label="Retype Password"
//               type="password"
//               required
//               fullWidth
//               onChange={handleInputChange}
//               value={formValues.UserPassword}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       <Button size="medium" color="primary" type="submit" onClick={updateUser}>
//         Save Changes
//       </Button>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { Box, Button, Grid, TextField, Typography } from "@mui/material";

// export default function Password() {
//   const [UserPassword, setUserPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordsMatch, setPasswordsMatch] = useState(true);

//   const storedData = localStorage.getItem("User");
//   const userInfo = JSON.parse(storedData);
//   const userID = userInfo[0].UserID;

//   const handlePasswordChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "UserPassword") {
//       setUserPassword(value);
//     } else if (name === "confirmPassword") {
//       setConfirmPassword(value);
//     }
//   };

//   const saveChanges = async () => {
//     if (UserPassword === confirmPassword) {
//       try {
//         const response = await fetch(
//           `http://localhost:3002/api/user?userID=${userID}`, // Replace with your update user API endpoint
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ UserPassword }),
//           }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           alert("User data updated successfully:", data);
//           console.log("User data updated successfully:", data);
//           // You can update the user state here to reflect the changes in UI
//         } else {
//           alert("Error updating user:", data.message);
//           console.error("Error updating user:", data.message);
//         }
//       } catch (error) {
//         console.error("Error updating user:", error);
//       }

//       // Reset the password fields after saving changes
//       setUserPassword("");
//       setConfirmPassword("");
//       setPasswordsMatch(true);
//     } else {
//       setPasswordsMatch(false);
//     }
//   };

//   return (
//     <>
//       <Typography gutterBottom variant="h4" component="div">
//         Change Your Password
//       </Typography>

//       <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-password"
//               id="password"
//               name="UserPassword"
//               label="New Password"
//               type="password"
//               required
//               fullWidth
//               value={UserPassword}
//               onChange={handlePasswordChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               autoComplete="given-password"
//               id="confirmPassword"
//               name="confirmPassword"
//               label="Retype Password"
//               type="password"
//               required
//               fullWidth
//               value={confirmPassword}
//               error={!passwordsMatch}
//               onChange={handlePasswordChange}
//               helperText={!passwordsMatch && "Passwords do not match"}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       <Button size="medium" color="primary" onClick={saveChanges}>
//         Save Changes
//       </Button>
//     </>
//   );
// }

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Password() {
  const [UserPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const storedData = localStorage.getItem("User");
  const userInfo = JSON.parse(storedData);
  const userID = userInfo[0].UserID;

  const handlePasswordChange = async () => {
    if (UserPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulated API call to update the password in the database
    try {
      const response = await fetch(
        `http://localhost:3002/api/user?userID=${userID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ UserPassword }),
        }
      );

      if (response.ok) {
        // Password updated successfully
        // You can handle success here (e.g., show a success message)
        console.log("Password updated successfully");
        alert("Password updated successfully");
      } else {
        // Handle error scenario
        setError("Failed to update password");
        alert("Failed to update password");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setError("Failed to update password");
      alert("Failed to update password");
    }
  };

  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Change Your Password
      </Typography>

      <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-password"
              id="password"
              name="password"
              label="New Password"
              type="password"
              required
              fullWidth
              value={UserPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              autoComplete="given-password"
              id="confirmPassword"
              name="confirmPassword"
              label="Retype Password"
              type="password"
              required
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={error.length > 0}
              helperText={error}
            />
          </Grid>
        </Grid>
      </Box>

      <Button
        size="medium"
        color="primary"
        type="button"
        onClick={handlePasswordChange}
      >
        Save Changes
      </Button>
    </>
  );
}
