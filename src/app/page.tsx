'use client';

import { Box, Heading, Text, Button, Flex, HStack, StackProps, Icon, Stack } from '@chakra-ui/react';
import ChakraWrapper from './chakrawrapper';
import { CheckIcon, HassleFreeIcon, MoneybackGuaranteeIcon, MonthySubscriptionIcon } from '@/icons/Icon';
import { ElementType } from 'react';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">{children}</Text>
    </HStack>
  );
}

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
}

export default function Home() {
  return (
    <ChakraWrapper>
      <Box as="section" pb="28">
        <Box textAlign="center" color="gray.50" bg="purple.600" pt="90px" pb="198px" px="8">
          <Heading fontWeight="extrabold" fontSize="5xl">Simple pricing for your businness</Heading>
          <Text fontWeight="medium" fontSize="2xl" pt="4">Plans that are carefully crafted to suit you business. </Text>
        </Box>
      </Box>

      <Box as="section"
        maxW="994px" margin="auto" mt="-60" borderRadius="xl" textAlign="center"
        overflow="hidden"
        boxShadow="box-shadow: 0px 10px 10px -5px #0000000A;box-shadow: 0px 20px 25px -5px #0000001A;"
      >
        <Flex textAlign='center'>
          <Box bg='#F0EAFB' p='60px'>
            <Text fontSize='xl' fontWeight='extrabold'>
              Premium PRO
            </Text>
            <Heading as='h3' fontSize='60px' mt="4" >
              $321
            </Heading>
            <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button colorScheme="purple" w='282px' mt='6' >
              Get Started
            </Button>
          </Box>

          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>

        </Flex>
      </Box>

      <Box as="section" maxW="1024px" m="auto" pt="60px" pb="8">
        <HStack px="12" spacing="5">
          <Feature icon={MoneybackGuaranteeIcon}>30 days money back guarantee</Feature>
          <Feature icon={HassleFreeIcon}>30 days money back guarantee</Feature>
          <Feature icon={MonthySubscriptionIcon}>30 days money back guarantee</Feature>
        </HStack>
      </Box>

    </ChakraWrapper>
  );
}
