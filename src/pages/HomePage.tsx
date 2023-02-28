import { useEffect, useState } from "react";
import Head from "../components/Head";
import { useMeQuery } from "../generated/graphql";

function HomePage() {
    const { data } = useMeQuery({ fetchPolicy: "network-only" });
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_ORIGIN!, {
            method: "POST",
            credentials: "include",
        }).then(async (x) => {
            const { sessionId } = await x.json();
            setSessionId(sessionId);
        });
    }, []);

    return (
        <>
            <Head
                title="Home | Square"
                description="Do everything on this app."
            />
            <>
                Welcome, {data?.me?.firstName} <br />
                {data?.me?.sessions?.map((session, i) => (
                    <div key={session.id}>
                        {i}. {session.sessionId} {session.clientOS} {session.clientName} {session.deviceLocation} {session.creationDate} {sessionId === session.sessionId && "Active session"}
                    </div>
                ))}
            </>
        </>
    );
}

export default HomePage;
