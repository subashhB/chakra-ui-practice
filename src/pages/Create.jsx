import { Box, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import {Form} from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px"  >
      <Form>
        <FormControl>
          <FormLabel>Task Name</FormLabel>
          <Input type="text" name="title"/>
          <FormHelperText>Enter a desciptive Task Name.</FormHelperText>
        </FormControl>
      </Form>
    </Box>
  )
}
