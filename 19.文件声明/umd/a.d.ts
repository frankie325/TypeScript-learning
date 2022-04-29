interface my {
     a :number
}

// import myUmd =  require("./index.d")


declare module "./index.d.ts" {
    export let a :number
}