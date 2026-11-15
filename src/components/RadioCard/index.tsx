import { Box, Image, useRadio, UseRadioProps } from '@chakra-ui/react';

interface IProps extends UseRadioProps {
  img?: string | undefined;
  children: React.ReactNode;
}

function RadioCard(props: IProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" flex={1}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'orange.300',
          color: 'white',
          borderColor: 'orange.300',
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
