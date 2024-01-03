import { HStack, useRadioGroup } from '@chakra-ui/react';
import RadioCard from '../../components/RadioCard';

export default function Selector({ name, defaultValue, onChange, options }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map(({ value, label, img }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} img={img} {...radio}>
            {label}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
