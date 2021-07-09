import { Box, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number){
  return [ ...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1;
  })
  .filter(page => page > 0);
}

export default function Pagination({ 
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage = 5,
  onPageChange,
 }:PaginationProps){

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) 
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) 
    : [];

  const totalPageResults = currentPage * registersPerPage;

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"      
    >
      <Box>
        <strong>{(currentPage - 1) * registersPerPage}</strong> - <strong>{totalPageResults > totalCountOfRegisters ? totalCountOfRegisters : totalPageResults}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            { currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width="8" textAlign="center" >...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        })}

        <PaginationItem pageNumber={currentPage} onPageChange={onPageChange} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage  && (
              <Text color="gray.300" width="8" textAlign="center" >...</Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
        </>
        )}

      </Stack>
    </Stack>
  )
}