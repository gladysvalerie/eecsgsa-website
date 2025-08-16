import Card from "../components/Card";
import ButtonPrimary from "../components/ButtonPrimary";
import imageTest from "../assets/test.JPG";
import SquareImageCard from "../components/SquareImageCard";

const Home = () => {
    return (
        <div className="w-screen pt-20 px-20">
            <h1 className="mb-10">Home</h1>

            <Card
                imageSrc={imageTest}
                title={"A certain place"}
                description={
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora labore quos dignissimos minus tempore adipisci porro iste, veritatis reiciendis reprehenderit sapiente error ad similique."
                }
                className="mb-10"
            />

            <ButtonPrimary className="mb-10">See More</ButtonPrimary>
            <ButtonPrimary className="mb-10">This is a button</ButtonPrimary>
            <ButtonPrimary className="mb-10">Test</ButtonPrimary>

            <SquareImageCard
                caption="lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor"
                className="mb-10"
                imageSrc={imageTest}
                type="primary"
            />

            <SquareImageCard
                caption="lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor"
                className="mb-10"
                imageSrc={imageTest}
                type="secondary"
            />

            <SquareImageCard
                caption="lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor"
                className="mb-10"
                imageSrc={imageTest}
                type="secondary"
                button={<ButtonPrimary>Join Now</ButtonPrimary>}
            />
        </div>
    );
};

export default Home;
