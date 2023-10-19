import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Button } from "./ui/Button";
import React from "react";

function Quantity() {
  const [val, setVal] = React.useState("1");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-2 w-[55px]" variant="outline">
          {val}
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-1">
        <DropdownMenuRadioGroup
        //   className="w-[45px]"
          value={val}
          onValueChange={setVal}
        >
          <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="4">4</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="6">6</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="7">7</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="8">8</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="9">9</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Quantity;
