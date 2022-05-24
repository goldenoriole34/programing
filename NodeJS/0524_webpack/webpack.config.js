const path = require('path')

module.exports ={
  entry:{ //번들링 할 파일내용(들)
    app:'./src/a.ts'
  },
  module:{
    rules : [{
      test: /\.ts$/, //웹팩이 타입스크립트를 변환하고 싶을 때, 불필요한 파일들을 배제하기 위해 정규식(가급적)으로 변경할 파일을 입력함
      use:'ts-loader',
      exclude: '/node_modules'
    }]
  },
  output:{
    filename:'server.js',
    path:path.join(__dirname, 'app')
  }
}