export default function Page() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div id="develop-page">
            <div className="card wrapper">
                {
                    a.map((v, i) => {
                        return <div key={i} className="card" style={{
                            background: `rgba(${Math.random() * i * 130}, ${Math.random() * i * 200}, 0, 1)`
                        }}>{v}</div>
                    })
                }
            </div>
        </div>
    )
}