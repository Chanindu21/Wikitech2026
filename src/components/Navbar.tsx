import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/apparaten", label: "Apparaten" },
  { to: "/over", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">⚡ Wiki Tech</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                location.pathname === link.to || (link.to !== "/" && location.pathname.startsWith(link.to))
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
