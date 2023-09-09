import {render} from "@testing-library/react"
import { BookCard } from "./index"

describe("BookCard tests", () => {
    test("snapshot without data", () => {
        const bookCard = render(
            <BookCard
                id={undefined}
                imageUrl={undefined}
                title={undefined}
                authors={undefined}
                tag={undefined}
                onClick={() => {}}/>
        )
        expect(bookCard).toMatchSnapshot()
    })

    test("snapshot with data", () => {
        const bookCard = render(
            <BookCard
                id="z7nXDwAAQBAJ"
                imageUrl="http://books.google.com/books/publisher/content?id=z7nXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70InjG5KPOXyttqune1PgJTO5fvhSW-5PFUQCP_kTxCOsUxZ5AIjvg7rTLGi66zRoSVp9UmgukWFX6CbYygwQljhfqtLZ-Oi4SAHB_ofsY539j-9ntaePCGQEVeGiVCNBVhHROa&source=gbs_api"
                title="Prince Harry"
                authors={["Elizabeth Krajnik"]}
                tag="Young Adult Nonfiction"
                onClick={() => {}}/>
        )
        expect(bookCard).toMatchSnapshot()
    })
})