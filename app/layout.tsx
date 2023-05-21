import "./global.css"
import { nanumSquareNeo, nanumSquareNeoHavy } from "./styles/fonts"
import WebHeader from "../components/header/header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kor" className={`${nanumSquareNeo.variable} ${nanumSquareNeoHavy.variable}`}>
            <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" as="font" />
                <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Material+Icons&amp;family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;display=block" as="font" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" as="icon" />
            </head>
            <body>
                <WebHeader />
                {children}
            </body>
        </html>
    )
}