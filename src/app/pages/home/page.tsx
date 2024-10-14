import style from "./home.module.css";
import { MainCard } from "@/components/cards/main";

export const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.contents}>
                <MainCard />
            </div>
        </div>
    );
}