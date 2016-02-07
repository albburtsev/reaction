describe('Greeting', () => {
    it('should be said', () => {
        const hello = sinon.spy(
            () => console.log('Hello world!')
        );

        // Say hello!
        hello();

        expect(hello.called).to.be.true;
    });
});
