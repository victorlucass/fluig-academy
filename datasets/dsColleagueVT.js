function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();
  dataset.addColumn("login");
  dataset.addColumn("nome");

  var filterColleagueGroup = DatasetFactory.createConstraint(
    "colleagueGroupPK.groupId",
    "GrupoVT",
    "GrupoVT",
    ConstraintType.MUST
  );

  var datasetColleagueGroup = DatasetFactory.getDataset(
    "colleagueGroup",
    null,
    new Array(filterColleagueGroup),
    null
  );

  for (var i = 0; i < datasetColleagueGroup.rowsCount; i++) {
    var colleagueId = datasetColleagueGroup.getValue(
      i,
      "colleagueGroupPK.colleagueId"
    );

    var datasetColleagueAll = DatasetFactory.getDataset(
      "colleague",
      null,
      null,
      null
    );

    for (var j = 0; j < datasetColleagueAll.rowsCount; j++) {
      var _colleagueId = datasetColleagueAll.getValue(
        j,
        "colleaguePK.colleagueId"
      );

      var _colleagueName = datasetColleagueAll.getValue(j, "colleagueName");

      if (colleagueId == _colleagueId) {
        dataset.addRow(new Array(_colleagueId, _colleagueName));
      }
    }
  }

  return dataset;
}
