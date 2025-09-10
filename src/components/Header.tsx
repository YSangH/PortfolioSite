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

// Types
interface NavigationItem {
  name: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Info", href: "#info-section" },
  { name: "Introduce", href: "#introduce-section" },
  { name: "Skills", href: "#skills-section" },
  { name: "Portfolio", href: "#portfolio-section" },
  { name: "Contact", href: "#contact-section" },
];

const HEADER_STYLES = {
  appBar: {
    backgroundColor: "#87CEEB",
    minHeight: "5vh",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    minHeight: "5vh",
  },
  logo: {
    mr: 2,
    marginLeft: "20px",
    display: { xs: "flex", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  mobileMenuButton: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
  desktopNavigation: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
    marginRight: "10px",
  },
  navButton: {
    my: 2,
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    display: "block",
    margin: "0px 20px 0px 20px",
  },
  drawer: {
    width: "200px",
    backgroundColor: "#87CEEB",
  },
  drawerContent: {
    width: 250,
  },
  closeButton: {
    marginRight: "50px",
    color: "#ffffff",
  },
  drawerItem: {
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
} as const;

// Mobile Drawer Component
const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navigationItems,
}) => {
  const handleDrawerClose = () => {
    onClose();
  };

  const handleNavClick = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        // 헤더 요소의 실제 높이를 동적으로 계산
        const header = document.querySelector('header') || document.querySelector('[role="banner"]');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    onClose(); // 드로어 닫기
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleDrawerClose}
      PaperProps={{ sx: HEADER_STYLES.drawer }}
    >
      <Box
        sx={HEADER_STYLES.drawerContent}
        role="presentation"
        onClick={handleDrawerClose}
        onKeyDown={handleDrawerClose}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            onClick={handleDrawerClose}
            sx={HEADER_STYLES.closeButton}
            aria-label="close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton 
                sx={HEADER_STYLES.drawerItem}
                onClick={() => handleNavClick(item.href.replace('#', ''))}
              >
                <ListItemText
                  primary={item.name}
                  sx={{ color: "text.primary" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

// Desktop Navigation Component
const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigationItems,
}) => {
  const handleNavClick = (sectionId: string) => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        // 헤더 요소의 실제 높이를 동적으로 계산
        const header = document.querySelector('header') || document.querySelector('[role="banner"]');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Box sx={HEADER_STYLES.desktopNavigation}>
      {navigationItems.map((item) => (
        <Button 
          key={item.name}
          sx={HEADER_STYLES.navButton}
          onClick={() => handleNavClick(item.href.replace('#', ''))}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );
};

// Main Header Component
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
    <AppBar position="sticky" sx={{ ...HEADER_STYLES.appBar, top: 0, zIndex: 11 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={HEADER_STYLES.toolbar}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" noWrap sx={HEADER_STYLES.logo}>
              Yu Sang Hyeon
            </Typography>
          </Link>

          {/* Mobile Menu Button */}
          <Box sx={HEADER_STYLES.mobileMenuButton}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Navigation */}
          <DesktopNavigation navigationItems={NAVIGATION_ITEMS} />
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navigationItems={NAVIGATION_ITEMS}
      />
    </AppBar>
  );
}

export default Header;
