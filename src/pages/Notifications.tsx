import Head from "../components/Head";
import PageLayout from "../components/layouts/PageLayout";
import PageContentLayout from "../components/layouts/sublayouts/PageContentLayout";

function Notifications() {
    return (
        <>
            <Head
                title="Notifications | Square"
                description="Here you can look at your notifications."
            />
            <PageLayout 
                children={
                    <PageContentLayout type="main" title="Notifications" content={
                        <>Notifications.</>
                    } 
                    sideColumn={
                        <>Classic column.</>
                    } />
                }
            />
        </>
    );
}

export default Notifications;
