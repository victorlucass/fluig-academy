// api https://viacep.com.br/

$("#cepFormUser").blur(() => {
  $.getJSON(
    `https://viacep.com.br/ws/${$.trim($("#cepFormUser").val())}/json/`,
    function (data, textStatus, jqXHR) {
      $("#logradouroFormUser").val(data.logradouro);
      $("#localidadeFormUser").val(data.localidade);
      $("#estadoFormUser").val(data.uf);
      $("#bairroFormUser").val(data.bairro);
    }
  );
});
