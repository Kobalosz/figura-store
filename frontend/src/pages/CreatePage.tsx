import React from "react";
import { useState } from "react";
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
import { useProductStore } from "../store/productStore";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { addProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await addProduct(newProduct);
    console.log({ success: success, message: message });
  };

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
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="image url"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button w={"full"} onClick={handleAddProduct}>
              Add New Button
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
