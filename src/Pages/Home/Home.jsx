import EventHome from "../SharedSection/EventHome/EventHome";
import HomeAbout from "../SharedSection/HomeAbout/HomeAbout";
import HomeBanner from "../SharedSection/HomeBanner/HomeBanner";
import HomeClubInfo from "../SharedSection/HomeClubInfo/HomeClubInfo";
import HomeWhyJoin from "../SharedSection/HomeWhyJoin/HomeWhyJoin";
import ScalingLogo from "../SharedSection/ScalingLogo/ScalingLogo";

const Home = () => {
    return (
        <div className="mt-24">
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <EventHome></EventHome>
            <HomeWhyJoin></HomeWhyJoin>
            <HomeClubInfo></HomeClubInfo>
        </div>
    );
};

export default Home;