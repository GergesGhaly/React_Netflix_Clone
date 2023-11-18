import React ,{ useState } from 'react'
import Tabs from './Tabs'
import {tabbels} from './constant'


const Tabscomponent = () => {
    const [activtab,setactivtab] = useState(tabbels.Cancel_Any_Time);

    const onclicktab =(tab)=>{
        setactivtab(tab)
    }
    return (
        <div>
            <Tabs activtabname={activtab} onclicktab={onclicktab}/>
        </div>
    )
}

export default Tabscomponent
