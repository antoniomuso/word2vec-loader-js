# Word2Vec-loader-js
``` javascript
w2v.loadModel('/home/user/word2vec.txt').then(model => {
    var keys = model.getWords()
    console.log(model.cosineSimilarity('hello', keys[20]))
    console.log(model.getVectorOf('dance'))
}).catch(err => {
    console.error(err)
})
```
