"use client"

import { useEffect, useState } from "react"
import FireStore from "../../../db/firestore"
import { ref, list, listAll } from "firebase/storage"

type StorageInfo = {
    [key: string]: string[];
};

export default function NavigationDrawer() {
    const [storageData, setStorageData] = useState<StorageInfo>({})

    const navInfo = [{
        dataLabel: "Tab : Develop",
        url: "/develop",
        title: "Develop",
        key: "Develop Page"
    },
    {
        dataLabel: "Tab : Devops",
        url: "/devops",
        title: "DevOps",
        key: "Devops Page"
    },
    {
        dataLabel: "Tab : Devkit",
        url: "/devkit",
        title: "DevKit",
        key: "Devkit Page"
    }]

    useEffect(() => {
        const firestore = new FireStore()
        let storageInfo: StorageInfo = {}
        const getStorageInfo = async () => {
            await listAll(ref(firestore.storage)).then((res) => {
                res.prefixes.forEach((data) => {
                    storageInfo[data.name] = []
                })
            })

            for (const folderName of Object.keys(storageInfo)) {
                const url = `${folderName}/`
                await list(ref(firestore.storage, url)).then((data) => {
                    data.items.forEach((file) => {
                        let fileName = file.name.replace(/\..*/g, "")
                        storageInfo[folderName].push(fileName)
                    })
                })
            }

            setStorageData(storageInfo)
        }
        getStorageInfo()
    }, [])

    return (
        <>
            <web-navigation-drawer type="standard">
                <nav aria-label="main navigator" className="site-header__nav" data-drawer-container={""} aria-expanded={false}>
                    {/* {
                        navInfo.map((info) => {
                            return (
                                <div
                                    key={info.title}
                                    className="tabs-wrapper"
                                    onMouseLeave={(event) => {
                                        const curTarget = event.currentTarget

                                        document.querySelectorAll(".tab").forEach(tab => {
                                            if (curTarget.contains(tab)) {
                                                tab.setAttribute("aria-expanded", "false")
                                            }
                                        })
                                        document.querySelectorAll(".tab-dropdown-column").forEach(dropdownMenu => {
                                            if (curTarget.contains(dropdownMenu)) {
                                                dropdownMenu.removeAttribute("dropdown--open")
                                            }
                                        })
                                        document.querySelectorAll(".tabs-dropdown-toggle").forEach(dropdownToggle => {
                                            if (curTarget.contains(dropdownToggle)) {
                                                dropdownToggle.setAttribute("aria-expanded", "false")
                                            }
                                        })
                                    }}
                                >
                                    <DropdownMenu
                                        url={info.url}
                                        title={info.title}
                                        dataLabel={info.dataLabel}
                                        class={"site-header__link"}
                                        category="Site-Wide Custom Events"
                                        content={[...Object.keys(storageData)]}
                                    />
                                </div>
                            )
                        })
                    } */}
                </nav>
            </web-navigation-drawer>
        </>
    )
}
