import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ImageUpload from "./imageUpload";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import styled from "@emotion/styled";
import SelectSocialMedia from "./selectSocialMedia";

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

export default function AddCompany() {
  const [field, setField] = useState("");

  const handleChange = (event) => {
    setField(event.target.value);
  };
  const navigate = useNavigate();

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
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        // spacing={2}
        spacing={{ xs: 1, sm: 2 }}
        useFlexGap
        flexWrap="wrap"
      >
        <Box>
          <ImageUpload />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              minWidth: 900,
              width: "100%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <table
            sx={{
              width: "100%",
            }}
          >
            <tr>
              <th>{t("Company Name")}</th>
              <td>
                <TextField
                  id="outlined-basic"
                  label={`${t("Company Name")}`}
                  variant="outlined"
                  fullWidth
                  sx={{ m: 1 }}
                />
              </td>
            </tr>

            <tr>
              <th>{t("Field")}</th>
              <td>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    {t("Field")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={field}
                    label={`${t("Field")}`}
                    onChange={handleChange}
                  >
                    <MenuItem value="programming">Programming</MenuItem>
                    <MenuItem value="engineer">Engineer</MenuItem>
                    <MenuItem value="food">Food</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>

            <tr>
              <th>{t("WhatsApp Number")}</th>
              <td>
                <TextField
                  id="outlined-basic"
                  label={`${t("WhatsApp Number")}`}
                  variant="outlined"
                  fullWidth
                  sx={{ m: 1 }}
                />
              </td>
            </tr>

            <tr>
              <th>{t("Address")}</th>
              <td>
                <TextField
                  id="outlined-basic"
                  label={`${t("Address")}`}
                  variant="outlined"
                  fullWidth
                  sx={{ m: 1 }}
                />
              </td>
            </tr>

            <tr>
              <th>{t("Country")}</th>
              <td>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    {t("Country")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={field}
                    label={`${t("Country")}`}
                    onChange={handleChange}
                  >
                    <MenuItem value="egypt">Egypt</MenuItem>
                    <MenuItem value="usa">USA</MenuItem>
                    <MenuItem value="japan">Japan</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>

            <tr>
              <th>{t("City")}</th>
              <td>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    {t("City")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={field}
                    label={`${t("City")}`}
                    onChange={handleChange}
                  >
                    <MenuItem value="cairo">Cairo</MenuItem>
                    <MenuItem value="london">London</MenuItem>
                    <MenuItem value="tokyo">Tokyo</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>

            <tr>
              <th>{t("Email")}</th>
              <td>
                <TextField
                  id="outlined-basic"
                  label={`${t("Email")}`}
                  variant="outlined"
                  fullWidth
                  sx={{ m: 1 }}
                />
              </td>
            </tr>

            <tr>
              <th>{t("Branches")}</th>
              <td>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    {t("Company Branches")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={field}
                    label={`${t("Branches")}`}
                    onChange={handleChange}
                  >
                    <MenuItem value="cairo">Cairo</MenuItem>
                    <MenuItem value="london">London</MenuItem>
                    <MenuItem value="tokyo">Tokyo</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>

            <tr>
              <th>{t("Information")}</th>
              <td>
                <Box>
                  <StyledTextarea rows={5} cols={60} sx={{ m: 1 }} />
                </Box>
              </td>
            </tr>
          </table>

          <Box
            sx={{
              //   width: "500px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outlined">{t("Save")}</Button>
            <Button variant="outlined" sx={{ ml: 1 }}>
              {t("Back")}
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
