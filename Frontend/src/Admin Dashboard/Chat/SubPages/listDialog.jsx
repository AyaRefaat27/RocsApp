import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function ListDialog({ open, onClose, onSave }) {
  const [subheader, setSubheader] = useState("");
  const [itemName, setItemName] = useState("");
  const [sublistItemName, setSublistItemName] = useState("");
  const [sublist, setSublist] = useState([]);

  const theme = createTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubheaderChange = (event) => {
    setSubheader(event.target.value);
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSublistItemNameChange = (event) => {
    setSublistItemName(event.target.value);
  };

  const handleAddSublistItem = () => {
    setSublist((prevSublist) => [...prevSublist, sublistItemName]);
    setSublistItemName("");
  };

  const handleSaveList = () => {
    const list = {
      subheader,
      items: [itemName],
      sublist: [...sublist],
    };
    onSave(list);
    setSubheader("");
    setItemName("");
    setSublist([]);
  };

  const handleClose = () => {
    onClose();
    setSubheader("");
    setItemName("");
    setSublist([]);
  };

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

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Title");
  }, [currentLanguage, t]);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{ cursor: "move" }}>
          {t("Create Your Bot Lists")}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            {t("ChatBot List")}
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <OutlinedInput
                    value={subheader}
                    onChange={handleSubheaderChange}
                    id="outlined-adornment-weight"
                    required
                    startAdornment={
                      <InputAdornment position="start">
                        {t("ChatBot Name")}:
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={itemName}
                    onChange={handleItemNameChange}
                    required
                    startAdornment={
                      <InputAdornment position="start">
                        {t("List Item Name")}:
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "row",
                }}
              >
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={sublistItemName}
                    onChange={handleSublistItemNameChange}
                    required
                    startAdornment={
                      <InputAdornment position="start">
                        {t("List Sub-Item Name")}:
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button
                  varient="outlined"
                  sx={{ m: 1, color: "#be9164" }}
                  onClick={handleAddSublistItem}
                  disabled={!sublistItemName}
                >
                  {t("Add Sub-Item")}
                </Button>

                {sublist.map((item, index) => {
                  return (
                    <div key={index} sx={{ m: 1 }}>
                      {item}
                    </div>
                  );
                })}
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            varient="filled"
            sx={{ color: "#be9164" }}
          >
            {t("Cancel")}
          </Button>
          <Button
            onClick={handleSaveList}
            disabled={!subheader || !itemName}
            varient="outlined"
            sx={{ color: "#be9164" }}
          >
            {t("Save")}
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Create Your Bot Lists
        </DialogTitle>
        <DialogContent>
          <DialogContentText>ChatBot List</DialogContentText>

          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <OutlinedInput
                  value={subheader}
                  onChange={handleSubheaderChange}
                  id="outlined-adornment-weight"
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      ChatBot Name:
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={itemName}
                  onChange={handleItemNameChange}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      List Item Name:
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <FormControl sx={{ m: 1 }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={sublistItemName}
                  onChange={handleSublistItemNameChange}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      List Sub-Item Name:
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                varient="contained"
                sx={{ m: 1 }}
                onClick={handleAddSublistItem}
                disabled={!sublistItemName}
              >
                Add Sub-Item
              </Button>

              {sublist.map((item, index) => {
                return (
                  <div key={index} sx={{ m: 1 }}>
                    {item}
                  </div>
                );
              })}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} varient="filled">
            Cancel
          </Button>
          <Button
            onClick={handleSaveList}
            disabled={!subheader || !itemName}
            varient="outlined"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
