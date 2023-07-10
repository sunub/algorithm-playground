const COLORS = {
    text: {
        light: `oklch(21.08% 0.055 34.69)`,
        dark: `oklch(100% 0 31.08)`,
    },
    background: {
        light: `oklch(97.14% 0.011 31.07)`,
        dark: `oklch(54.74% 0.023 238.99)`,
    },
    primary: {
        light: `oklch(100% 0 0 / 0.8)`,
        dark: `oklch(34% 0.019 229.64)`,
    },
    highlightColor: {
        light: `oklch(70.8% 0.165 32.85)`,
        dark: `oklch(64.86% 0.181 249.54)`,
    },
}

function setColorsByTheme() {
    const COLORS = "🌈"

    function getInitialColorMode() {
        const persistedColorPreference =
            window.localStorage.getItem("theme-preference")
        const hasPersistedPreference =
            typeof persistedColorPreference === "string"

        if (hasPersistedPreference) {
            return persistedColorPreference
        }

        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        const hasMediaQueryPreference = typeof mql.matches === "boolean"
        if (hasMediaQueryPreference) {
            if (mql.matches) {
                setLocalStorage("dark")
                return "dark"
            }
            setLocalStorage("light")
            return "light"
        }

        return "light"
    }

    function setLocalStorage(data) {
        window.localStorage.setItem("theme-preference", data)
    }

    const colorMode = getInitialColorMode()

    const root = document.firstElementChild

    root.setAttribute("data-color-mode", colorMode)
    Object.entries(COLORS).map(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[colorMode])
    })
}

function InitTheme() {
    const boundFn = String(setColorsByTheme).replace(
        "🌈",
        JSON.stringify(COLORS)
    )

    console.log(boundFn)
    const calledFunction = `(${boundFn})()`
}

InitTheme()
