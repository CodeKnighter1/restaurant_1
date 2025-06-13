import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MapIcon, Check, ChevronsUpDown } from "lucide-react";
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
    }
  };

  return (
    <div>
      <header
        className={`flex justify-between items-center fixed w-full p-4 shadow-md top-0 z-50 bg-system bg-opacity-90 backdrop-blur-md transition-shadow ${isScrolled ? "shadow-lg" : "shadow-md"
          }`}
      >
        <div>
          <Link to="/">
            <h1 className="font-serif text-[25px]">EatUzbekistan.uz</h1>
          </Link>
        </div>

        <ul className="flex gap-6 sm:gap-10">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:underline underline-offset-4 text-sm sm:text-base"
            >
              {t("home")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("top-restaurants")}
              className="hover:underline underline-offset-4 text-sm sm:text-base"
            >
              {t("top_res")}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:underline underline-offset-4 text-sm sm:text-base"
            >
              {t("contact")}
            </button>
          </li>
        </ul>

        <div className="flex gap-2 sm:gap-3 items-center">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[120px] sm:w-[150px] justify-between text-xs sm:text-sm cursor-pointer"
              >
                {frameworks.find((f) => f.value === value)?.label || "Select language"}
                <ChevronsUpDown className="opacity-50 w-3 sm:w-4 h-3 sm:h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[120px] sm:w-[150px] p-0">
              <Command>
                <CommandInput placeholder="Tilni tanlang..." className="h-9 text-xs sm:text-sm" />
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={handleLanguageChange}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto w-3 sm:w-4 h-3 sm:h-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="relative">
            <Input
              placeholder="Search"
              className="w-[150px] sm:w-[250px] pl-8 sm:pl-10 text-xs sm:text-sm"
            />
            <CiSearch
              className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>
          <div className="cursor-pointer">
            <ModeToggle />
          </div>


          <Button variant="ghost" className="p-2" aria-label="Savatcha">
            <LuShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>

          <Button variant="ghost" className="p-2 cursor-pointer" onClick={() => setIsMapOpen(true)}>
            <MapIcon className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">{t("map_top")}</span>
          </Button>

          <MapModal open={isMapOpen} onClose={() => setIsMapOpen(false)} />

          <Link to="/auth">
            <Button variant="ghost" className="p-2 text-xs sm:text-sm cursor-pointer">
              {t("login")}
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;