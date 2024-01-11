"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, logOut } from "@/services/auth.Services";
import { setUser } from "@/redux/Slice/user";
import { getFromLocalStorage } from "@/utils/local-storage";
import Notification from "../ui/Notificaiton";
import LogoutBtn from "../ui/LogoutBtn";
import { USER_ROLE } from "@/enums/user";
import AuthModel from "../dialog/AuthModel";
const pages = [
  {
    link: "/bloodDonor/all",
    level: "Blood Donor",
  },
  {
    link: "/doctor",
    level: "Doctor",
  },
  {
    link: "/doctor/service",
    level: "Service",
  },
  {
    link: "/dashboard",
    level: "Dashboard",
  },
];
const notUser = [
  {
    link: "/bloodDonor/all",
    level: "Blood Donor",
  },
  {
    link: "/doctor",
    level: "Doctor",
  },
  {
    link: "/doctor/service",
    level: "Service",
  },
];

function Header() {
  const [authModelOpen, setAuthModelOpen] = React.useState(false);

  const handleAuthModelClickOpen = () => {
    setAuthModelOpen(true);
  };

  const handleAuthModelClose = () => {
    setAuthModelOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const path = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const userData: any = getFromLocalStorage(authKey);

  if (userData) {
    const { userId, email, role } = getUserInfo() as {
      userId: string;
      email: string;
      role: string;
    };

    dispatch(setUser({ userId, email, role }));
  }
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logOut();
    dispatch(setUser({ userId: null, email: null, role: null }));
  };
  // model open handle
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAuthModelOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AppBar
        style={{
          // background: "#30029010",
          color: "#black",
          // transition: "background-color 0.3s ease",
        }}
        // position="fixed"
        className=" bg-white z-30 shadow-none  border-b-2 "
      >
        <Container className=" max-w-7xl mx-auto  px-0   ">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Link href="/">
              <p className="text-xl  font-bold text-gray-900  hidden md:block lg:block  ">
                {" "}
                He<span className="text-[#d1001c]">alth</span> Care
              </p>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", justifyContent: "center" },
              }}
              color="black"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {user?.role
                  ? pages.map((page) => (
                      <MenuItem key={page.level} onClick={handleCloseNavMenu}>
                        <Typography
                          justifyContent="center"
                          className="text-gray-900"
                        >
                          <Link
                            href={page?.link}
                            // className={` ${
                            //   path == page.link ? "bg-red-500" : "text-[#2196f3]"
                            // } font-bold mt-1`}
                          >
                            {" "}
                            {page.level}
                          </Link>
                        </Typography>
                      </MenuItem>
                    ))
                  : notUser.map((page) => (
                      <MenuItem key={page.level} onClick={handleCloseNavMenu}>
                        <Typography
                          justifyContent="center"
                          className="text-gray-900"
                        >
                          <Link
                            href={page?.link}
                            // className={` ${
                            //   path == page.link ? "bg-red-500" : "text-[#2196f3]"
                            // } font-bold mt-1`}
                          >
                            {" "}
                            {page.level}
                          </Link>
                        </Typography>
                      </MenuItem>
                    ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              // variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
            >
              <Link href="/">
                <p className="text-xl  font-bold text-gray-900   md:hidden lg:hidden ">
                  {" "}
                  He<span className="text-[#d1001c]">alth</span> Care
                </p>
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {user?.role
                ? pages.map((page) => (
                    <Button
                      key={page.level}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        pr: 2,
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                      }}
                      className={`  ${
                        path == page.link
                          ? "bg-[#d1001c] text-white  flex justify-center"
                          : ""
                      }: hover:text-[#d1001c]`}
                    >
                      <Link className="pl-1" href={page?.link}>
                        {" "}
                        {page.level}
                      </Link>
                    </Button>
                  ))
                : notUser.map((page) => (
                    <Button
                      key={page.level}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        pr: 2,
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                      }}
                      className={`  ${
                        path == page.link
                          ? "bg-[#d1001c] text-white  flex justify-center"
                          : ""
                      }: hover:text-[#d1001c]`}
                    >
                      <Link className="pl-1" href={page?.link}>
                        {" "}
                        {page.level}
                      </Link>
                    </Button>
                  ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              {user?.role && (
                <>
                  <div className=" flex w-full  ">
                    {/* Mail  */}
                    {/* <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge badgeContent={4} color="error">
                        <MailIcon className="text-[#d1001c]" />
                      </Badge>
                    </IconButton> */}

                    {/* <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon className="text-[#d1001c]" />
                  </Badge>
                </IconButton> */}

                    <Notification
                      anchorEl={anchorEl}
                      setAnchorEl={setAnchorEl}
                      open={open}
                      handleClick={handleClick}
                      handleClose={handleClose}
                    />
                  </div>

                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "55px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <div>
                        <Link href="/dashboard">
                          <Typography className="mt-2" textAlign="center">
                            Dashboard
                          </Typography>
                        </Link>
                        <button onClick={() => handleLogout()}>
                          <Typography className="mt-2" textAlign="center">
                            Logout
                          </Typography>
                        </button>
                      </div>
                    </MenuItem>
                  </Menu>
                </>
              )}
              <div className=" flex  items-center px-6 lg:px-0 xl:px-0 md:px-0">
                <LogoutBtn />
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {authModelOpen && !user.role && (
        <AuthModel open={authModelOpen} handleClose={handleAuthModelClose} />
      )}
    </div>
  );
}
export default Header;
