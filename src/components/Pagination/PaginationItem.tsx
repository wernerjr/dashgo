import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export default function PaginationItem({ 
  isCurrent = false, 
  pageNumber,
  onPageChange
}: PaginationItemProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
      bg: 'pink.500',
      cursor: 'default'
      }}
    >
    {pageNumber}
    </Button>
  ): (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
      bg: 'gray.500',
      }}
      onClick={() => onPageChange(pageNumber)}
    >
    {pageNumber}
    </Button>
  ) 
}