import { Stack, Text } from "@chakra-ui/react";
export const Feature = ({ title, text }) => {
    return (
       <Stack>
          <Text fontWeight={600}>{title}</Text>
          <Text color={'gray.600'}>{text}</Text>
       </Stack>
    );
 };