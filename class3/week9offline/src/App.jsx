import React from "react";
import Post from "./components/post/Post";
import Toggle from "./components/Toggle/Toggle";

function App() {
   const posts = [{
    name:"harkiarat",
    followercount:"10000"
   }]

    return (
        <>
          <Toggle/> 
          <Toggle/> 
          <Toggle/>
          <Post followercount={10000} name="tejas kamble" />
          <Post followercount={209} name= "shubham sat"/>
          <Post followercount={2009} name= "rutu mhaaska"/>
        </>
    );
}

export default App;
