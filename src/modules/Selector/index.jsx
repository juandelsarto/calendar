import { HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "../../components/RadioCard";

export default function Selector({ options }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
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
