import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { useState } from "react"
import useTransfer from "../hooks/useTransfer"


const DialogDemo = ({tokenId}) => {
   const [address, setAddress] = useState("")
   
    const handleTransfer = useTransfer(address, tokenId);
  return (
    <Dialog.Root>
        <Dialog.Trigger>
            <Button className="bg-blue-600">Transfer</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Transfer Token</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Select Tokens to Transfer.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Address
        </Text>
        <TextField.Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
        />
      </label>
      
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button onClick={handleTransfer}className="bg-blue-600">Transfer</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  )
}

export default DialogDemo
