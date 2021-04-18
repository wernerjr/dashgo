import { Box, Stack, HStack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

export default function Pagination(){
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"      
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent pageNumber={1} />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
      </HStack>
    </Stack>
  )
}