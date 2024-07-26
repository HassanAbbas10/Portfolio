import animationData from '../utils/Lottie.json'
import Lottie from 'lottie-react'
const LottieAni = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <Lottie animationData={animationData} loop={true} />
  </div>
  )
}

export default LottieAni