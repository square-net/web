import Head from "../components/Head";
import PageLayout from "../components/layouts/PageLayout";
import PageContentLayout from "../components/layouts/sublayouts/PageContentLayout";

function Explore() {
    return (
        <>
            <Head
                title="Explore | Square"
                description="Discover new things on Square."
            />
            <PageLayout 
                children={
                    <PageContentLayout type="main" searchBar={true} content={
                        <>Explore.</>
                    } 
                    sideColumn={
                        <>
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                            Explore column. <br />
                        </>
                    } />
                }
            />
        </>
    );
}

export default Explore;