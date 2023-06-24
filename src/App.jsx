import { useEffect, useContext } from "react";
import Container from "./components/Container";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Users from "./pages/Users";
import { GlobalContext } from "./context/Context";
function App() {
  // get the data from global context
  const { currentPage, userData, setUserData } = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const data = await res.json();
      setUserData(data); // once the data is load set it in globalContext
    };
    getData();
  }, [currentPage]);

  // display spinner until the dataset load...
  if (userData === null) {
    return <Loader />;
  }

  return (
    <Container isFullHeight={true}>
      <Header />
      <Users userData={userData} />
    </Container>
  );
}

export default App;
