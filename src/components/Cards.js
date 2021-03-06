import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';

const Cards=(props)=> {
        const [readMore,setReadMore]=useState(false);
        const extraContent=<div>
        <div className="extra-content">
            <h5>Title: {props.title}</h5>
            <h6>Author: {props.author}</h6>
            <p>Publisher: {props.publisher}</p>
            <p>Rank Last Week: {props.rank}</p>
            <p>Contributor: {props.contribute}</p>
            {props.desc}
        </div>
    </div>
    const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <div className="card-container">
            <Image src={props.image} alt=""/>
               <div className="description">
                 <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                     {readMore && extraContent}
                 </div>
                 
                 <a target="_blank" href={props.amazon}>Buy from Amazon</a> 
                 <br/>  
                    
                    
        </div>
    )
}
export default Cards;      
                 
            
                
                    
                    
               