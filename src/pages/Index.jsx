import React, { useState } from "react";
import { Box, Input, List, ListItem, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <Header />
      <VStack p={8}>
        <HStack>
          <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
          <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <List spacing={3} my={5} w="100%">
          {todos.map((todo, index) => (
            <ListItem as={motion.li} key={index} p={2} bg="gray.100" borderRadius="md" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <HStack justify="space-between">
                <Box>{todo}</Box>
                <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box as="footer" width="full" p={5} borderTopWidth="1px" borderColor="gray.200">
        <Text align="center" fontSize="sm">
          &copy; {new Date().getFullYear()} Todo App. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Index;
