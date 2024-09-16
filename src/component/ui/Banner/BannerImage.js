import Image from 'next/image'
import BannerImg from '../../../assets/banner.jpg'
 
export default function BannerImage() {
  return (
    <Image
      alt="BannerImg"
      src={BannerImg}
      placeholder="blur"
      quality={100}
      sizes="50vh"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}