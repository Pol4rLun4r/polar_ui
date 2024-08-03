// util
import { randomId } from "./utils"

export const useId = (staticId?: string) => {
    
    const uuid = randomId();

    if(typeof staticId === 'string') {
        return staticId;
    }

    return uuid;
}