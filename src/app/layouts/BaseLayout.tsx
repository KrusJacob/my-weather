import { MainPage } from "@/pages/main";
import { Header } from "@/widgets/header";

function BaseLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
