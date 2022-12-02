import AboutCard from "./AboutCard";
import {SiHiveBlockchain,  SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
const About = () => {
    return ( 
        <div className="w-full flex flex-col items-center max-w-[768px] mx-auto bg-black text-white">
             <h2 className="mt-10">A Growing Protocol Ecosystem</h2>
             <p className="px-1 py-4 text-base font-bold ">The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
             <div className="px-1 py-4 m-4 grid gap-2  md:grid-cols-4 grid-rows-1 sm:grid-cols-2 grid-rows-2">
                <div className="border rounded-md p-2 ">
                <AboutCard icon={<SiHiveBlockchain size={30} className='icon ' ></SiHiveBlockchain>} advantage={'Reliable, tamper-proof network' } description={'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'}></AboutCard>
                </div>
                <div className="border  rounded-md p-2">
                <AboutCard icon={< SiStrapi size={30} className='icon' />}  advantage='Seamless connection to any API' description='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'></AboutCard>
                </div>
                <div className="border  rounded-md p-2">
                <AboutCard icon={<SiFsecure size={30} className='icon ' />} advantage='Proven, ready-made solutions' description={'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' }></AboutCard>
                </div>
                <div className="border  rounded-md p-2">
                <AboutCard icon={< VscServerProcess  size={30} className='icon' />} advantage='Secure off-chain computation' description={'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'}></AboutCard>
                </div>
             </div>
             <a href="/" className=" bg-blue-500 text-white rounded-2xl px-4 p-2">Use Defi</a>
        </div>
     );
}
 
export default About;