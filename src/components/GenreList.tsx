import useGenres, { Genre } from "@/hooks/useGenres";
import {
  Text,
  List,
  ListItem,
  Stack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  drawGenre?: boolean;
}

const GenreList = ({ onSelectGenre, selectedGenre, drawGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  {
    error && <Text>{error}</Text>;
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"3xl"} mb={3}>
        {drawGenre ? "Select Genre" : "Genres"}
      </Heading>
      <List style={{ listStyle: "none", padding: 0 }}>
        {data.map((genre) => (
          <ListItem paddingY={"3px"} key={genre.id}>
            <Stack align="center" direction="row" gap={0}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize={8}
                objectFit="cover"
              />
              <Button
                fontSize={"lg"}
                variant={"plain"}
                _hover={{ textDecoration: "underline" }}
                onClick={() => onSelectGenre(genre)}
                marginLeft="-4px"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "none"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </Stack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
