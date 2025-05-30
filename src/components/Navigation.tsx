import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
const Navigation = () => {
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "Home",
    icon: "🏠",
    badge: null
  }, {
    path: "/jobs",
    label: "Jobs",
    icon: "💼",
    badge: "Hot"
  }, {
    path: "/chat",
    label: "AI Chat",
    icon: "💬",
    badge: "New"
  }, {
    path: "/guide",
    label: "Guide",
    icon: "📖",
    badge: null
  }, {
    path: "/study",
    label: "Study",
    icon: "📚",
    badge: null
  }, {
    path: "/bonusapps",
    label: "Apps",
    icon: "📱",
    badge: null
  }];
  return <nav className="bg-white/95 backdrop-blur-md border-b border-red-100 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-[24px] py-[11px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <span className="text-3xl group-hover:animate-pulse">🌸</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-700 bg-clip-text text-transparent">
                Nihongo Portal
              </span>
              <span className="text-xs text-gray-500 font-medium">Learn Japanese Faster</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <div key={item.path} className="relative">
                <Link to={item.path} className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 group relative overflow-hidden", location.pathname === item.path ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg" : "text-gray-600 hover:text-red-600 hover:bg-red-50")}>
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  
                  {/* Hover Effect */}
                  {location.pathname !== item.path && <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />}
                </Link>
                
                {/* Badge */}
                {item.badge && <Badge variant="secondary" className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-1.5 py-0.5 animate-pulse">
                    {item.badge}
                  </Badge>}
              </div>)}
            
            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link to="/chat" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                <span>Try AI Chat</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center space-x-1">
              {navItems.map(item => <div key={item.path} className="relative">
                  <Link to={item.path} className={cn("p-2 rounded-xl text-lg transition-all duration-200 relative group", location.pathname === item.path ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg scale-110" : "hover:bg-red-50 hover:scale-105")}>
                    <span className="group-hover:animate-bounce inline-block">
                      {item.icon}
                    </span>
                  </Link>
                  
                  {/* Mobile Badge */}
                  {item.badge && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;