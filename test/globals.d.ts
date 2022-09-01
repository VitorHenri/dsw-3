//configuração da globals do Node.js para
declare global {
    //eslint-disable-next-line no-var
    var testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
  
  export {};