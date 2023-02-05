import { Box, Heading, Text } from "@chakra-ui/react";

export default function HeaderComponent() {
  return (
    <Box as="section" pb="28">
      <Box textAlign={["left", "left", "center"]} color="gray.50" bg="orange.600" pt="50px" pb="198px" px="8">
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>Simple pricing for your businness</Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">Plans that are carefully crafted to suit you business. </Text>
      </Box>
    </Box>
  );
}