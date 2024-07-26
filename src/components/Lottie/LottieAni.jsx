import animationData from '../utils/Lottie.json'
import Lottie from 'lottie-react'
const LottieAni = () => {
  return (
    <div className="flex items-center justify-center  ">
    <Lottie animationData={animationData} loop={true} height={40} width={40} />
  </div>
  )
}

export default LottieAni