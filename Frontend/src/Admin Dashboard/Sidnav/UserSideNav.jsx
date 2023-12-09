import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import {
  FactoryRounded,
  ExpandLess,
  ExpandMore,
  AccountTreeRounded,
  ContactEmergencyRounded,
  HomeWorkRounded,
  PhonelinkSetupRounded,
  ViewQuiltRounded,
  LowPriorityRounded,
  BoltRounded,
  SpeakerNotesRounded,
  KeyboardRounded,
  SpeedRounded,
  TabRounded,
  NearMeRounded,
  AssignmentRounded,
  BuildRounded,
  ConnectWithoutContactRounded,
  GroupRounded,
  SupervisorAccountRounded,
  SubscriptionsRounded,
  LogoutRounded,
  NotificationsRounded,
  WorkspacesRounded,
  SupervisedUserCircleRounded,
  FingerprintRounded,
} from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import { useNavigate } from "react-router-dom";
import { useDasboardApp } from "../../dashboardApp";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Avatar, Fade, Menu, MenuItem } from "@mui/material";
import { green } from "@mui/material/colors";

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export default function UserSideNav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useDasboardApp((state) => state.dopen);

  // Close
  const updateOpen = useDasboardApp((state) => state.updateOpen);
  const dopen = useDasboardApp((state) => state.dopen);
  const handleClose = () => updateOpen(!dopen);

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

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Title");
  }, [currentLanguage, t]);

  const SideBarMenus = [
    {
      title: "Dashboard",
      icon: <ViewQuiltRounded />,
      // icon: "icon-grid",
      path: "/user_dashboard",
    },

    {
      title: "Business Account",
      icon: <ContactEmergencyRounded />,
      // icon: "icon-briefcase",
      path: "/#",
    },

    {
      title: "Chatbot",
      // icon: "icon-bubble",
      icon: <AccountTreeRounded />,
      path: "/chatbot",
      closeMenu: handleClose,
      nestedItems: [
        {
          title: "Bot Setup",
          icon: <PhonelinkSetupRounded />,
          path: "#",
        },

        {
          title: "SubMenus Order",
          icon: <LowPriorityRounded />,
          path: "#",
        },

        {
          title: "Special Actions",
          icon: <BoltRounded />,
          path: "#",
        },

        {
          title: "General Bot Messages",
          icon: <SpeakerNotesRounded />,
          path: "#",
        },

        {
          title: "Keywords",
          icon: <KeyboardRounded />,
          path: "#",
        },

        {
          title: "Bot Settings",
          icon: <SettingsSuggestRoundedIcon />,
          path: "#",
        },

        {
          title: "Test and Launch",
          icon: <SpeedRounded />,
          path: "#",
        },
      ],
    },

    {
      title: "Campaign",
      icon: <CampaignRoundedIcon />,
      path: "#",
    },

    {
      title: "Templates",
      icon: <TabRounded />,
      // icon: <TopicRounded />,
      path: "#",
    },

    {
      title: "Send Message",
      icon: <NearMeRounded />,
      // icon: <MessageRounded />,
      path: "#",
    },

    {
      title: "Reports",
      icon: <AssignmentRounded />,
      // icon: <ReportRounded />,
      path: "#",
    },

    {
      title: "Alerts",
      icon: <NotificationsRounded />,
      path: "#",
    },

    {
      title: "WorkSpace",
      icon: <WorkspacesRounded />,
      path: "#",
    },

    {
      title: "User Profile",
      icon: <SupervisedUserCircleRounded />,
      path: "/profile",
    },

    {
      title: "Tools",
      icon: <BuildRounded />,
      path: "#",
    },

    {
      title: "Logout",
      icon: <LogoutRounded />,
      // icon: "icon-logout",
      path: "/login",
    },
  ];

  //Selected Nested Item
  const [selectedNestedItem, setSelectedNestedItem] = useState(null);

  const handleNestedItemClick = (nestedItem) => {
    setSelectedNestedItem(nestedItem);
  };

  // Open Nested List
  const [openList, setOpenList] = useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box height={40} />
        <Drawer
          variant="permanent"
          open={open}
          anchor={
            localStorage.getItem("language") === "English" ? "left" : "right"
          }
        >
          <DrawerHeader>
            <IconButton>
              <ArrowCircleRightRoundedIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {SideBarMenus.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  disableGutters
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                  onClick={item.closeMenu}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      navigate(item.path);
                      handleClick();
                    }}
                    selected={window.location.pathname === item.path}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: "0",
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                        color: "#ad7f51",
                      }}
                    >
                      <Tooltip title={t(`${item.title}`)}>{item.icon}</Tooltip>
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        opacity: open ? 1 : 0,
                        textAlign: open ? "initial" : "flex-end",
                        mr: open ? 3 : "auto",
                      }}
                      primary={t(`${item.title}`)}
                    />
                    {item.nestedItems && item.nestedItems.length > 0 ? (
                      openList ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItemButton>

                  {/* Nested List */}
                  {item.nestedItems && item.nestedItems.length > 0 ? (
                    <Collapse in={openList} timeout="auto" unmountOnExit>
                      <List>
                        {item.nestedItems.map((nestedMenu, nestedIndex) => {
                          return (
                            <ListItem
                              key={nestedIndex}
                              disableGutters
                              disablePadding
                              sx={{
                                display: "block",
                              }}
                            >
                              <ListItemButton
                                // // key={nestedIndex}
                                // // onClick={() => navigate(nestedMenu.path)}
                                sx={{ pl: 2, gap: 2 }}
                                onClick={() => {
                                  handleNestedItemClick(nestedMenu);
                                  navigate(nestedMenu.path);
                                }}
                                selected={
                                  window.location.pathname === nestedMenu.path
                                }
                              >
                                <Tooltip
                                  title={t(`${nestedMenu.title}`)}
                                  placement="right"
                                  arrow
                                  disableFocusListener
                                  disableTouchListener
                                >
                                  <ListItemIcon
                                    sx={{
                                      fontSize: "16px",
                                      paddingInlineStart: 5,
                                      gap: 2,
                                    }}
                                  >
                                    {nestedMenu.icon}
                                  </ListItemIcon>
                                </Tooltip>
                                <ListItemText
                                  primary={t(`${nestedMenu.title}`)}
                                  sx={{
                                    fontSize: "16px",
                                    paddingInlineEnd: 10,
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  ) : null}
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
