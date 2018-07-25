const fs = require('fs')
const rl = require('readline')
const path = require('path')


function vecDotProduct(vecA, vecB) {
	var product = 0;
	for (var i = 0; i < vecA.length; i++) {
		product += vecA[i] * vecB[i];
	}
	return product;
}

/**
 * 
 * @param {Array<Number>} vec 
 */
function vecMagnitude(vec) {
	var sum = 0;
	for (var i = 0; i < vec.length; i++) {
		sum += vec[i] * vec[i];
	}
	return Math.sqrt(sum);
}

/**
 * 
 * @param {Array<Number>} vecA 
 * @param {Array<Number>} vecB 
 */
function cosineSimilarity(vecA, vecB) {
	return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
}

/**
 * 
 * @param {String} filePath 
 */
function getSeparator(filePath) {
    switch (path.extname(filePath)) {
        case '.tsv': return '\t'
        case '.txt': return ' '
        default: return ' ' 
    }
}

/**
 * 
 * @param {String} filePath 
 * @param {boolean} header
 * @returns {Promise<Word2VecModel>} 
 */
function loadModel (filePath, header) {
    var model = new Word2VecModel()
    var separator = getSeparator(filePath)
    return new Promise ( (resolve, reject) => {
        var start = header ? header : false
        var lineReander = rl.createInterface(fs.createReadStream(filePath))
        lineReander.on('line', (line) => {
            if (start) {
                start = false
                return
            }
            var arr = line.split(separator)
            model.addWord([arr[0]], 
                arr.slice(1,arr.length-1)
                .map((val) => parseFloat(val))
            )
        })
        lineReander.on('close', () => {
            resolve(model)
        })

        lineReander.on('SIGCONT', () => reject('SIGCONT'))
        lineReander.on('SIGINT', () => reject('SIGINT'))
        lineReander.on('SIGTSTP', () => reject('SIGTSTP'))

    })
}

class Word2VecModel {
    constructor () {
        this._map = {}
    }

    /**
     * 
     * @param {String} word 
     * @returns {Array<Number>}
     */
    getVectorOf (word) {
        return this._map[word]
    }

    /**
     * 
     * @param {String} word 
     * @param {Array<Number>} vector 
     */
    addWord (word, vector) {
        this._map[word] = vector;
    }

    /**
     * 
     * @param {String} word 
     */
    removeWord (word) {

    }

    /**
     * @returns {Array<String>}
     */
    getWords () {
        return Object.keys(this._map)
    }

    /**
     * 
     * @param {String} word1 
     * @param {String} word2 
     */
    cosineSimilarity (word1, word2) {
        var vec1 = this._map[word1]
        var vec2 = this._map[word2]
        
        if (vec1 && vec2) {
            return cosineSimilarity(vec1, vec2)
        } 
        return undefined
    }
}

module.exports = {
    cosineSimilarity: cosineSimilarity,
    vecMagnitude: vecMagnitude,
    vecDotProduct: vecDotProduct,
    loadModel: loadModel,
    Word2VecModel: Word2VecModel
}
