import localFont from "next/font/local"
import Main from "../components/main/main"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "sun_ub",
    description: "Welcome to Next.js"
}

export default function Page() {
    return (<>
        <Main />
    </>)
}