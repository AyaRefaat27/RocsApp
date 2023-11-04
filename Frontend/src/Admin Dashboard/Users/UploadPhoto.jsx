// import styled from "@emotion/styled";
// import {
//   Button,
//   Card,
//   CardActionArea,
//   CardActions,
//   CardMedia,
// } from "@mui/material";
// import React, { useState } from "react";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// export default function UploadPhoto() {
//   return (
//     <Card sx={{ borderRadius: "25px", boxShadow: "0px 0px 10px #ddd" }}>
//       <CardActionArea
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "2",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <CardMedia
//           sx={{ height: "100% auto" }}
//           component="img"
//           image="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
//         />
//       </CardActionArea>
//       <CardActions>
//         <Button
//           size="medium"
//           color="primary"
//           sx={{ textAlign: "center" }}
//           fullWidth
//         >
//           Upload Profile Photo
//           <VisuallyHiddenInput
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoChange}
//           />
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
