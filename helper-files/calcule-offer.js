function calculate(str) {
    if (typeof str == 'number') return str;
    var nr;
    var virgulaSeparaDecimais = str.match(/(,)\d{2}$/);
    if (virgulaSeparaDecimais) nr = str.replace('.', '').replace(',', '.')
    else nr = str.replace(',', '');
    return parseFloat(nr);
}

$(document).ready(function () {
    $(".desconto").click(function () {
        var valorTotal = calculate($("#valorTotal").val());
        var adValorem = calculate($("#adValorem").val());
        
        var v1 = valorTotal * adValorem / 100;

        $("#valor").val(v1 + v2);
    });
});
