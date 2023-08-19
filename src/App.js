import { ConfigProvider } from "antd";
import Carousel from "./components/Carusel";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 7,
              dotWidth: 5,
              dotActiveWidth: 10,
            },
            Card: {
              colorText: "#F0F8FF",
            },
          },
        }}
      >
        <Carousel />
      </ConfigProvider>
    </div>
  );
}

export default App;
