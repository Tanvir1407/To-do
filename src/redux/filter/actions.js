import { STATUSCHANGED, COLORCHANGED } from "./actiontypes";

export const colorchanged = (color, ChangeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            ChangeType
       } 
    }
}
export const statuschanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload:status,
    }
}