import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppBar() {
  return <>
    <NativeBaseProvider>
        <Center flex={1} px="3">
            <Center>
                <StatusBar bg="#3700B3" barStyle="light-content" />
                <Box safeAreaTop bg="violet.600" />
                <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                    <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                    </Text>
                    </HStack>
                    <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                    </HStack>
                </HStack>
            </Center>
        </Center>
    </NativeBaseProvider>
                </>;
}
    