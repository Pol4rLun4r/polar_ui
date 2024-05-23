//type
import type { ButtonProps } from "./props"

const Button = ({ children, testProp }: ButtonProps) => {
    return (
        <button>
            {children}
            <div>test props: {testProp}</div>
        </button>
    )
}

export default Button;