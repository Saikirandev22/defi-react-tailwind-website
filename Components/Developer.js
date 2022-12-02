import terminal from './../Assests/terminal.png'
const Developer = () => {
    return ( 
        <div className="w-full px-1 py-4 m-4 text-white">
            <div className="max-w-[768px] mx-auto p-1 text-center md:flex m-4">
                <div>
                <h1 className='px-1 py-4'>Superpowers for DEFI developers</h1>
                <p className='px-1 py-4'>
                    Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span>  or a guide below to
                    integrate your project with thousands of tokens and billions of
                    liquidity.
                </p>
                </div>
                <div className='flex justify-center px-1 py-4'>
                <img src={terminal} className='shadow-lg shadow-cyan-500/50 max-w-[250px]'></img>
                </div>
            </div>
        </div>
     );
}
 
export default Developer;