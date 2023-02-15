import Image from 'next/image'
import { useParallax, useParallaxController } from 'react-scroll-parallax'

const ProfilePic = ({ imageSrc }) => {
  const { ref } = useParallax({ speed: -12 })
  const parallaxController = useParallaxController()
  return (
    <figure ref={ref}>
      <Image
        alt="Profile picture of Niall McKenna"
        src={imageSrc}
        width={400}
        height={265}
        onLoad={() => parallaxController.update()}
      />
    </figure>
  )
}

export { ProfilePic as default }
