//경로설정을 위한 모듈 
const path = require('path');
const os   = require('os');
const fs = require('fs');

//🎇💁‍♀️ 사용자가 원하는 폴더명 받아오기 

//원하는 인자 받아올떄 process argv 이용 
console.log(process.argv)
// [
//    노트가실행되는경로 :  'C:\\Program Files\\nodejs\\node.exe', 
//    노드 어플리케이션경로 :  'C:\\Users\\roberto\\Desktop\\gitUpload\\file-arranger\\app.js',
//    인자 : 'test'
//   ]

const folder = process.argv[2];
console,log(path.josin(os.homedir()));

//운영체제 홈디렉토리에 pictures 폴더에 사용자가 원하는 폴더(Pictures)에 
const workDir = path.join(os.homedir(), 'Pictures', folder );
//원하는 폴더 아니라면 
if(!folder || !fs.existsSync(workDir)){
    console.error('....error :(');
    return;
}
console.log('workDir:',workDir);

//🎇💁‍♀️ 폴더안에 video, captured, duplicated 폴더 만든다 
//workDir 안에 
const videoDir = path.join(workDir,'video');
const capturedDir = path.join(workDir,'captured');
const duplicatedDir = path.join(workDir,'duplicated');

console.log('각디렉터리 출력:',videoDir);
console.log('각디렉터리 출력:',capturedDir);
console.log('각디렉터리 출력:',duplicatedDir);

//🎇💁‍♀️ 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae , 