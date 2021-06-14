import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"

let FadeScrollComponentY = ({ className, children, delay = 0.35 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: .25,
  })

  useEffect(() => {
    if (inView) { controls.start("visible") }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      transition={{ duration: .5, delay }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: .985, y: 50 },
      }}
    >
      {children}
    </motion.div>
  )
}

let FadeScrollComponentX = ({ className, children, delay = 0.35, direction = 'ltr' }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) { controls.start("visible") }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      transition={{ duration: .6, delay }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: direction === 'ltr' ? -60 : 60 },
      }}
    >
      {children}
    </motion.div>
  )
}

export { FadeScrollComponentY, FadeScrollComponentX }