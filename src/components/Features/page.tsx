import { HassleFreeIcon, MoneybackGuaranteeIcon, MonthySubscriptionIcon } from '@/icons/Icon';
import { Box, Text, HStack, Icon, Stack, StackProps } from '@chakra-ui/react';
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

export default function FeatureComponent() {
  return (
    <Box as="section" maxW="1024px" m="auto" pt="60px" pb="8">
      <Stack direction={["column", "column", "row"]} spacing={["6", "6", "5"]} px="12">
        <Feature icon={MoneybackGuaranteeIcon}>30 days money back guarantee</Feature>
        <Feature icon={HassleFreeIcon}>30 days money back guarantee</Feature>
        <Feature icon={MonthySubscriptionIcon}>30 days money back guarantee</Feature>
      </Stack>
    </Box>

  );
}