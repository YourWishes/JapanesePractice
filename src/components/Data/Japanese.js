const JapaneseData = require('./Japanese.json');

class Japanese  {
    constructor() {
    }
    
    getKatakana() {
        return JapaneseData["katakana"];
    }
    getHiragana() {
        return JapaneseData["hiragana"];
    }
    
    getKatakanaKanaTest() {
        let h = this.getKatakana();
        let data = {};
        
        for(let i = 0; i < h.length; i++) {
            data[h[i]["romaji"]] = h[i]["kana"];
        }
        
        return data;
    }
    
    getKatakanaRomajiTest() {
        let h = this.getKatakana();
        let data = {};
        
        for(let i = 0; i < h.length; i++) {
            data[h[i]["kana"]] = h[i]["romaji"];
        }
        
        return data;
    }
    
    getHiraganaKanaTest() {
        let h = this.getHiragana();
        let data = {};
        
        for(let i = 0; i < h.length; i++) {
            data[h[i]["romaji"]] = h[i]["kana"];
        }
        
        return data;
    }
    
    getHiraganaRomajiTest() {
        let h = this.getHiragana();
        let data = {};
        
        for(let i = 0; i < h.length; i++) {
            data[h[i]["kana"]] = h[i]["romaji"];
        }
        
        return data;
    }
}

const jap = new Japanese();

export default jap;