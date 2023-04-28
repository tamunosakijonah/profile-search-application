// import {Peoples} from './people'
// import{useState} from 'react'

// function Main(){
//     const renderedPeople = Peoples.filter(people =>people.firstName.toLowerCase.includes(newName)).map((people,index) =>{
//         return(
//             <div key={people.id} style={{display:'grid',gridTemplateColumns:'10px 10px'}} >
//                  <div style={{display:'flex',gap:'10px'}}>
//                         <div>
//                             <img src={people.picture} alt='images'></img>
//                         </div>
//                         <div>
//                             <div>{people.id}</div>
//                             <span>{people.title }</span>
//                             <span>{people.firstName}</span>
//                             <span>{people.lastName}</span>
//                         </div>

//                     </div>   
//             </div>
//         )
//     })

//     return(
//         <div>
//             {renderedPeople}
//         </div>
//     )
// }
// export default Main