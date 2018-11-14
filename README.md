##Webpack Tutorial

> 이 프로젝트는 webpack 공식 문서를 보고 진행 하였습니다.
> [Webpack 공식 홈페이지](https://webpack.js.org/)

##필수 설치
* Node.js
    * [Node.js 공식 홈페이지](https://nodejs.org/)
* NPM 설치
    * [NPM 다운로드 페이지](https://www.npmjs.com/get-npm)

##개발환경
* MacOS : High Sierra 10.13.6
* IDE   : WebStorm 2017.3.1
* javascript version: ECMAscript6

##환경설정
1. mkdir [프로젝트] && cd [프로젝트]
2. 다음 명령어 실행
<pre>
<code>
$ npm install --save-dev webpack@<version>
$ npm install --save-dev webpack-cli (webpack v4 이상일 경우)
=> $ npm install --save-dev webpack webpack-cli
$ npm init - y
</code>
</pre>

3. webpack.config.js 생성
4. package.json 파일 설정

##webpack build
<pre>
<code>
$ npm run build
</code>
</pre>