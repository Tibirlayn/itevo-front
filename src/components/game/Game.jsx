import { NavbarMain } from "../navbar/NavbarMain";
import { UncontrolledExample } from "./CarouselMain";
import { BestGame } from "./BestGame"
import { EventGame } from "./EventGame"
import { TrendingGame } from "./TrendingGame";
import { UpdateGame } from "./UpdateGame";
import { PromoVideoFirst } from "./PromoVideoFirst";
import { PromoVideoSecond } from "./PromoVideoSecond";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import '../../style.css'

export function Game() {
    return (
        <>
            <NavbarMain />
            <UncontrolledExample />
            <BestGame />
            <EventGame />
            <PromoVideoFirst />
            <TrendingGame/>
            <UpdateGame/>
            <PromoVideoSecond/>
            <Newsletter />
            <Footer/>
        </>
    )
}
