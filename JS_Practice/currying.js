function mergewords(){
    return function there(){
        console.log("There");
        return function is(){
            console.log("is");
            return function no(){
                console.log("no");
                return function spoon(){
                    console.log("spoon");
                }
            }
        }
    }
}
mergewords()()()()();