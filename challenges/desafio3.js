// Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido

db.produtos.find({}).sort({ 
  vendidos: 1,
  }).limit(1);