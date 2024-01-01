import { Box, Image, useRadio } from "@chakra-ui/react";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "orange.300",
          color: "white",
          borderColor: "orange.300",
        }}
        px={4}
        py={2}
      >
        {props.img && <Image src={props.img} />}
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;
