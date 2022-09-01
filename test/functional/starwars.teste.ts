describe('Valida o comportamento de uma funcao', ()=>{
    class Operation{
        sum(a: number,b: number): number {
            return a+b
        }
        sub(a: number,b: number): number {
            return a-b
        }
        mult(a: number,b: number): number {
            return a*b
        }
    }
    
    
    
    it('Soma de a+b', ()=>{ 
        const result: number = new Operation().sum(10,10)
        expect(result).toBe(20)
    });

    it('Soma de a-b', ()=>{
        expect(new Operation().sub(10,10)).toBe(0)
    });

    it('Multi de a*b', ()=>{
        expect(new Operation().mult(10,10)).toBe(100)
    });

});

describe('Unit testing for StarWars API', ()=>{
   it('Should return a not null list of planets',async()=>{
        const response =await global.testRequest.get('/planets')
        expect(response).not.toBeNull()
   })

   it('Should return a not null list of planets',async()=>{
    const response =await global.testRequest.get('/planets')
    const body = response.body
    expect(body).toEqual({})
    })

   it('Should return a valid list of planets',()=>{
    console.log('TODO:Should return a valid list of planets')
})
});