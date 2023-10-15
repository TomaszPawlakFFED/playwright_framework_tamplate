import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { MyAccountPage } from "../pages/myAccount.page";
import { HeaderComponent } from "../components/header.components";

export type LoginPageType = ReturnType<typeof LoginPage>;
export type HomePageType = ReturnType<typeof HomePage>;
export type MyAccountPage = ReturnType<typeof MyAccountPage>;
export type HeaderComponent = ReturnType<typeof HeaderComponent>;
