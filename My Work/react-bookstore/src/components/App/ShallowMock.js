import { cloneElement } from "react"

export const ShallowMock = (Component, Props) => {
    return cloneElement(Component, Props)
}

export default ShallowMock;