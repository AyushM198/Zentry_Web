
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.animated-word', {
                opacity: 0,
                transform: 'translate3d(0, 100%, 0) rotateY(0deg) rotateX(0deg)',
            })

            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                },
            })

            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power1.out',
                stagger: 0.02,
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div
                    key={index}
                    className="lex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 flex"
                >
                    {line.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className="animated-word inline-block"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle
