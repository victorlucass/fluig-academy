function createDataset(fields, constraints, sortFields) {
  const dataset = DatasetBuilder.newDataset();
  dataset.addColumn("login");
  dataset.addColumn("nome");

  const filter = DatasetFactory.createConstraint(
    "colleagueGroupPK.groupId",
    "GrupoVT",
    "GrupoVT",
    ConstraintType.MUST
  );

  const colleagueGroups = DatasetFactory.getDataset(
    "colleagueGroup",
    null,
    [filter],
    null
  );

  const colleagues = DatasetFactory.getDataset("colleague", null, null, null);

  for (let i = 0; i < colleagueGroups.rowsCount; i++) {
    var colleagueId = colleagueGroups.getValue(
      i,
      "colleagueGroupPK.colleagueId"
    );

    for (let j = 0; j < colleagues.rowsCount; j++) {
      var currentId = colleagues.getValue(j, "colleaguePK.colleagueId");
      var currentName = colleagues.getValue(j, "colleagueName");

      if (colleagueId == currentId) {
        dataset.addRow([colleagueId, currentName]);
      }
    }
  }

  return dataset;
}
