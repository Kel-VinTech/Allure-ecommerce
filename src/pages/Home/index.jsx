import { MainContent, HeroContent, BlogContent,LearnAbout ,TopSales} from "../../components";

const Home = ( ) => {
    return (
        <main>
            <HeroContent />
            <MainContent />
            <TopSales />
            <LearnAbout />
            <BlogContent />
        </main>
    )
}

export default Home;