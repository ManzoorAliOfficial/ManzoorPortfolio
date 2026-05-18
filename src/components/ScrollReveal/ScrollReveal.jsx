import { useEffect, useRef } from 'react';
import styles from './ScrollReveal.module.css';

export default function ScrollReveal({
    children,
    direction = 'fromBottom',
    delay = '',
    speed = '',
    threshold = 0.15,
    className = '',
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.visible);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const classes = [
        styles.reveal,
        styles[direction],
        delay ? styles[delay] : '',
        speed ? styles[speed] : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
}