import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <>
      <IconButton aria-label="cart" color="inherit" component={Link} to="/cart">
        <Badge
          badgeContent={4}
          max={999}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}
