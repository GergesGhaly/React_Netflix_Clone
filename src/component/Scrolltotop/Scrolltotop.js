import React ,{useState,useEffect} from 'react'
import './Scrolltotop.css'


function Scrolltotop() {

    const [Isvisable,setIsvisable] = useState(false)

    const Toglevisablity=()=>{
        if(window.pageYOffset>300){
            
            setIsvisable(true)
        
        }else{
            setIsvisable(false)

        }
    }

    const Scrolltotop=()=>{
window.scrollTo({
    top:0,
    behavior:"smooth"
})

    }

    useEffect(()=>{
        window.addEventListener("scroll",Toglevisablity)

        return()=>{
            window.removeEventListener("scroll",Toglevisablity)
        }
    },[])

    return (
        <div className="scroll-to-top">
            {Isvisable && (
                            <div onClick={Scrolltotop}>
                            <i className="fas fa-arrow-circle-up fa-3x"></i>
                        </div>
            
            )
            }
        </div>
    )
}

export default Scrolltotop
