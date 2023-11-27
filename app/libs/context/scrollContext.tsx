'use client'
import  { useState , createContext, useContext } from 'react'


const scroll = createContext<any>(null)


export default function   ScrollContext({ children}:{ children: React.ReactNode}) {
  const [scrollNum , setScrollNum] = useState<number>(0)

  return (
    <scroll.Provider value={{scrollNum ,setScrollNum } }>
      {children}
    </scroll.Provider>
  )
}

export  function useScrollNum (){
  const context = useContext(scroll)
  if(!context){
    throw new Error('Context must be use in scrollNum context Provider')
  }else{
    return context
  }

}