import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res)=>{
    const message=`Yarab,و يا ايها الذين امنوا إذا لقيتم فئة فاثبتوا واذكروا الله كثيرا لعلكم تفلحون ,I am pod ${os.hostname()}`
    res.send(message)

})
app.listen(PORT, ()=>{
    console.log(`web server is listening at port ${PORT}`)
    console.log(os.hostname())
})


