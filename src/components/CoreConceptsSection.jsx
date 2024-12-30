import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from "../data"

export default function CoreConceptsSection() {
    return (
        <section id='core-concepts'>
            <h2>core concepts</h2>
            <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem}/>))}
            </ul>

        </section>
    )
}