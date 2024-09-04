import { RefObject, useEffect, useRef } from "react";

interface useFloatingProps {
    target: HTMLElement | null | undefined;
    parent: HTMLElement | null | undefined;
    ref: RefObject<HTMLDivElement>;
}

const useFloatingIndicator = ({ parent, ref, target }: useFloatingProps) => {

    // displays which element is being selected according to the `data-key` attribute
    const dataKey = target?.getAttribute('data-key');

    const updatePosition = () => {

        if (!target || !parent) {
            return;
        }

        const targetRect = target.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const position = {
            top: targetRect.top - parentRect.top,
            left: targetRect.left - parentRect.left,
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

    const targetResizeObserver = useRef<ResizeObserver>();
    const parentResizeObserver = useRef<ResizeObserver>();

    // updatePosition();

    useEffect(() => {
        updatePosition();

        if (target) {
            targetResizeObserver.current = new ResizeObserver(updatePosition);
            targetResizeObserver.current.observe(target);

            if (parent) {
                parentResizeObserver.current = new ResizeObserver(updatePosition);
                parentResizeObserver.current.observe(parent);
            }

            return () => {
                targetResizeObserver.current?.disconnect();
                parentResizeObserver.current?.disconnect();
            }
        }

        return undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parent, target, dataKey]);

}

export default useFloatingIndicator;