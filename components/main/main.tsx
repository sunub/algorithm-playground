import { JS } from "../icon"

const cards = [
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec massa varius magna suscipit imperdiet non vitae enim. Nulla eu venenatis tellus, in aliquam urna."
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec massa varius magna suscipit imperdiet non vitae enim. Nulla eu venenatis tellus, in aliquam urna. 가나다라마바사아자"
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec massa varius magna suscipit imperdiet non vitae enim. Nulla eu venenatis tellus, in aliquam urna. 가나다라마바사아자"
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec massa varius magna suscipit imperdiet non vitae enim. Nulla eu venenatis tellus, in aliquam urna. 가나다라마바사아자"
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec massa varius magna suscipit imperdiet non vitae enim. Nulla eu venenatis tellus, in aliquam urna. 가나다라마바사아자"
    },
]

export default function Main() {
    return (
        <div id="main">
            <fieldset className="main_aside">
                <label>
                    <JS />
                    <span>Javascript</span>
                </label>
                <label>2</label>
                <label>3</label>
                <label>4</label>
            </fieldset>
            <ul className="card_container">
                {
                    cards.map((data) => {
                        return (
                            <li key={`${data.title}${Math.random() * 10}`}>
                                <article className="card">
                                    <p>i</p>
                                    <h1>{data.title}</h1>
                                    <div>e</div>
                                    <p>{data.content}</p>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}