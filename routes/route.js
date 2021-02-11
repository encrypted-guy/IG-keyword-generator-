const express = require('express')
const router = express.Router()
const rp = require('request-promise');

router.get('', (req, res) => {
    const keyWord = req.query.keyWord
    let URL = `https://www.instagram.com/explore/tags/${keyWord}/`
    let newArray = []
    rp(URL)
        .then((html) => {
            let hashtags = scrapeHashtags(html);
            hashtags = removeDuplicates(hashtags);
            hashtags = hashtags.map(ele => "#" + ele)
            // console.log(hashtags);
            // console.log(hashtags.length);
            deveide(hashtags.length, 30, 0, hashtags.length, hashtags)
        })
        .catch((err) => {
            console.log(err);
        });
    
        const scrapeHashtags = (html) => {  
            var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
            var matches = [];
            var match;
            while ((match = regex.exec(html))) {
                matches.push(match[1]);
            }
            return matches;
        }
        const removeDuplicates = (arr) => {
            let newArr = [];
            arr.map(ele => {
                if (newArr.indexOf(ele) == -1){
                    newArr.push(ele)
                }
            })
            return newArr;
        }

        const deveide = (totalLength, Limit, start, endOder, TheArray) => {
            for (Limit; totalLength > Limit; Limit = Limit+30 ) {
                let eacharray = TheArray.slice(start, Limit)
                newArray.push(eacharray)
                start = start+30
                if (Limit > endOder) {

                    // OUTPUT FUNCTION
                    // console.log(newtags)
                    // console.log(newArray)
                    removeDuplicates(newArray)
                    return res.json({
                        success: true,
                        data: newArray
                    })
                } 
                endOder = endOder - 30
            }
        }
})




module.exports = router