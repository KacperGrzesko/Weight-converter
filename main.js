document.getElementById("pounds").addEventListener("input", function() {
  document.getElementById("MainInput").placeholder = "Enter pounds...";
  document.getElementById("MainInput").addEventListener("input", function() {
    let pounds = this.value;
    document.getElementById("poundsOutput").innerHTML = pounds;
    document.getElementById("gramsOutput").innerHTML = (pounds * 453.6).toFixed(
      2
    );
    document.getElementById("kgOutput").innerHTML = (pounds * 0.453).toFixed(2);
    document.getElementById("ouncesOutput").innerHTML = (pounds * 16).toFixed(
      2
    );
  });
});
document.getElementById("kilograms").addEventListener("input", function() {
  document.getElementById("MainInput").placeholder = "Enter kilograms...";
  document.getElementById("MainInput").addEventListener("input", function() {
    let kilos = this.value;
    document.getElementById("poundsOutput").innerHTML = (kilos * 2.204).toFixed(
      2
    );
    document.getElementById("kgOutput").innerHTML = kilos;
    document.getElementById("gramsOutput").innerHTML = (kilos * 1000).toFixed(
      2
    );
    document.getElementById("ouncesOutput").innerHTML = (kilos * 35.27).toFixed(
      2
    );
  });
});
document.getElementById("grams").addEventListener("input", function() {
  document.getElementById("MainInput").placeholder = "Enter grams...";
  document.getElementById("MainInput").addEventListener("input", function() {
    let grams = this.value;
    document.getElementById("poundsOutput").innerHTML = (
      grams * 0.0022
    ).toFixed(2);
    document.getElementById("kgOutput").innerHTML = (grams * 0.001).toFixed(2);
    document.getElementById("gramsOutput").innerHTML = grams;
    document.getElementById("ouncesOutput").innerHTML = (grams * 0.035).toFixed(
      2
    );
  });
});
document.getElementById("ounces").addEventListener("input", function() {
  document.getElementById("MainInput").placeholder = "Enter ounces...";
  document.getElementById("MainInput").addEventListener("input", function() {
    let ounces = this.value;
    document.getElementById("poundsOutput").innerHTML = (
      ounces * 0.0625
    ).toFixed(2);
    document.getElementById("kgOutput").innerHTML = (ounces * 0.0283).toFixed(
      2
    );
    document.getElementById("gramsOutput").innerHTML = (
      ounces * 28.349
    ).toFixed(2);
    document.getElementById("ouncesOutput").innerHTML = ounces;
  });
});
