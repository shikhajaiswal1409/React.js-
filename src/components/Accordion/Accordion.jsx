import React, { useState } from 'react'
import { Wrapper } from './AccordionStyled'
import image from '../../assets/Minus.svg'
import imagePlus from '../../assets/Plus.svg'
// const Accordion = () => {

//     const[datas, setDatas] = useState([
//         {
//             title: "What is your name",
//             content: "My name is Shikha Jaiswal",
//             isExpanded: false,
//             id: 1
//         },

//          {
//             title: "Where are you from",
//             content: "I belongs to Bihar",
//             isExpanded: false,
//             id: 2
//         },

//         {
//             title: "Are you married",
//             content: "No",
//             isExpanded: false,
//             id: 3
//         },

//     ]);

//     const handleClick=(id)=>{
// const updatedData = datas.map((item)=>
//     item.id === id? {...item, isExpanded: !item.isExpanded} : item

// )

// setDatas(updatedData)
//     }
//   return (
//    <>
//    {datas.map((item)=>(

//   <Wrapper key={item.id}>
//     <div className="container1" onClick={()=>handleClick(item.id)}>
//       <div className="h1">
//         <h1>{item.title}</h1>
//       </div>
//       <div className="img">
//         <img src={item.isExpanded ? image : imagePlus} alt="toggle" />
//       </div>
//     </div>

//     {/* <div className="container2">
//       <div className="h1">
//         <h1>My name is Shikha Jaiswal</h1>
//       </div>
//       <div className="img2">
//         <img src="src\assets\Minus.svg" alt="Minus" />
//       </div>
//     </div> */}
// {item.isExpanded && (
//             <div className="container2">
//               <h1>{item.content}</h1>
//             </div>
//           )}  </Wrapper>
//   ))}
// </>


//   )
// }

// export default Accordion

// import React from 'react'

// const Accordion = () => {
//     const [datas, setDatas] = useState([
//         {
//             title: "What is your name",
//             content: "My name is Shikha Jaiswal",
//             isExpanded: false,
//             id: 1,
//         },

//         {
//             title: "Where are you from",
//             content: "I belongs to Bihar",
//             isExpanded: false,
//             id: 2,
//         },

//         {
//             title: "Are you married",
//             content: "No",
//             isExpanded: false,
//             id: 3,
//         },



//     ])

//     const handleClick = (id) => {
//         const updatedData = datas.map((data) =>
//             data.id === id ? { ...data, isExpanded: !data.isExpanded } : data
//         )
//         setDatas(updatedData)

//     }

//     return (
//         <>
//             {datas.map((data) => (
//                 <Wrapper key={data.id}>
//                     <div className='container1' onClick={() => handleClick(data.id)}>
//                         <div className='h1'>{data.title}</div>
//                         <div className='img'><img src={data.isExpanded ? image : imagePlus} alt='toggle' /></div>
//                     </div>
//                     {data.isExpanded && (
//                         <div className='conatiner2'>
//                             <h1>{data.content}</h1>
//                         </div>
//                     )}

//                 </Wrapper>
//             ))}
//         </>
//     )
// }

// export default Accordion


const Accordion = () => {

    const[datas, setDatas] = useState([
        {
            title: "Whats your name",
            content: "I am shikha",
            id: 1,
            isExpanded: false,
        }
    ])

    const handleClick =(id)=>{
        const updatedData = datas.map((data)=>(
            data.id === id? {...data, isExpanded : !data.isExpanded}: data
        ))
        setDatas(updatedData)
    }

  return (
    <>
    {datas.map((data)=>(
        <Wrapper key={data.id}>
            <div className='container1' onClick={()=>handleClick(data.id)}>
                <div className='h1'><h1>{data.title}</h1></div>
                <div className='img'><img src={data.isExpanded? image: imagePlus} alt='toggle' /></div>
            </div>
            {data.isExpanded &&
            <div className='container2'>
                <h1>{data.content}</h1>
            </div>
            }
        </Wrapper>
    ))}
    </>
  )
}

export default Accordion
