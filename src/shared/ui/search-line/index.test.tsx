import {render} from "@testing-library/react"
import { SearchLine } from "./index"

describe("SearchLine tests", () => {
    test("snapshot without data", () => {
        const searchLine = render(
            <SearchLine
                placeholder={undefined}
                value={undefined}
                setValue={() => {}}
                onSearch={() => {}}/>
        )
        expect(searchLine).toMatchSnapshot()
    })

    test("snapshot with correct src", () => {
        const searchLine = render(
            <SearchLine
                placeholder={"Harry Potter"}
                value={"Harr"}
                setValue={() => {}}
                onSearch={() => {}}/>
        )

        expect(searchLine).toMatchSnapshot()
    })
})