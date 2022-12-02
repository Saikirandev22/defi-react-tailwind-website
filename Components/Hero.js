import video from './../Assests/video.mp4'
const Hero = () => {
    return ( 
        <div className='relative w-full h-screen text-white'>
        <video src={video} className="w-full h-full object-cover " loop muted autoPlay></video>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center '>
            <h1 className=' font-sans py-1'>Decentralized</h1>
            <h1 className=' font-sans py-1'><span className='text-cyan-400  '>Trading</span> Protocal</h1>
            <p className='py-1 text-lg font-semibold px-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
            <div className='flex py-1'>
                <button className='mx-2 px-3 rounded-2xl'>Use Defi</button>
                <button className='mx-2 px-4  rounded-2xl border-blue-400 bg-gradient-to-r from-[none] to-[none]'>FAQ</button>
            </div>
        </div>
        <h2 className='absolute bottom-0 left-[30%]'>Total Volume Secured: $42,104,783,662.47</h2>
        </div>
     );
}
 
export default Hero;