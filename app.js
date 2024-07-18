function criptografar() {
    let textoOriginal = document.querySelector('.campo-de-entrada').value.toLowerCase();
    let textoCriptografado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            default:
                textoCriptografado += textoOriginal[i];
        }
    }

    document.querySelector('.texto-decodificado').value = textoCriptografado;
    document.querySelector('.area-desativada').style.display = 'flex';
    document.querySelector('.area-ativada').style.display = 'none';
}

function descriptografar() {
    let textoCriptografado = document.querySelector('.campo-de-entrada').value.toLowerCase();
    let textoDescriptografado = '';

    // Realiza a substituição reversa conforme as regras de criptografia
    textoDescriptografado = textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.texto-decodificado').value = textoDescriptografado;
    document.querySelector('.area-desativada').style.display = 'flex';
    document.querySelector('.area-ativada').style.display = 'none';
}

function copiar() {
    let textoDecodificado = document.querySelector('.texto-decodificado');

    textoDecodificado.select();
    textoDecodificado.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    document.execCommand('copy');
    alert('Texto copiado para a área de transferência: ' + textoDecodificado.value);

    const areaAtivada = document.querySelector('.area-ativada');
        const areaDesativada = document.querySelector('.area-desativada');
        areaAtivada.style.display = 'flex';
        areaDesativada.style.display = 'none';
}
