const fs = require('fs');

function printReport(pages){
    const myConsole = new console.Console(fs.createWriteStream('./Report/Report-Generated-At-'+new Date()+'.txt'));
    var docText=""
    console.log("===================")
    console.log("======REPORT=======")
    docText+="+++++++++++++++++++++++++REPORT++++++++++++++++++++++++++++++++\n"
    const sortedPages=sortPages(pages)
    for(const sortedPage of sortedPages)
    {
        const url=sortedPage[0]
        const hits=sortedPage[1]
        console.log(`Found ${hits} links to page: ${url}`)
        docText+=`\n Found ${hits} links to page: ${url} \n`
    }

    console.log("===================")
    console.log("===END OF REPORT===")
    docText+="+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
    console.log("===================")
    myConsole.log(docText)
    
}

function sortPages(pages){

   const  pagesArr= Object.entries(pages)
   pagesArr.sort((a,b)=>{
    aHits=a[1]
    bHits=b[1]
    return b[1]-a[1]
   })
   return pagesArr
}

module.exports={sortPages,printReport}