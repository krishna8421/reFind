"use client";

import { useState } from "react";
import { Switch } from "./ui/switch";
import BookmarkIcon from "./icons/bookmark-icon";
import { BiWorld } from "react-icons/bi";

const ModeSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onCheckedChange={setChecked}
      checkedIcon={<BookmarkIcon className="h-3 w-3" />}
      uncheckedIcon={<BiWorld className="h-4 w-4 text-white text-opacity-65" />}
    />
  );
};

export default ModeSwitch;
