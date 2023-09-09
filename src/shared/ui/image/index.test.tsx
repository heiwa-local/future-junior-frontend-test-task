import {render} from "@testing-library/react"
import { Image } from "./index"

describe("Image tests", () => {
    test("snapshot with undefined src", () => {
        const image = render(
            <Image src={undefined}/>
        )
        expect(image).toMatchSnapshot()
    })

    test("snapshot with correct src", () => {
        const image = render(
            <Image src="http://books.google.com/books/content?id=29GjswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"/>
        )
        expect(image).toMatchSnapshot()
    })
})