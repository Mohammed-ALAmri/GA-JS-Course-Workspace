var obj = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        v: '...-',
        x: '-..-',
        y: '-.--',
        z: '--..'};

        
    function morseCode(word){
        let res ="";
        word = word.split("");
        for(let j = 0 ; j < word.length; j++){
            for(var key in obj){
                if(key == word[j]){
                    res += obj[key];
                }
            }
        }
        return res;
    }

    console.log(morseCode("hello world"));

    function rmorseCode(word){
        word = word.split("   ");
        let res ="";
        for(let i = 0; i < word.length ; i++){
            let w = word[i].split(" ");
            for(let j = 0; j < w.length ; j++){
                 w = word[i].split(" ");
                
                for(var key in obj){
                    if(obj[key] == w[j]){
                        res += key
                    }
                }
            }
            res += " ";

        }
        return res;
    }
    console.log(rmorseCode("-.-- --- ..- .-.   .. -. ... - .-. ..- -.-. - --- .-. ...   .-.. --- ...- .   -.-- --- ..-"));