function volumekubus( ) {
  var sisi = document.getElementById ("sisi").value;
  var sisiparsed = parseFloat(sisi)
  var volume = sisiparsed * sisiparsed * sisiparsed
  var volume_kubus = document.getElementById("volume_kubus")
  volume_kubus.innerHTML = "Nilai Volume Kubus adalah :" + sisi + "x" + sisi + "x" + sisi + "=" + volume ;

}

function volumebalok( ) {
  var panjang = document.getElementById ("panjang").value;
  var lebar = document.getElementById ("lebar").value;
  var tinggi = document.getElementById ("tinggi").value;
  var panjangparsed = parseFloat(panjang)
  var lebarparsed = parseFloat(lebar)
  var tinggiparsed = parseFloat(tinggi)
  var volume = panjangparsed * lebarparsed * tinggiparsed
  var volume_balok = document.getElementById("volume_balok")
  volume_balok.innerHTML = "Nilai Volume Balok adalah :" + panjang + "x" + lebar + "x" + tinggi + "=" + volume ;
}

function volumeprismasegitiga( ) {
  var alas = document.getElementById ("alas").value;
  var tinggi_segitiga = document.getElementById ("tinggi_segitiga").value;
  var tinggi_prisma = document.getElementById ("tinggi_prisma").value;
  var alasparsed = parseFloat(alas)
  var tinggi_segitigaparsed = parseFloat(tinggi_segitiga)
  var tinggi_prismaparsed = parseFloat(tinggi_prisma)
  var volume = (0.5 *alasparsed * tinggi_segitigaparsed) * tinggi_prismaparsed
  var volume_prismasegitiga = document.getElementById("volume_prismasegitiga")
  volume_prismasegitiga.innerHTML = "Nilai Volume Balok adalah :"+"(" +"1/2"+ "x"+ alas + "x" + tinggi_segitiga + ")"+"x" + tinggi_prisma + "=" + volume ;
}