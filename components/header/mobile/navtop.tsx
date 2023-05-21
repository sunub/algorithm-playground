"use client"

import { useState, useEffect } from "react"
import FireStore from "../../../db/firestore"
import DropdownMenu from "../web/dropdownMenu"

type NavInfo = {
    dataLabel: string,
    url: string,
    title: string,
    key?: string,
    data?: string[]
}

export default function NavTop() {
    const [storageData, setStorageData] = useState<Map<string, NavInfo>>(new Map())


    useEffect(() => {
        const navInfo: NavInfo[] = [{
            dataLabel: "Tab : Algorithms",
            url: "/algorithms",
            title: "algorithms",
            key: "",
        },
        {
            dataLabel: "Tab : JS",
            url: "/javascript",
            title: "Javascript",
            key: "",
        },
        {
            dataLabel: "Tab : Typescript",
            url: "/typescript",
            title: "typescript",
            key: "",
        }]
        const FSData = new Map()
        const FS = new FireStore()
        FS.getStorageInfo().then((data: Map<string, string[]>) => {
            for (const [key, value] of data.entries()) {
                if (navInfo.length) {
                    const navData = navInfo.shift()!
                    navData.key = key
                    navData.data = value
                    FSData.set(key, navData)
                }
            }
            return setStorageData(FSData)
        })
    }, [])


    return (
        <div className="web-mobile-nav-top" data-drawer-container={""}>
            <ul>
                {
                    [...storageData.values()].map((navCmp) => {
                        return (
                            <div
                                key={navCmp.title}
                                className="tabs-wrapper"
                            >
                                <DropdownMenu
                                    url={navCmp.url}
                                    title={navCmp.title}
                                    dataLabel={navCmp.dataLabel}
                                    category="Site-Wide Custom Events"
                                    FSData={navCmp.data!}
                                />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}