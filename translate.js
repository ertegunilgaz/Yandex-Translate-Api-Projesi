function Translate (word,language){
    this.apikey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (Callback){
    // Ajax işlemleri
    const endpoint = `https://api.mymemory.translated.net/get?q=${this.word}!&langpair=${this.language}.key=${this.apikey}`;
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText)
            const text = json.text[0]; 

            Callback(null,text);
        }
        else {
            Callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord,newLanguage){
   this.word = newWord;
   this.language = newLanguage; 
}
