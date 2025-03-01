import { HStack, Image, Button } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onOpenGenres: () => void;
}

const NavBar = ({ onSearch, onOpenGenres }: Props) => {
  return (
    <HStack>
      <Button
        display={{ base: "block", lg: "none" }}
        onClick={onOpenGenres}
        colorScheme="green"
        minWidth="80px"
      >
        Genres
      </Button>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
