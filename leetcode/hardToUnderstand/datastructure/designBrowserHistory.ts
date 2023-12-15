class BrowserHistory {
    history: string[]
    future: string[]
    current: string
    constructor(homepage: string) {
        this.history = []
        this.future = []
        this.current = homepage
    }

    visit(url: string): void {
        this.history.push(this.current)
        this.current = url
        this.future = []
    }

    back(steps: number): string {
        while (steps > 0 && this.history.length > 0) {
            this.history.pop()
        }
    }
}
