// @errors: 2322
import React from 'react'
interface User {
    name: string;
    id: number;
  }
  
  const user: User = {
    name: "Hayes",
    id: 0,
  };
  
  let studen_name:string='zia'
  let students:User[]=[];
  students.push({
      name: 'zia',
      id: 1,
  })
  console.log(students)
  interface userinfo{
    name:string,
    id:number
  }
  let arr:userinfo[]=[];
  
  let car='maruti sazuki';
  car='123'
  
  const getFavoriteNumber=(name:string): number =>{
    //                        ^^^^^^^^
    return 26;
  
  }
  
  getFavoriteNumber('zia')
  //Anonymous Functions
  const names = ["Alice", "Bob", "Eve"];
   
  // Contextual typing for function
  names.forEach(function (s) {
    console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
  });
  
  // The parameter's type annotation is an object type
  interface userinfoType{
    x:string,
    y?:string
  }
  let userInfo:userinfoType={
    x:'zia',
  
  };
  function printCoord(user:userinfoType) {
    //                      ^^^^^^^^^^^^^^^^^^^^^^^^
    console.log("The coordinate's x value is " + user.x);
  
    console.log("The coordinate's y value is " + user?.y);
    console.log("The coordinate's y value is " + user.y?.toUpperCase());
    
      if(user.y!==undefined){
        
    console.log("The coordinate's y value is " + user.y);
    console.log("The coordinate's y value is " + user.y.toUpperCase());
    }
  
  }
  
  printCoord(userInfo);
  
  //union
  
  //union
  
  function printId(id: number | string| {myID: number}) {
      console.log("Your ID is: " + id);
    console.log("Your ID is: " + id.toUpperCase()); //problem 2
    //error
  //Property 'toUpperCase' does not exist on type 'string | number | { myID: number; }'.
  // Property 'toUpperCase' does not exist on type 'number
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // OK
  printId({ myID: 22342 });
  //Error
  printId({ myID: 'zia ' });
  
  //solution of above problem No 2
  
  function solutionprintId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }
  
  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }