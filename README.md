# Word2Vec-loader-js
``` javascript
w2v.loadModel('/home/user/word2vec.txt').then(model => {
    var keys = model.getWords()
    console.log(model.cosineSimilarity(keys[10], keys[20]))
    console.log(model.getVectorOf(keys[40]))
}).catch(err => {
    console.error(err)
})
```
