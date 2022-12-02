const Subscribe = () => {
    return ( 
        <div className="w-full text-center px-1 py-4 m-4 text-white">
            <h1>Join Our DeFi Community</h1>
            <div className="py-4">
                <input type="email" placeholder="please enter email" className="p-1 rounded-xl mr-2" ></input>
                <button className="px-2">sign up</button>
            </div>
            <div className="flex justify-center">
                <input className="mr-2" type="checkbox"></input>
                <p>Yes, I agree to receive email communications from DeFi.</p>
            </div>
        </div>
     );
}
 
export default Subscribe;