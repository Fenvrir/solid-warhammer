// @refresh reload
import {Suspense} from "solid-js"
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start"
import './index.css'
import Home from "~/routes/Home";

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - Bare</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body class="bg-gray-200">
                <div class="wrapper mx-auto mt-14 bg-white rounded">
                    <Home/>
                </div>
                <Scripts/>
            </Body>
        </Html>
    );
}
