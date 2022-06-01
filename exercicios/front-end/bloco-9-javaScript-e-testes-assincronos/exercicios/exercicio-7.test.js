const { uppercase } = require('./exercicio-7');

describe('Testando uppercase', () => {
    test('Teste de Calback para Upcase', () => {
        uppercase('Gustavo', (str) => {
            try {
                expect(str).toBe('GUSTAVO');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});