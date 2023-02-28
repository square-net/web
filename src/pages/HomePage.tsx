import Head from "../components/Head";
import { useMeQuery } from "../generated/graphql";

function HomePage() {
    const { data } = useMeQuery({ fetchPolicy: "network-only" });

    return (
        <>
            <Head
                title="Home | Square"
                description="Do everything on this app."
            />
            <>
                Welcome, {data?.me?.firstName} <br />
                {data?.me?.sessions?.map((session) => (
                    <div key={session.id}>
                        {session.sessionId} {session.clientOS} {session.clientName} {session.deviceLocation} {session.creationDate}
                    </div>
                ))}
            </>
        </>
    );
}

export default HomePage;
