import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const WelcomePage = ({ username }) => {
  const handleButtonClick = (action) => {
    // Handle button click based on action (e.g., navigate, perform action, etc.)
    console.log(`Button ${action} clicked`);
  };

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md" maxW="400px" mx="auto" mt={8}>
      <VStack spacing={4} align="center">
        <FormControl>
          <FormLabel fontSize="xl">"Welcome, {username}!"</FormLabel>
          <Input value={username} isReadOnly borderRadius="md" />
        </FormControl>
        <p>Click</p>
        <Button onClick={() => handleButtonClick('action1')} colorScheme="teal">"A B C D.."</Button>
        <p>OR</p>
        <Button onClick={() => handleButtonClick('action2')} colorScheme="blue">"1 2 3 3.."</Button>
      </VStack>
    </Box>
  );
};

export default WelcomePage;
