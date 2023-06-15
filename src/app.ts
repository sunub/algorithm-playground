function a() {
    const regex = /---(.*?)---([\s\S]+?)(?=(?:\n---|$))/g
    const matches = []
    let match

    while ((match = regex.exec(text))) {
        const category = match[1].trim()
        let content = match[2].trim()

        // Check if the content is JSON and parse it if true
        try {
            content = JSON.parse(content)
        } catch (error) {
            // Content is not valid JSON, treat it as text
        }

        matches.push({ category, content })
    }
}

a()
