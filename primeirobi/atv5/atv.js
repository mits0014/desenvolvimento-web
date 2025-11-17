const valorConta = 100;
const percentualgorjeta = 10;

const valorGorjeta = (valorConta * percentualgorjeta) / 100;

const valorTotal = valorConta + valorGorjeta;

console.log(`Valor da conta: R$ ${valorConta.toFixed(2)} valor da gorjeta: R$ ${valorGorjeta.toFixed(2)} valor total: R$ ${valorTotal.toFixed(2)}`);