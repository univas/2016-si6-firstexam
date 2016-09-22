function conversor(str) {
    if (typeof str == 'number') return str;
    var nr;
    var virgulaSeparaDecimais = str.match(/(,)\d{2}$/);
    if (virgulaSeparaDecimais) nr = str.replace('.', '').replace(',', '.')
    else nr = str.replace(',', '');
    return parseFloat(nr);
}

$(document).ready(function () {
    $(".seguro").click(function () {
        var valorTotaldaNota = conversor($("#valorTotaldaNota").val());
        var adValorem = conversor($("#adValorem").val());
        var gris = conversor( <? php echo $gris; ?> )

        var v1 = valorTotaldaNota * adValorem / 100;
        var v2 = valorTotaldaNota * gris / 100;

        $("#valordoSeguro").val(v1 + v2);
    });
});
