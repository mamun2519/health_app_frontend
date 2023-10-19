"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useMyNotificationQuery } from "@/redux/api/notificationApi";
import { InputLabel } from "@mui/material";
import moment from "moment";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { setToCart } from "@/redux/Slice/cart";
import { useMyCartQuery } from "@/redux/api/cartApi";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Notification({
  anchorEl,
  setAnchorEl,
  open,
  handleClick,
  handleClose,
}: any) {
  const dispatch = useAppDispatch();

  const { data: cart } = useMyCartQuery({ limit: 100, page: 1 });
  console.log(cart);
  const { data } = useMyNotificationQuery({ limit: 100, page: 1 });

  return (
    <React.Fragment>
      <div className=" flex">
        <Link href="/cart">
          <Box sx={{ margin: "4px" }}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart?.length} color="info">
                <ShoppingCartIcon className="text-[#d1001c]" />
              </StyledBadge>
            </IconButton>
          </Box>
        </Link>
        <Box>
          <Tooltip title="Notification">
            <IconButton
              onClick={handleClick}
              size="small"
              // sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={data?.length} color="info">
                  <CircleNotificationsIcon className="text-[#d1001c]" />
                </StyledBadge>
              </IconButton>
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="w-[400px] h-[400px] overflow-auto ">
          {data?.map(
            (notification: {
              message: string;
              id: string;
              createdAt: string;
            }) => (
              <MenuItem key={notification.id}>
                {/* <Avatar /> Profile */}
                <div className="h-16 border-b px-4">
                  <InputLabel id="demo-customized-select-label">
                    {notification.message}
                  </InputLabel>
                  <div className="mt-2">
                    <InputLabel id="demo-customized-select-label">
                      {moment(notification.createdAt).startOf("hour").fromNow()}
                    </InputLabel>
                  </div>
                </div>
              </MenuItem>
            )
          )}
        </div>
      </Menu>
    </React.Fragment>
  );
}
