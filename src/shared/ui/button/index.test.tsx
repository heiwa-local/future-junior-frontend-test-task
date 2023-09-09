import {render, screen} from "@testing-library/react"
import { Button } from "./index"

describe("Button tests", () => {
    test("snapshot", () => {
        const button = render(
            <Button
                onClick={() => {}}>
                <span>button</span>
            </Button>
        )
        expect(button).toMatchSnapshot()
    })
})