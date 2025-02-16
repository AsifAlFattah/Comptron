import HomeAbout from "../SharedSection/HomeAbout/HomeAbout";
import HomeBanner from "../SharedSection/HomeBanner/HomeBanner";
import HomeClubInfo from "../SharedSection/HomeClubInfo/HomeClubInfo";
import HomeWhyJoin from "../SharedSection/HomeWhyJoin/HomeWhyJoin";

const Home = () => {
    return (
        <div className="">
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeClubInfo></HomeClubInfo>
            <HomeWhyJoin></HomeWhyJoin>
        </div>
    );
};

export default Home;