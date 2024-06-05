function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();

  dataset.addColumn("sigla");
  dataset.addColumn("moeda");

  dataset.addRow(new Array("R$", "Real"));
  dataset.addRow(new Array("US$", "Dolar"));
  dataset.addRow(new Array("$", "Peso"));

  return dataset;
}
function onMobileSync(user) {}
