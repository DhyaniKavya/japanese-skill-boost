
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/jobs", label: "Jobs", icon: "💼" },
    { path: "/chat", label: "Chat", icon: "💬" },
    { path: "/guide", label: "Guide", icon: "📖" },
    { path: "/study", label: "Study", icon: "📚" },
    { path: "/bonusapps", label: "Apps", icon: "📱" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-red-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Nihongo Portal
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2",
                  location.pathname === item.path
                    ? "bg-red-100 text-red-700"
                    : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "p-2 rounded-lg text-lg transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-red-100"
                      : "hover:bg-red-50"
                  )}
                >
                  <span>{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
