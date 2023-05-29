import { useState, useEffect } from "react";
import { Text, Flex, Box, Spacer } from "@chakra-ui/react";
import dayjs from "dayjs";
import { TimeIcon } from "@chakra-ui/icons";

export function Date() {
  const [date, setDate] = useState();

  const currentDate = () => {
    return dayjs().locale("es").format("D MMMM, YYYY HH:mm:ss");
  };

  function refreshClock() {
    setDate(currentDate());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Flex>
      <Spacer />
      <Box p="4" b="2px" borderRadius="4px" borderColor="primary.400">
       <Text as="b" fontSize="12px" gap="2"> 
          {date}    <TimeIcon/> 
        </Text>
     
      </Box>
    </Flex>
  );
}
