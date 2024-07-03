import { RefObject, useEffect } from "react";

interface useFloatingProps {
    target: HTMLElement | null | undefined;
    parent: HTMLElement | null | undefined;
    ref: RefObject<HTMLDivElement>;
}

const useFloatingIndicator = ({ parent, ref, target }: useFloatingProps) => {

    const updatePosition = () => {

        if (!target || !parent) {
            return;
        }
    
        const targetRect = target.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const position = {
            top: targetRect.top - parentRect.top - 1,
            left: targetRect.left - parentRect.left - 1,
            width: targetRect.width,
            height: targetRect.height,
        };

        if (ref.current) {
            ref.current.style.top = `${position.top}px`
            ref.current.style.left = `${position.left}px`
            ref.current.style.width = `${position.width}px`;
            ref.current.style.height = `${position.height}px`;
        }
    };

    useEffect(() => {
        updatePosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parent, target?.getBoundingClientRect().width]);

}

export default useFloatingIndicator;