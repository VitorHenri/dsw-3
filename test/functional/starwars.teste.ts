
describe('Exemplo de teste unitário',()=>{
    function soma(a:number,b:number):number{
        return a+b;
    }
    
    it('Exemplo de teste', ()=>{
        console.log('Exemplo...')
    });

    it('Soma de a-b',()=>{
        expect(soma(10,10)).toBe(20)
    })
})