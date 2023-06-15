"use strict";
function a() {
    const text = `
    ---Category 1---
    {
      "name": "Object 1",
      "value": 10
    }
    ---Category 2---
    {
      "name": "Object 2",
      "value": 20
    }
    ---Category 3---
    Some additional text for category 3
    `;
    const regex = /---(.*?)---([\s\S]+?)(?=(?:\n---|$))/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text))) {
        const category = match[1].trim();
        let content = match[2].trim();
        // Check if the content is JSON and parse it if true
        try {
            content = JSON.parse(content);
        }
        catch (error) {
            // Content is not valid JSON, treat it as text
        }
        matches.push({ category, content });
    }
}
a();
//# sourceMappingURL=app.js.map