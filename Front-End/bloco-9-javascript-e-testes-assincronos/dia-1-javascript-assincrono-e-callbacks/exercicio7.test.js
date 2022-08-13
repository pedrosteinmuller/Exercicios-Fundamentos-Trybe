const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('testando a função uppercase para deixar as letras maiúsculas', (done) => {
  uppercase("test", (str) => {
    try {
      expect(str).toBe("TEST");
      done();
    } catch (error) {
      done(error);
    }
  });
});
