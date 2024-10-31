import {RouterProvider, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Box } from '@chakra-ui/react'
import RootLayout from './Layout/RootLayout'
import { useColorModeValue } from '@chakra-ui/react'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/create' element={<CreatePage />} />
    </Route>
    </>
  )
)
const App = () => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100','gray.900')}>
    <RouterProvider router={router} />
    </Box>
  )
}

export default App