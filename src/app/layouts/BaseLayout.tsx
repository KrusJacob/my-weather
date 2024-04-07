import { MainPage } from "@/pages/main";
import { Header } from "@/widgets/header";

function BaseLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </>
  );
}

export default BaseLayout;
