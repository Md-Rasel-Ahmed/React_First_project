import React from "react";
import "../Styles/first.css";
function BioData(props){
    return (
        <>
             <div className='main'>
                <div className="my-bio">
                  <strong>Name : {props.name}</strong>
                 <p>Date of Birth : {props.dateOfBirth}</p>
                 <p>Birth Time : {props.birthTime}</p>
                 <p>Birth Place : {props.birthPlace}</p>
                 <p>Weight : {props.weight}</p>
                 <p>Height : {props.height}</p>
                 <p>Education : {props.education}</p>
                 <p>Religion : {props.religion}</p>
                </div>
                 <div className="family-background">
                     <h4>Family Background</h4>
                 <p>Grand Father :{props.grandFather}</p>
                 <p>Father : {props.father}</p>
                 <p>Mother : {props.mother}</p>
                 <p>Brother : {props.brother.map((brother)=>{
                     return <li>{brother}</li>
                 })}</p>
                 <p>Sister : {props.sister.map((sister)=>{
                     return <li>{sister}</li>
                 })}</p>
                 </div>
             </div>
        </>
    )
}
export default BioData;