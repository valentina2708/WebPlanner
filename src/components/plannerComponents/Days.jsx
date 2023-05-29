import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Goals } from "../plannerComponents/Goals";
import { Todo } from "./todoList/Todo";
import {SunIcon} from "@chakra-ui/icons";


export function Days() {

  return (
    <>
      <SimpleGrid  spacing={5} templateColumns="repeat(( minmax(800px, 4fr))">
        <Card maxW="md" m="10px" w="100%" borderRadius="1px">
          <CardHeader p="12px" backgroundColor="primary.700">
            <Heading size="lg" align="center" >
              Objetivo de Hoy 
            </Heading>
          </CardHeader>
          <CardBody align="center">
            <Image
             position="absolute top:50px"
              borderRadius="full"
              boxSize="150px"
              src="/src/assets/objetivos.jpeg"
              alt="objetivos"
            />
            <Goals />
          </CardBody>
        </Card>
        <Card maxW="md" m="10px" width="100%">
        <CardHeader p="12px" backgroundColor="primary.700">
            <Heading size="lg" align="center" >
              Lista de Tareas
            </Heading>
          </CardHeader>
          <CardBody>
          <Todo />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>

     
      </SimpleGrid>
    </>
  );
}
