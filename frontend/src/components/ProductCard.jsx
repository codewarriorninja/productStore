import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Heading, HStack, IconButton, Image,Text, useToast } from "@chakra-ui/react"
import { useProductStore } from "../store/Product"


export const ProductCard = ({product}) => {
     const {deleteProduct} = useProductStore();
     const toast = useToast();
    const handleDeleteProduct = async (pid) => {
      const {success,message} = await deleteProduct(pid)
      if(!success){
        toast({
            title:'Error',
            description:message,
            status:'error',
            duration:3000,
            isClosable:true
        })
      }else{
        toast({
            title:'Success',
            description:message,
            status:'success',
            duration:3000,
            isClosable:true
        })
      }
    }
  return (
    <Box shadow={'lg'} rounded={'lg'} overflow={'hidden'} transition={'all .3s'} _hover={{transform:'translateY(-5px)', shadow:'xl'}}>
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4}>
          <Heading as={'h3'} size={'md'} mb={2}>
             {product.name}
          </Heading>
          <Text fontWeight={'bold'} fontSize={'xl'} color={'gray.600'} mb={4}>
             ${product.price}
          </Text>
          <HStack spacing={2}>
            <IconButton icon={<EditIcon />} colorScheme="blue" />
            <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
          </HStack>
        </Box>
    </Box>
  )
}
