    //Concat

    const concat = (a, b) => { return [...a, ...b] };
    console.log(concat([1,3,5],[7,9,11]));

    //Concat Opcional
        
    const concatB = (a, ...b) => {
            for (i = 0; i < b.length; i++) {
                a = [...a, ...b[i]];
            }
            return a;
        }; 

    console.log(concatB([2,4,6],[8,10,12]));

