        /* Para mostrar las flechas*/
        function mostrar() {
            var x = document.getElementById("flechas");
            var y = document.getElementById("flechas_arriba");
            
            //Flechas que van hacia un lado
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
            //Flechas que apuntan hacia arriba
            if (y.style.display === "block") {
                y.style.display = "none";
            } else {
                y.style.display = "block";
            }
        }
        /* Para que el menu sea desplegable*/
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        window.onclick = function(e) {
          if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
              if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
              }
          }
        }
			/*ocultar flechas*/
			function verform(){
 				document.getElementById("flechas").style.visibility="hidden";
 				document.getElementById("flechas_arriba").style.visibility="hidden";
			} 
			