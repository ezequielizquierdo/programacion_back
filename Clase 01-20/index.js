async function ejemplo() {
 try {
  const modulo = await import('./calculadora.js');
  console.log("modulo ->", modulo);
 } catch (error) {
  console.error("Error ->", error);
 }
}

