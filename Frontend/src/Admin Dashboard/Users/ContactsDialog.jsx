// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Cookies from "js-cookie";
// import { useTranslation } from "react-i18next";
// import Tab from "@mui/material/Tab";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import { styled } from "@mui/material/styles";
// import { ContactPageRounded, ContactsRounded } from "@mui/icons-material";
// import AllContacts from "../Contacts/AllContacts";
// import AddUserContact from "./AddUserContact";
// import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import UserContacts from "./UserContacts";

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//   },
//   "& .MuiTabs-indicatorSpan": {
//     maxWidth: 30,
//     width: "100%",
//     backgroundColor: "#d1a981",
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: "#333",
//     fontWeight: "bold",
//     transition: "0.5s",
//     "&.Mui-selected": {
//       color: "#be9164",
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#be9164",
//     },
//   })
// );

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
// export default function ContactsDialog({ open, onClose, data }) {
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   // Language
//   const { t } = useTranslation();
//   const languages = [
//     {
//       lang: "Arabic",
//       code: "ar",
//       dir: "rtl",
//     },
//     {
//       lang: "English",
//       code: "en",
//     },
//   ];

//   const currentLanguageCode = Cookies.get("i18next") || "en";
//   const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

//   useEffect(() => {
//     document.body.dir = currentLanguage.dir || "ltr";
//     document.title = t("Title");
//   }, [currentLanguage, t]);

//   const handleClose = () => {
//     onClose();
//   };
//   return (
//     <>
//       <Dialog
//         sx={{ p: 2 }}
//         fullWidth
//         maxWidth="md"
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//         <DialogContent>
//           <Box
//             sx={{
//               // marginTop: "10px",
//               background: "#fff",
//               height: "100% auto",
//               p: 3,
//             }}
//           >
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <StyledTabs
//                 value={value}
//                 onChange={handleChange}
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//               >
//                 <StyledTab
//                   icon={<ContactPageRounded />}
//                   iconPosition="start"
//                   label={t("Contacts")}
//                   {...a11yProps(0)}
//                 />
//                 <StyledTab
//                   icon={<ContactsRounded />}
//                   iconPosition="start"
//                   label={t("Add Contact")}
//                   {...a11yProps(1)}
//                 />
//               </StyledTabs>
//             </Box>
//             {/* <pre>{JSON.stringify(data)}</pre>
//             <pre>{JSON.stringify(data.UserID)}</pre> */}

//             <CustomTabPanel value={value} index={0}>
//               <UserContacts contact={data} />
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//               {/* <AddUserContact user={data} /> */}
//               <AddUserContact user={data} />
//             </CustomTabPanel>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleClose}
//             varient="filled"
//             sx={{ color: "#be9164" }}
//           >
//             {t("Cancel")}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }
