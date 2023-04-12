import { Stack, Text } from "@chakra-ui/react";
export const Feature = ({ title, text, color='gray.600' }) => {
    return (
       <Stack>
          <Text fontWeight={600}>{title}</Text>
          <Text color={color}>{text}</Text>
       </Stack>
    );
 };