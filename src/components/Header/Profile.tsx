import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (   
      <Box mr="4" textAlign="right">
        <Text>Werner Junior</Text>
        <Text color="gray.300" fontSize="small">
          werner.junior@outlook.com
        </Text>
      </Box>
      )}
    <Avatar size="md" name="Werner Junior" src="https://github.com/wernerjr.png"/>
  </Flex>
  );
}