// exo 1 :

function addition(a, b){

    return a + b
  }
  console.log(addition(2, 3));

  // exo 2 :

  function salutation(eden) {
  
    return "Bonjour, " + eden
    
  }
  console.log(salutation("Eden"));

  // exo 5 :

  function estMajuscule(chaine) {
    return chaine === chaine.toUpperCase();
      
    }
    console.log(estMajuscule("HELLO")); // Résultat attendu : true
    console.log(estMajuscule("Hello")); // Résultat attendu : false

    // exo 6 : 

    function maxDeuxNombres(a, b) {
      if (a >= b) {
        return a;
      }
      else if (a <= b) {
        return b;
      }
    
      
    }
    console.log(maxDeuxNombres(10, 10));

    // exo 7 :

    function difference(a, b) {
      if (a > b) {
        return a - b;
      } else {
        return b - a;
      }
    }
    console.log(difference(120, 110))

    // exo 8 :

    function convertirEnCelsius(fahrenheit) {
      return fahrenheit = (fahrenheit - 32) * 5/9;
      }
      console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

      // exo 9 :

      function estMajeur(age) {
        if (age < 18){
          return false; 
        } 
       else {
          return true;
        }
      }
      console.log(estMajeur(20)); // Résultat attendu : true
      console.log(estMajeur(16)); // Résultat attendu : false

      // exo 10 :

      function maxTroisNombres(a, b, c) {
        return Math.max(a, b, c)
        }
        console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

        
        // sans Math.max :
        function maxTroisNombres(a, b, c) {

          if(a > b && a > b) {
          return a
        }
          else if(b > a & b > c) {
            return b
          }
          else {
            return c
          }
        }
        console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7


        // exo 11 :
        
        function calculer(a, b, operation) {
          return operation(a, b)
          
       }
       function addition(x, y) {
         return x + y;
       }
       function multiplication(x, y) {
         return x * y;
       }
       
       console.log(calculer(5, 3, addition)); // Résultat attendu : 8
       console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15

       // exo 12 : 

       function filtrerTexte(chaine, filtre) {
        return filtre(chaine)
       }
       function estVoyelle(c) {
       //   if (c == "a") {
       //     return "a"
       // }
       //   else if (c == "e") {
       //     return "e"
       //   }
       //   else if (c == "i") {
       //     return "i"
       //   }
       //   else if (c == "o") {
       //     return "o"
       //   }
       //   else if (c == "u") {
       //     return "u"
       //   }
       //   else if (c == "y") {
       //     return "y"
         return c.split("").filter((lettre) => lettre == "u" || lettre == "o" || lettre == "e" || lettre =="i" || lettre =="y" ).join("");
       }
         
       console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oo"

       // en vert c moi en normal c avec l'aide de daris.

       // exo 13 :


        



      




  