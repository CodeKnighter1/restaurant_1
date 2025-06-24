import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MapIcon, Check, ChevronsUpDown, Menu, X } from "lucide-react";
import MapModal from "./MapModal";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Navbar() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language || "en");
  const [isScrolled, setIsScrolled] = useState(false);

  const frameworks = [
    { value: "uz", label: "O'zbekcha" },
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
  ];

  const handleLanguageChange = (lng: string) => {
    setValue(lng);
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false); // mobil menyuni yopish
    }
  };

  return (
    <div>
      <header className={`fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md transition-shadow ${isScrolled ? "shadow-lg" : "shadow-md"}`}>
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/">
            <h1 className="font-serif text-[22px] sm:text-[25px]">EatUzbekistan.uz</h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 sm:gap-10 lg:gap-4">
            <li><button onClick={() => scrollToSection("home")} className="hover:underline underline-offset-4 text-sm sm:text-base">{t("home")}</button></li>
            <li><button onClick={() => scrollToSection("top-restaurants")} className="hover:underline underline-offset-4 text-sm sm:text-base">{t("top_res")}</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:underline underline-offset-4 text-sm sm:text-base">{t("contact")}</button></li>
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[120px] lg:w-[100px] sm:w-[150px] justify-between text-xs sm:text-sm">
                  {frameworks.find((f) => f.value === value)?.label || "Language"}
                  <ChevronsUpDown className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[120px] sm:w-[150px] p-0">
                <Command>
                  <CommandInput placeholder="Tilni tanlang..." className="h-9 text-sm" />
                  <CommandList>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={handleLanguageChange}
                        >
                          {framework.label}
                          <Check className={cn("ml-auto w-4 h-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <div className="relative">
              <Input placeholder="Search" className="w-[150px] lg:w-[180px] md:w-[140px] sm:w-[250px] pl-10 text-sm" />
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            </div>

            <ModeToggle />

            <Button variant="ghost" className="p-2"><LuShoppingCart className="w-5 h-5" /></Button>

            <Button variant="ghost" className="p-2" onClick={() => setIsMapOpen(true)}>
              <MapIcon className="w-4 h-4 mr-1" />
              <span className="text-sm">{t("map_top")}</span>
            </Button>

            <Link to="/auth">
              <Button variant="ghost" className="p-2 text-sm">{t("login")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-4 shadow-lg animate-slide-down">
            <ul className="flex flex-col gap-3">
              <li><button onClick={() => scrollToSection("home")} className="text-sm">{t("home")}</button></li>
              <li><button onClick={() => scrollToSection("top-restaurants")} className="text-sm">{t("top_res")}</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-sm">{t("contact")}</button></li>
            </ul>

            <div className="flex flex-col gap-3">
              <div className="relative">
                <Input placeholder="Search" className="w-full pl-10 text-sm" />
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-between text-sm w-full">
                    {frameworks.find((f) => f.value === value)?.label || "Language"}
                    <ChevronsUpDown className="w-4 h-4 ml-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Tilni tanlang..." className="h-9 text-sm" />
                    <CommandList>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={handleLanguageChange}
                          >
                            {framework.label}
                            <Check className={cn("ml-auto w-4 h-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <ModeToggle />

              <Button variant="ghost"><LuShoppingCart className="w-5 h-5" /></Button>

              <Button variant="ghost" onClick={() => setIsMapOpen(true)}>
                <MapIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">{t("map_top")}</span>
              </Button>

              <Link to="/auth">
                <Button variant="ghost" className="text-sm">{t("login")}</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Map modal */}
      <MapModal open={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </div>
  );
}

export default Navbar;
