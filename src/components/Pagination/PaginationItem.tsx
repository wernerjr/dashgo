import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export default function PaginationItem({ 
  isCurrent = false, 
  pageNumber 
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
    >
    {pageNumber}
    </Button>
  ) 
}