import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Form from "./Component/Form/Form";
import TableData from "./Component/Table/Table";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Form/>
  },
  {
    path : "/table",
    element : <TableData/>
  }
])

function App() {
  return (
      <main>
        <RouterProvider router={router} ></RouterProvider>
      </main>
  );
}

export default App;
