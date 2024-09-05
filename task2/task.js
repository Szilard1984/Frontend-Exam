export function countDifferentLetters(sentence) {
    const A_CODE = 97
    const Z_CODE = 122
    const differentLetters = [] 
    for (let i=0; i< sentence.length;i++){
        if(sentence.toLowerCase().charCodeAt(i) >= A_CODE && sentence.toLowerCase().charCodeAt(i) <= Z_CODE && !differentLetters.includes(sentence.toLowerCase()[i])){
            differentLetters.push(sentence[i].toLowerCase())
        }
    }
    return differentLetters.length
    
}