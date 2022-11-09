db.produtos.find({ ingredientes: "picles" }, { valoresNutricionais: { $slice: 3 },
nome: 1,
_id: 0,
ingredientes: 1 });