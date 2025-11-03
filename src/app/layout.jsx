"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import React from "react";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "85px",
          justifyContent: "center",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "98px",
          alignItems: "center",
        },
      },
    },
  },
  palette: {
    primary: { main: "#223544" },
  },
  typography: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}