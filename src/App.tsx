import { Grid, GridItem, HStack, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenreDrawer from "./components/GenreDrawer";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortorder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GenreDrawer
        isOpen={isOpen}
        onClose={onClose}
        onSelectGenre={(genre) => {
          setGameQuery({ ...gameQuery, genre });
          onClose(); // Close drawer after selection
        }}
        selectedGenre={gameQuery.genre}
      />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "190px 1fr",
        }}
        gap={2}
      >
        <GridItem area="nav" p={4}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
            onOpenGenres={onOpen}
          />
        </GridItem>
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: "block", lg: "block" }}
        >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} mb={4} paddingX={4}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortorder) =>
                setGameQuery({ ...gameQuery, sortorder })
              }
              selectedSortOrder={gameQuery.sortorder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
