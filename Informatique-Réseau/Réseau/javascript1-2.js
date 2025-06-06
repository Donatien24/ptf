$(document).ready(function() {

  let tableau1=["/images/ccampus.png","/images/zabbix.png","/images/chevrolier.png","/images/Cartographie.png"]
  let tableau2=["/images/ccampus.png","/images/zabbix.png","/images/chevrolier.png","/images/Cartographie.png"]

  let indice1 = 0;
  let indice2 = 0;

  const changeimages = (select, tableau) => {

    let indice = 0

    if (select == ".imagesintro > div:nth-child(1) > img") {
      indice = indice1
    }
    else {
      indice = indice2
    }

    $(select).animate({
      opacity: 0
    }, 1000, function(){
      $(this).attr("src", tableau[indice]).animate({opacity: 1}, 1000);
    });

    if (select == ".imagesintro > div:nth-child(1) > img") {
      indice1++
      if (indice1 == tableau.length) {
        indice1 = 0
      }
    }
    else {
      indice2++
      if (indice2 == tableau.length) {
        indice2 = 0
      }
    }

  }

  setInterval(changeimages, 15000, ".imagesintro > div:nth-child(1) > img", tableau1)

  setInterval(changeimages, 50000, ".imagesintro > div:nth-child(2) > img", tableau2)

  








  /* Animation lier au bouton 1 et au menu 1 */

  $("#bouton1").on('click', function(){

    $('#bouton1').off('mouseenter mouseleave');
  
    $('#bouton2').hover(
      function() {
        $('#bouton2').css({
          color: 'rgb(211, 151, 53)',
          borderBottom: 'solid 0.35em rgb(211, 151, 53)',
          marginBottom: '-0.30em'
        });
      },
      function() {
        $('#bouton2').css({
          color: 'white',
          borderBottom: 'none',
         marginBottom: 0
        });
      } 
    );
  
  
    $('#bouton1').css({
      color: 'rgb(75, 195, 75)',
      borderBottom: 'solid 0.35em rgb(75, 195, 75)',
      marginBottom: '-0.30em'
  });
  
      if ($("#bouton2").hasClass('inactive')) {
        $("#bouton2").removeClass('inactive').addClass('active');
  
  /* Reset de couleur bouton2 */
      $('#bouton2').css({
        color: 'white',
        borderBottom: 'none',
        marginBottom: 0
      }); 
  
  
        
      $(".menu2").stop(false, false).animate({
        marginRight: "-300vw",
      }, 1000);
  
  
      }
  
      if ($(this).hasClass('inactive')) {
        $(this).removeClass('inactive').addClass('active');
  
        $('#bouton1').css({
          color: 'white',
          borderBottom: 'none',
          marginBottom: '0em'
      });
  
            /* Effet pour remettre en fonctionnement le hover ! */
    $('#bouton1').hover(
      function() {
        $('#bouton1').css({
          color: 'rgb(75, 195, 75)',
          borderBottom: 'solid 0.35em rgb(75, 195, 75)',
          marginBottom: '-0.30em'
        });
      },
      function() {
        $('#bouton1').css({
          color: 'white',
          borderBottom: 'none',
          marginBottom: 0
        });
      } 
  );
  
  $('#bouton2').hover(
    function() {
      $('#bouton2').css({
        color: 'rgb(211, 151, 53)',
        borderBottom: 'solid 0.35em rgb(211, 151, 53)',
        marginBottom: '-0.30em'
      });
    },
    function() {
      $('#bouton2').css({
        color: 'white',
        borderBottom: 'none',
       marginBottom: 0
      });
    } 
  );
  
      
  
        $(".menu1").stop(false, false).animate({
          marginRight: "-300vw",
        }, 1000, function(){
          $("#back-menu").animate({
            opacity: 0
          }, 200, function(){
            $(".container__menus").css("display", "none")
          })
        });
  
      }
      
      else {
        $(this).removeClass('active').addClass('inactive');
  
        $(".container__menus").css("display", 'flex')
        $('#bouton1').css({
          color: 'rgb(75, 195, 75)',
          borderBottom: 'solid 0.35em rgb(75, 195, 75)',
          marginBottom: '-0.30em'
      });
  
  
        $(".menu1").stop(true, true).animate({
          marginRight: "0vw",
        }, 1000, function(){
          $("#back-menu").css("display", 'flex')
          $("#back-menu").animate({
            opacity: 1
          }, 200)
        });
  
      }
    });
  
  
  
    /* Animation lier au bouton 2 et au menu 2 */
  
    $("#bouton2").on('click', function(){
  
  $('#bouton2').off('mouseenter mouseleave');
  
  $('#bouton1').hover(
    function() {
      $('#bouton1').css({
        color: 'rgb(75, 195, 75)',
        borderBottom: 'solid 0.35em rgb(75, 195, 75)',
        marginBottom: '-0.30em'
      });
    },
    function() {
      $('#bouton1').css({
        color: 'white',
        borderBottom: 'none',
        marginBottom: 0
      });
    } 
  );
  
  
  $('#bouton2').css({
    color: 'rgb(211, 151, 53)',
    borderBottom: 'solid 0.35em rgb(211, 151, 53)',
    marginBottom: '-0.30em'
  });
  
  
      if ($("#bouton1").hasClass('inactive')) {
        $("#bouton1").removeClass('inactive').addClass('active');
  
  /* Reset de couleur bouton1 */
        $('#bouton1').css({
          color: 'white',
          borderBottom: 'none',
          marginBottom: '0em'
      });
  
  
        $(".menu1").stop(false, false).animate({
          marginRight: "-300vw",
        }, 1000);
  
  
      }
  
      if ($(this).hasClass('inactive')) {
        $(this).removeClass('inactive').addClass('active');
  
        $('#bouton2').css({
          color: 'white',
          borderBottom: 'none',
          marginBottom: 0
      });
  
            /* Effet pour remettre en fonctionnement le hover ! */
    
            $('#bouton2').hover(
              function() {
                $('#bouton2').css({
                  color: 'rgb(211, 151, 53)',
                  borderBottom: 'solid 0.35em rgb(211, 151, 53)',
                  marginBottom: '-0.30em'
                });
              },
              function() {
                $('#bouton2').css({
                  color: 'white',
                  borderBottom: 'none',
                 marginBottom: 0
                });
              } 
            );
  
            $('#bouton1').hover(
              function() {
                $('#bouton1').css({
                  color: 'rgb(75, 195, 75)',
                  borderBottom: 'solid 0.35em rgb(75, 195, 75)',
                  marginBottom: '-0.30em'
                });
              },
              function() {
                $('#bouton1').css({
                  color: 'white',
                  borderBottom: 'none',
                  marginBottom: 0
                });
              } 
          );
          
  
        $(".menu2").stop(false, false).animate({
          marginRight: "-300vw",
        }, 1000, function(){
          $("#back-menu").animate({
            opacity: 0
          }, 200, function(){
            $(".container__menus").css("display", "none")
          })
        });
  
      }
      
      else {
        $(this).removeClass('active').addClass('inactive');
  
        $('#bouton2').css({
          color: 'rgb(211, 151, 53)',
          borderBottom: 'solid 0.35em rgb(211, 151, 53)',
          marginBottom: '-0.30em'
      });
  
        $(".container__menus").css("display", 'flex')
  
        $(".menu2").stop(true, true).animate({
          marginRight: "0vw",
        }, 1000, function(){
          $("#back-menu").css("display", 'flex')
          $("#back-menu").animate({
            opacity: 1
          }, 200)
        });
  
      }
    });


  







/*


  let tableauart = ['articles/RéalisationBlog.html','articles/BDDgestionincident.html','articles/ServiceNextcloud.html','articles/PropositionInfraRéseau.html','articles/CasTamaran.html']

    const container = document.querySelector('.case');

    tableauart.forEach(url => {
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Erreur avec le statut ${response.status}`);
              }
              return response.text();  // On récupère le contenu HTML en texte
          })
          .then(data => {
              // Créer un nouvel élément div pour chaque contenu chargé
              const newElement = document.createElement('div');
              newElement.innerHTML = data;

              // Ajout du nouveau contenu au conteneur
              container.appendChild(newElement);

          })

          .catch(error => {
              console.error('Erreur lors du chargement de la page :', error);
          });
      });


      $(document).on('click', '.bandeau1', function() {

        let $parentContainer = $(this).parent();

        if ($(this).hasClass("inactive")) {
      
          $(this).removeClass("inactive").addClass("active");
      
          $(this).find("svg").css({
            transformOrigin: "center",
            transform: "rotate(90deg)"
          }, 1000)
      
          
          $parentContainer.find(".article").slideToggle({
          }, 1000)
        }
        else {
          $(this).removeClass("active").addClass("inactive")
      
          $(this).find("svg").css({
            transformOrigin: "center",
            transform: "rotate(0deg)"
          }, 1000)
      
          $parentContainer.find(".article").slideToggle({
          }, 1000)
      
        }
      
      });



      $(".bandeau2").on('click', function() {

        if ($(this).hasClass("inactive")) {
      
          $(this).removeClass("inactive").addClass("active");
      
          $(this).find("svg").css({
            transformOrigin: "center",
            transform: "rotate(90deg)"
          }, 1000)
      
          
          $(".articleGSB").slideToggle({
          }, 1000)
        }
        else {
          $(this).removeClass("active").addClass("inactive")
      
          $(this).find("svg").css({
            transformOrigin: "center",
            transform: "rotate(0deg)"
          }, 1000)
      
          $(".articleGSB").slideToggle({
          }, 1000)
      
        }

      })
 */

    

/* Click sur l'arrière plan pour désactiver tout les menus */ 


$("#back-menu").on('click', function() {

  if ($("#bouton2").hasClass('inactive')) {
    $("#bouton2").removeClass('inactive').addClass('active');

  $('#bouton2').css({
    color: 'white',
    borderBottom: 'none',
    marginBottom: 0
  }); 

  $('#bouton2').hover(
    function() {
      $('#bouton2').css({
        color: 'rgb(211, 151, 53)',
        borderBottom: 'solid 0.35em rgb(211, 151, 53)',
        marginBottom: '-0.30em'
      });
    },
    function() {
      $('#bouton2').css({
        color: 'white',
        borderBottom: 'none',
       marginBottom: 0
      });
    } 
  );

  $(".menu2").stop(false, false).animate({
    marginRight: "-300vw",
  }, 1000, function() {
    $(".container__menus").css("display", "none")
  });
  }

  if ($("#bouton1").hasClass('inactive')) {
    $("#bouton1").removeClass('inactive').addClass('active');

    $('#bouton1').css({
      color: 'white',
      borderBottom: 'none',
      marginBottom: '0em'
  });

  $('#bouton1').hover(
    function() {
      $('#bouton1').css({
        color: 'rgb(75, 195, 75)',
        borderBottom: 'solid 0.35em rgb(75, 195, 75)',
        marginBottom: '-0.30em'
      });
    },
    function() {
      $('#bouton1').css({
        color: 'white',
        borderBottom: 'none',
        marginBottom: 0
      });
    } 
  );

  $(".menu1").stop(false, false).animate({
    marginRight: "-300vw",
  }, 1000, function() {
    $(".container__menus").css("display", "none")
  });
  }

  $("#back-menu").animate({
    opacity: 0
  }, 200);

});



  







});



window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === "first") {
      // Redirige vers la page intermédiaire si on revient à l'état initial
      window.location.href = 'dfouillet.fr';
    }
  });

$("#contextAP").click(function(){
    window.location.replace("./articles/art1AP/art1GSB.html");
});

$("#").click(function(){
  window.location.replace("./articles/art1AP/art1GSB.html");
});

$("#stage1").click(function(){
  window.location.replace("/Stages/Stage-Éolane/art2Eolane.html");
});

$("#stage2").click(function(){
  window.location.replace("Stages/Mairie-Trélazé/art2MairieTrelaze.html");
});