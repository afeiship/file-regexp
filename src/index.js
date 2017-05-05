import fs from 'fs';
import path from 'path';

const CHARSET = 'utf-8';

function fileGetContent(inFile,inRegRe){
  let str = fs.readFileSync(inFile,CHARSET);
  return str.match(inRegRe)[1];
}

function fileReplaceContent(inFile,inRegRe,inString){
  let str = fs.readFileSync(inFile,CHARSET);
  str = str.replace(inRegRe,(fullStr,match)=>{
    return fullStr.replace(match,inString);
  });
  fs.writeFileSync(inFile,str);
}

export {
  fileGetContent,
  fileReplaceContent
};
