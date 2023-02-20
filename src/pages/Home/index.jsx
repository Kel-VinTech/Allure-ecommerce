import { MainContent, HeroContent, BlogContent,LearnAbout ,TopSales,PopularContent} from "../../components";

const Home = ( ) => {
    return (
        <main>
            <HeroContent />
            <MainContent />
            <PopularContent />
            <TopSales />
            <LearnAbout />
            <BlogContent />
        </main>
    )
}

export default Home;