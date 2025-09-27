import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  StackDivider,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const CreatePage = () => {
  return (
    <Container maxW={"container.sm"} pt={50}>
      <VStack
        divider={<StackDivider borderColor={"gray.200"} />}
        spacing={8}
        align={"stretch"}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input placeholder="Product Name" />
            <Input placeholder="Price" />
            <Input placeholder="image url" />
            <Button w={"full"}>Add New Button</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
