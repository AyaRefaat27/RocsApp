// import React, { useState } from "react";
// import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const companies = ["Facebook", "Google", "Microsoft"];

// export default function UserDetails() {
//   const [company, setCompany] = useState("");

//   const handleCompanyChange = (event) => {
//     setCompany(event.target.value);
//   };

//   return (
//     <Box
//       sx={{
//         borderRadius: "25px",
//         boxShadow: "0px 0px 10px #ddd",
//         p: 3,
//         height: "100% auto",
//       }}
//     >
//       <Typography gutterBottom variant="h4" component="div">
//         Add User Data
//       </Typography>

//       <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
//         {/* Name */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-name"
//               id="english_name"
//               name="english_name"
//               label="Full Name in English"
//               required
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-name"
//               name="arabic_name"
//               id="arabic_name"
//               label="Full Name in Arabic"
//               dir="rtl"
//               required
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         {/* Username & Email */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-email"
//               id="email"
//               name="email"
//               label="Email"
//               required
//               fullWidth
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-username"
//               name="username"
//               id="username"
//               label="Username"
//               required
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         {/* Password & Phone Number*/}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="given-password"
//               id="password"
//               name="password"
//               label="Create Password"
//               type="password"
//               required
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               autoComplete="phone"
//               id="phone"
//               name="phone"
//               label="Phone Number"
//               required
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         {/* Position & Company */}
//         <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Company</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={company}
//                 label="Company"
//                 onChange={handleCompanyChange}
//                 fullWidth
//               >
//                 {companies.map((item, index) => {
//                   return (
//                     <MenuItem value={item} key={index}>
//                       {item}
//                     </MenuItem>
//                   );
//                 })}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Box>

//       <Button size="medium" color="primary" type="submit">
//         Save
//       </Button>
//     </Box>
//   );
// }
