const AboutCard = ({icon,advantage,description}) => {
    return ( 
        <div >
           {icon}
           <h3 className="px-1 p-2">{advantage}</h3>
           <p className="px-1 py-2">{description}</p>
        </div>
     );
}
 
export default AboutCard;