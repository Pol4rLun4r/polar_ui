import { motion, Variants } from "framer-motion";

const IconVariants: Variants = {
    unchecked: {
        y: 30,
        transitionEnd: {
            display: "none"
        },
    },
    checked: {
        y: 0,
        display: "block",
        transition: {
            display: { duration: 0 }
        }
    }
};

const Icon = ({ checked }: { checked: boolean }) => {
    return (
        <motion.svg
            variants={IconVariants}
            initial={checked ? "checked" : "unchecked"}
            animate={checked ? "checked" : "unchecked"}

            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
        </motion.svg>
    )
}

export default Icon