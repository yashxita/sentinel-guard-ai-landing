import React from 'react'
interface TeamCardProps {
    name:string;
    designation: string;
    imageURL: string;
}
const TeamCard : React.FC<TeamCardProps> = ({name,designation,imageURL})=>
{
    return(
        <div className="bg-black text-white p-6 rounded-lg shadow-lg mx-auto">
      <div className="flex flex-col ">
        <img src={imageURL} alt={name} className="w-56 h-56 mb-4 border border-white" />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-400">{designation}</p>
      </div>
    </div>
    );
};
export default TeamCard;