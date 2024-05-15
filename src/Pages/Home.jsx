import { Helmet } from "react-helmet";
import Banner from "../Components/Home/Banner";
import EatEnjoy from "../Components/Home/EatEnjoy";
import Review from "../Components/Home/Review";
import TopFood from "./TopFood";

const Home = () => {
    
    return (
        <div className="">
            <Helmet>
                <title>FlouriciousBites | Home</title>
                </Helmet>
            <Banner></Banner>
            <TopFood></TopFood>
            <EatEnjoy></EatEnjoy>
            <Review></Review>

        </div>
    );
};

export default Home;