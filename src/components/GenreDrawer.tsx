import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import GenreList from "./GenreList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectGenre: (genre: any) => void;
  selectedGenre: any;
}

const GenreDrawer = ({
  isOpen,
  onClose,
  onSelectGenre,
  selectedGenre,
}: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
            drawGenre
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default GenreDrawer;
