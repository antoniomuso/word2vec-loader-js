# Word2Vec-loader-js

``` javascript
const w2v = require ('word2vec-loader-js')
w2v.loadModel('/home/user/word2vec.txt').then(model => {
    console.log(model.cosineSimilarity('hello', ''bye))
    console.log(model.getVectorOf('dance'))
}).catch(err => {
    console.error(err)
})
```
## Install
``` shell
    npm install word2vec-loader-js --local
```

# API
## w2v
***.loadModel***
``` typescript
    w2v.loadModel(filePah: String): Promise<Word2VecModel>
```
***.sub***
``` typescript
    w2v.sub(vectorA: Array<Number>, vectorB : Array<Number>) : Array<Number> 
```
***.sum***
``` typescript
    w2v.sum(vectorA: Array<Number>, vectorB : Array<Number>) : Array<Number> 
```
***.cosineSimilarityNormalizedVecs***
``` typescript
    w2v.cosineSimilarityNormalizedVecs(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
***.cosineSimilarity***
``` typescript
    w2v.cosineSimilarity(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
***.vecDotProduct***
``` typescript
    w2v.vecDotProduct(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
***.vecMagnitude***
``` typescript
    w2v.vecMagnitude(vec: Array<Number>) : Number 
```
***.norm***
``` typescript
    w2v.norm(vec: Array<Number>) : Array<Number>
```
***.normalize***
``` typescript
    w2v.normalize(vec: Array<Number>) : Array<Number>
```
## Word2VecModel
***.getVectorOf***
``` typescript
    model.getVectorOf(word : String) : Array<Number>
```
***.addWord***
``` typescript
    model.addWord(word : String, vector : Array<Number>) : void
```
***.removeWord***
``` typescript
    model.removeWord(word : String) : void
```
***.getWords***
``` typescript
    model.getWords() : Array<String>
```
***.cosineSimilarity***
``` typescript
    model.cosineSimilarity(wordA: String, wordB : String) : Number
```
***.cosineSimilarityNormalizedVecs***
``` typescript
    model.cosineSimilarityNormalizedVecs(wordA: String, wordB : String) : Number
```
***.getMax***
``` typescript
    model.getMax(word: String) : Number
```
***.getMin***
``` typescript
    model.getMin(word: String) : Number
```

