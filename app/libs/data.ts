import { useState } from "react"

let age:string

age = 'hello'
let array: number[] = [1,2,3,4]

const employee: [number,string][] = [[1,'john'],[1,'sam']]

const job: number | string = 30

type User = {
    id:number,
    name:string
}

const user: User ={ id: 0, name:'John'}

const person:{
  name:string,
  age:number,
  gender:string
  married:boolean
} = {
    name:'Emma Smith',
    age:23,
    gender:'Female',
    married:true
}

const [id, setIds ] = useState<string>('hello')

console.log(id)

interface SumFunc {
    (x:number , y:number ):number
}

const Sum:SumFunc =(x,y)=>{
    const a =  x + y
    return a
}




function MyName<S>(message:S):S{
    return message
}

const Name = MyName<string>('Hello word')


