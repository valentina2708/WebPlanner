import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Days } from "./plannerComponents/Days";


export function Menu() {
  return (
    <Tabs isFitted variant="enclosed" >
      <TabList mb="1em"  >
        <Tab>Diario</Tab>
        <Tab>Semanal</Tab>
        <Tab>Mensual</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p><Days/></p>
        </TabPanel>
        <TabPanel>
          <p></p>
        </TabPanel>
        <TabPanel>
          <p></p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
