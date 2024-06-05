function validateForm(form) {
  var formValidateSchema = [
    {
      name: "nomeRequisitante",
      message: "Por favor, preencha o campo Nome.",
    },
    {
      name: "emailRequisitante",
      message: "Por favor, preencha o campo E-mail.",
    },
    {
      name: "senhaRequisitante",
      message: "Por favor, preencha o campo Senha.",
    },
    {
      name: "telefoneRequisitante",
      message: "Por favor, preencha o campo Telefone.",
    },
    {
      name: "rgRequisitante",
      message: "Por favor, preencha o campo RG (Registro Geral).",
    },
    {
      name: "dataNascimentoRequisitante",
      message: "Por favor, preencha o campo Data de Nascimento.",
    },
    {
      name: "tipoPontoComercial",
      message: "Por favor, selecione o tipo de Ponto Comercial.",
    },
    {
      name: "cepPontoComercial",
      message: "Por favor, preencha o campo CEP.",
    },
    {
      name: "logradouroPontoComercial",
      message: "Por favor, preencha o campo Logradouro.",
    },
    {
      name: "numeroPontoComercial",
      message: "Por favor, preencha o campo Número.",
    },
    {
      name: "bairroPontoComercial",
      message: "Por favor, preencha o campo Bairro.",
    },
    {
      name: "cidadePontoComercial",
      message: "Por favor, preencha o campo Cidade.",
    },
    {
      name: "estadoPontoComercial",
      message: "Por favor, preencha o campo Estado.",
    },
    {
      name: "valorFinanceiro",
      message: "Por favor, preencha o campo Valor Financeiro.",
    },
  ];

  if (formValidateSchema.length > 0) {
    for (var i = 0; i < formValidateSchema.length; i++) {
      if (form.getValue(formValidateSchema[i].name) == "") {
        throw formValidateSchema[i].message;
      }
    }
  }

  if (
    form.getValue("segunda") != "on" &&
    form.getValue("terca") != "on" &&
    form.getValue("quarta") != "on" &&
    form.getValue("quinta") != "on" &&
    form.getValue("sexta") != "on" &&
    form.getValue("sabado") != "on" &&
    form.getValue("domingo") != "on"
  ) {
    throw i18n.translate("diasTrabalhadosValidate");
  }

  var responsaveis = form.getChildrenIndexes("responsaveisTabela");

  if (responsaveis.length == 0) {
    throw "Por favor, adicione pelo menos um responsável.";
  }

  // ----------------------------------------------------------------------------------------

  // if (form.getValue("nomeFormUser") == "") {
  //   throw "Por favor, preencha o campo Nome.";
  // }
  // if (form.getValue("emailFormUser") == "") {
  //   throw "Por favor, preencha o campo E-mail.";
  // }
  // if (form.getValue("passwordFormUser") == "") {
  //   throw "Por favor, preencha o campo Senha.";
  // }
  // if (form.getValue("cepFormUser") == "") {
  //   throw "Por favor, preencha o campo CEP.";
  // }
  // if (form.getValue("logradouroFormUser") == "") {
  //   throw "Por favor, preencha o campo Logradouro.";
  // }
  // if (form.getValue("numeroFormUser") == "") {
  //   throw "Por favor, preencha o campo Número.";
  // }
  // if (form.getValue("localidadeFormUser") == "") {
  //   throw "Por favor, preencha o campo Cidade.";
  // }
  // if (form.getValue("estadoFormUser") == "") {
  //   throw "Por favor, preencha o campo Estado.";
  // }
  // if (form.getValue("observacaoFormUser") == "") {
  //   throw "Por favor, preencha o campo Observação.";
  // }
  // if (
  //   form.getValue("domingo") != "domingo" &&
  //   form.getValue("sabado") != "sabado" &&
  //   form.getValue("segunda") != "segunda" &&
  //   form.getValue("terca") != "terca" &&
  //   form.getValue("quarta") != "quarta" &&
  //   form.getValue("quinta") != "quinta" &&
  //   form.getValue("sexta") != "sexta"
  // ) {
  //   throw "Por favor, preencha o campo Dias Trabalhados.";
  // }
  // var responsaveis = form.getChildrenIndexes("responsaveisTable");
  // if (responsaveis.length == 0) {
  //   throw "Por favor, adicione pelo menos um responsável.";
  // }

  // ----------------------------------------------------------------------------------------
}
