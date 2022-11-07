// import { IncomingForm } from 'formidable';
import * as fs from 'fs'

// export const config = {
//     api: {
//        bodyParser: true,
//     }
// };

const uploadJson = async (req, res) => {
  // console.log(req.body)
  const newPath = `./public/data/json${Date.now()}.json`
  fs.writeFileSync(newPath, req.body, (err) => {
    if (err) {
      return console.log(err)
    }
    return console.log('The file was saved!')
  })

  res.status(200).send(Date.now())
}
export default uploadJson
