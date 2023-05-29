import { Heading, Spacer, Text } from "@chakra-ui/react";
import { Box, Icon } from "@chakra-ui/react";
import { Date } from "../../utils/Date";
import { BsJournal } from "react-icons/bs";

export function Nav() {
  return (
    <>
      <Box w="100%" h="70px" color="primary.600" bgColor="primary.400">
        <Heading p="26px" size="md" fontSize="30px" fontFamily={"verdana"}>
          HC PLANNER <Icon as={BsJournal} boxSize={6} />
        </Heading>
      </Box>
      <Spacer />
      <Date />
      <Text
        p="15px"
        align="center"
        fontSize="30px"
        color="primary.100"
        fontStyle="italic"
        fs="b"
      >
        Planea tu día para ser Más Productivo!
      </Text>
    </>
  );
}
