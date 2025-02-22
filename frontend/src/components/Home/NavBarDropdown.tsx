import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../UI/button";
import { useTheme } from "@/components/theme-provider";

function NavBarDropdown() {
  const {theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 p-2 select-none">
        <DropdownMenuGroup>
          <DropdownMenuItem>Messages</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
          <DropdownMenuItem>Trips</DropdownMenuItem>
          <DropdownMenuItem>Wishlist</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div>
              {theme === "dark" ? (
                <button
                  onClick={() => {
                    setTheme("light");
                  }}
                >
                  Light Mode
                </button>
              ) : (
                <button
                  onClick={() => {
                    setTheme("dark");
                  }}
                >
                  Dark Mode
                </button>
              )}
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/about-us">About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavBarDropdown;
