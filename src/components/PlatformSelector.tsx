import React from "react";
import { Platform } from "../hooks/useGames";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronCompactDown, BsChevronRight } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
    // <select
    //     className="form-select"
    //     onChange={(event) => setCategory(event.target.value)}
    //   >
    //     <option value=""></option>
    //     {platforms.map(platform => <option value={platform.slug}>{platform.name}</option>)}
    //   </select>
  );
};

export default PlatformSelector;
