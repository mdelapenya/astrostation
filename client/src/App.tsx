import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Backgrounds } from "@Components/Backgrounds/utils";
import { HomePage } from "@Pages/Homepage";
import { SideNav } from "@Components/Nav/SideNav";
import { useDarkToggleStore } from "@Store";
import { Toaster } from "react-hot-toast";

enum backgrounds {
  CITY,
  STARS,
  DOTS,
  SNOW,
  FADE,
  GRADIENT,
}

function App() {
  const isDark = useDarkToggleStore((state) => state.isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      <Backgrounds backgrounds={backgrounds} />
      <div className="fixed inset-0 overflow-auto">
        <Toaster />
        <SideNav />
        <Routes>
          <Route path="/" element={<HomePage backgrounds={backgrounds} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
