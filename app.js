  const qr1=require('qrcode')
  const xlsx=require('xlsx')


const createQR=(data,filename)=>{
  qr.toFile("images/"+ filename +".png",data,{width:250,height:250})
}
  




const ws=xlsx.readFile("nodeqr.xlsx").Sheets["Sheet1"]
const data=xlsx.utils.sheet_to_json(ws)
data.forEach((r)=>{
  createQR(r.participants,r.filename)
})
  
