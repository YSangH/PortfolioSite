"use client";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = ["Info", "Introduce", "Skills", "Portfolio", "Contact"];

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#87CEEB", minHeight: "10vh" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "2.5vh",
            minHeight: "10vh",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                marginLeft: "20px",
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Yu Sang Hyeon
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "10px",
            }}
          >
            {pages.map((page) => (
              <Link href={`/${page}`} key={page} passHref>
                <Button
                  sx={{
                    my: 2,
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                    display: "block",
                    margin: "0px 20px 0px 20px",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* 사이드바 (Drawer) 컴포넌트 */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: "200px", backgroundColor: "#87CEEB" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ marginRight: "50px", color: "#ffffff" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {pages.map((page) => (
              <ListItem key={page} disablePadding>
                <Link
                  href={`/${page}`}
                  passHref
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <ListItemButton
                    sx={{
                      "&:hover": {
                        backgroundColor: "#ffffff",
                      },
                    }}
                  >
                    <ListItemText
                      primary={page}
                      sx={{ color: "text.primary" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
