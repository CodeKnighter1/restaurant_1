import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MapIcon, Check, ChevronsUpDown } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";
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

  const frameworks = [
    {
      value: "uz",
      label: "O'zbekcha",
    },
    {
      value: "en",
      label: "English",
    },
    {
      value: "ru",
      label: "Русский",
    },
  ];

  const handleLanguageChange = (lng) => {
    setValue(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <header className="flex justify-between items-center fixed w-full p-4 shadow-md top-0 z-50 bg-system bg-opacity-90 backdrop-blur-md">
        <div>
          <Link to={"/"}>
            <h1 className="font-serif text-[25px]">EatUzbekistan.uz</h1>
          </Link>
        </div>

        <ul className="flex gap-10">
          <li>
            <Link to="/" className="hover:underline underline-offset-4">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/top" className="hover:underline underline-offset-4">
              {t("top_res")}
            </Link>
          </li>
          <li className="hover:underline underline-offset-4 cursor-pointer">
            <Link to={"/contact"}>{t("contact")}</Link>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[150px] justify-between"
              >
                {frameworks.find((f) => f.value === value)?.label || "Select language"}
                <ChevronsUpDown className="opacity-50 w-4 h-4 ml-2" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-0">
              <Command>
                <CommandInput placeholder="Tilni tanlang..." className="h-9" />
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          handleLanguageChange(currentValue);
                          setOpen(false);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto",
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
            <Input placeholder="Search" className="w-[250px] pl-10" />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <ModeToggle />

          <Button variant="ghost" className="cursor-pointer" aria-label="Savatcha">
            <LuShoppingCart className="text-[20px]" />
          </Button>

          <Button className="cursor-pointer" variant="ghost" onClick={() => setIsMapOpen(true)}>
            <MapIcon className="w-4 h-4 mr-2" />
            {t("map_top")}
          </Button>

          <MapModal open={isMapOpen} onClose={() => setIsMapOpen(false)} />

          <Link to={'/auth'}>
            <Button variant="ghost" className="cursor-pointer">
              {t("login")}
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
