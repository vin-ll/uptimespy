import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Heading,
  Stack,
} from '@chakra-ui/react';

import { SettingsIcon } from '@chakra-ui/icons';
import { TbWebhook } from 'react-icons/tb';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <>
      <Box position="fixed" w="full" bg="#24212b" px={10} zIndex={3}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Heading fontSize="40px" ><a href="/dashboard">UPTIME<span style={{ color: "#9f7aea" }} >SPY</span></a></Heading></Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  bg="#2a2733"
                  _hover={{ bg: "#373342" }}
                  aria-label="More server options"
                  icon={<SettingsIcon />}
                  size="lg"
                  variant="solid"
                  w="fit-content"
                />
              </PopoverTrigger>
              <PopoverContent bg="#24212b" w="fit-content" _focus={{ boxShadow: 'none' }} zIndex={4}>
                <PopoverArrow bg="#24212b" />
                <PopoverBody>
                  <Stack>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<TbWebhook />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      fontSize="md">
                      Soon
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      rightIcon={<RiLogoutBoxRLine />}
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      onClick={logout}
                      fontSize="md">
                      Logout
                    </Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
