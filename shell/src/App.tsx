import { BrowserRouter } from 'react-router'
import Layout from './Layout.tsx'

// The only BrowserRouter on the page. Because react-router is a federation
// singleton, every remote's <Link> and router hook reads this router's context.
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
