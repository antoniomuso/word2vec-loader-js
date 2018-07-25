# Word2Vec-loader-js

``` javascript
const w2v = require ('word2vec-loader-js')
w2v.loadModel('/home/user/word2vec.txt').then(model => {
    var keys = model.getWords()
    console.log(model.cosineSimilarity('hello', keys[20]))
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
``` typescript
    w2v.loadModel(filePah: String): Promise<Word2VecModel>
```
``` typescript
    w2v.sub(vectorA: Array<Number>, vectorB : Array<Number>) : Array<Number> 
```
``` typescript
    w2v.sum(vectorA: Array<Number>, vectorB : Array<Number>) : Array<Number> 
```
``` typescript
    w2v.cosineSimilarityNormalizedVecs(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
``` typescript
    w2v.cosineSimilarity(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
``` typescript
    w2v.vecDotProduct(vectorA: Array<Number>, vectorB : Array<Number>) : Number 
```
``` typescript
    w2v.vecMagnitude(vec: Array<Number>) : Number 
```
``` typescript
    w2v.norm(vec: Array<Number>) : Array<Number>
```
``` typescript
    w2v.normalize(vec: Array<Number>) : Array<Number>
```
## Word2VecModel
``` typescript
    model.getVectorOf(word : String) : Array<Number>
```
``` typescript
    model.addWord(word : String, vector : Array<Number>) : void
```
``` typescript
    model.removeWord(word : String) : void
```
``` typescript
    model.getWords() : Array<String>
```
``` typescript
    model.cosineSimilarity(wordA: String, wordB : String) : Number
```
``` typescript
    model.cosineSimilarityNormalizedVecs(wordA: String, wordB : String) : Number
```
``` typescript
    model.getMax(word: String) : Number
```
``` typescript
    model.getMin(word: String) : Number
```

