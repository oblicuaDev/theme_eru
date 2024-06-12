const imageCache = {};
var readme = "";
const getImageFromCacheOrFetch = async (url) => {
  // Verifica si la imagen está en caché
  if (imageCache[url]) {
    return imageCache[url];
  }

  // Si no está en caché, descarga la imagen
  const response = await fetch(url);
  const imageBlob = await response.blob();

  // Crea una URL de objeto para la imagen descargada
  const imageUrl = URL.createObjectURL(imageBlob);

  // Almacena la URL de la imagen en caché
  imageCache[url] = imageUrl;
  return imageUrl;
};
// Crear el elemento del preloader
const preloaderElement = document.createElement("div");
preloaderElement.className = "preloader";
document.body.appendChild(preloaderElement);

// Esperar un momento y aplicar el efecto de fadeOut
setTimeout(() => {
  preloaderElement.classList.add("fadeOut");
}, 1800);
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document
    .querySelectorAll(".project-block .views-field-field-video-hover video")
    .forEach((video) => {
      video.removeAttribute("controls");
      video.addEventListener("mouseover", (e) => {
        e.target.play();
      });
      video.addEventListener("mouseleave", (e) => {
        e.target.pause();
        e.target.currentTime = 0;
      });
    });
  
  }, 5000);
  
  // if (document.querySelector(".container-fluid.news")) {
  //   // Paso 1: Selecciona el elemento a mover
  //   var elementoAMover = document.querySelector(
  //     ".paragraph.paragraph--type--video.paragraph--view-mode--default"
  //   );
  //   if (elementoAMover) {
  //     // Paso 2: Encuentra el elemento antes del cual quieres insertar el elemento seleccionado
  //     var elementoDestino = document.querySelector(".news__body");

  //     // Paso 3: Utiliza insertBefore() para mover el elemento
  //     elementoDestino.parentNode.insertBefore(elementoAMover, elementoDestino);
  //   }
  // }
  //Función Lengua de señas
  if ($(".news__field-videos iframe").length > 0) {
    var galleryblock = $(".news__field-gallery");
    var videoblock = $(".news__field-videos");

    videoblock.insertAfter(".news__field-gallery");
    galleryblock.insertAfter(".news__body");
  }
  if ($(".signlang").length > 0) {
    $(".signlang").css("position", "relative");
    $(".signlang").each(function () {
      var theposition = "bottom: 50%;";
      if ($(this).hasClass("sldown")) {
        theposition = "top: 100%;";
      }
      if ($(this).hasClass("topper")) {
        theleft = "left: -50%;";
      } else {
        theleft = "left: 100%;";
      }
      $(this).html(
        $(this).html() +
          '<video autoplay loop muted style="display:none; position: absolute; ' +
          theposition +
          " " +
          theleft +
          ' width: 120px !important; height: 120px !important;"><source src="" type="video/mp4" ></video>'
      );

      $(this).hover(function () {
        $(this).find("video").show();
      });
      $(this).mouseleave(function () {
        $(this).find("video").hide();
      });
      if ($(this).hasClass("intormacion9")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/9-informacion-entidad.mp4"
          );
      }
      if ($(this).hasClass("atencion")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/atencion.mp4"
          );
      }
      if ($(this).hasClass("participa2") || $(this).hasClass("participa14")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/participa2.mp4"
          );
      }
      if ($(this).hasClass("transparencia")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/transparencia.mp4"
          );
      }
      if ($(this).hasClass("participa") || $(this).hasClass("participa14")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/14-participa.mp4"
          );
      }
      if ($(this).hasClass("normatividad10")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/10%20Normatividad%203.mp4"
          );
      }
      if ($(this).hasClass("contratacion11")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/11%20Contrataci%C3%B3n%203.mp4"
          );
      }
      if ($(this).hasClass("presupuesto12")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/12%20Planeaci%C3%B3n%20presup%203.mp4"
          );
      }
      if ($(this).hasClass("tramites13")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/13%20Tramites%20y%20Servicios%203.mp4"
          );
      }
      if ($(this).hasClass("datosabiertos3")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/15%20Datos%20abiertos%203.mp4"
          );
      }
      if ($(this).hasClass("info17")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/16%20Info%20Especific%20Grupo%20Int%203.mp4"
          );
      }
      if ($(this).hasClass("info16")) {
        $(this)
          .find("source")
          .attr(
            "src",
            "https://renobo.com.co/sites/default/files/videos/17Reporte%20Info%20Especif%203.mp4"
          );
      }
    });
  }
  //Función lectura automática noticias
  if ($(".container.news").length > 0) {
    var noticia = $(".container.news .row .news__body");
    //console.log(noticia);
    var paragraphs = noticia.find("p");
    var playerSpace = noticia.find(".date-social");
    var originalContent = "";
    paragraphs.each(function () {
      //console.log($(this).text());
      originalContent += $(this).text();
    });
    readme = voicereplace(originalContent);
    createReader(playerSpace, readme);

    //console.log("Noticia Single");
  }
  function createReader(space, readme) {
    var playbtn = "https://renobo.com.co/sites/default/files/2024-02/play.gif";
    var pausebtn =
      "https://renobo.com.co/sites/default/files/2024-02/pause.gif";

    var str =
      '<div id="renoboReader"><a href="javascript:;" id="readerPlay" style="display:block;"><img src="' +
      playbtn +
      '"</a><a href="javascript:;" id="readerPause" style="display:none;"><img src="' +
      pausebtn +
      '"</a></div>';
    console.log(space);

    // console.log(space.apend(str));
    //console.log("ready");
    //console.log(str);
    $(".date-social").html($(".date-social").html() + str);

    $("#readerPlay").click(function () {
      $(this).hide();
      $("#readerPause").show();
      responsiveVoice.speak(readme, "Spanish Latin American Male");
    });
    $("#readerPause").click(function () {
      $(this).hide();
      $("#readerPlay").show();
      responsiveVoice.pause();
    });
  }
  function voicereplace(text) {
    text = text.replace(new RegExp("RenoBo", "g"), "Renobo");
    text = text.replace(new RegExp("No.", "g"), " ");
    text = text.replace(new RegExp("Bogotá D.C.", "g"), "Bogotá DC");
    text = text.replace(/\(/g, " ");
    text = text.replace(/\)/g, " ");
    //console.log("Transformed text");
    //console.log(text);
    var newtext = text;
    return newtext;
  }
  if (document.querySelector(".col-md-6.float-left.col-12.block")) {
    document
      .querySelector(".col-md-6.float-left.col-12.block")
      .parentNode.parentNode.classList.remove("float-left");
  }
  if (window.innerWidth > 768) {
    // Obtener los elementos
    const logoElement = document.querySelector(".block--logo");
    const menuElement = document.querySelector(".block--theme-eru-main-menu");

    // Mover el primer elemento dentro del segundo elemento
    menuElement.appendChild(logoElement);
  }
  // Función para acortar el texto y agregar el botón "Leer más"
  function acortarTexto() {
    var divs = document.querySelectorAll(".project__body .field__item");

    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      var contenido = div.innerHTML;
      var longitudMaxima = 3854; // Longitud máxima del texto acortado

      if (contenido.length > longitudMaxima) {
        var textoAcortado = contenido.substring(0, longitudMaxima) + "...";
        var textoCompleto = textoAcortado;
        var leerMas = '<a href="#" class="leer-mas">Leer más</a>';

        div.innerHTML = textoCompleto + leerMas;
        div.setAttribute("data-contenido-original", contenido); // Guardar el contenido original en un atributo de datos
      }
    }
  }

  // Función para mostrar el texto completo cuando se hace clic en "Leer más"
  function mostrarTextoCompleto(event) {
    event.preventDefault();
    var textoAcortado = this.parentNode.parentNode;
    var contenidoOriginal = this.parentNode.parentNode.getAttribute(
      "data-contenido-original"
    ); // Obtener el contenido original del atributo de datos
    textoAcortado.innerHTML = contenidoOriginal;
    this.style.display = "none";
  }

  // Agregar el evento click al botón "Leer más"
  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("leer-mas")) {
      mostrarTextoCompleto.call(event.target, event);
    }
  });

  document.querySelectorAll(".oblicua-redes li a").forEach((el) => {
    let text = el.text;
    let imageUrl1 = `http://files.renobo.com.co/sites/default/files/2023-05/${text}.png`;
    let imageUrl2 = `http://files.renobo.com.co/sites/default/files/2024-01/${text}.png`;

    let img = new Image();

    img.onload = function () {
      // La imagen se cargó correctamente desde la primera ruta
      el.innerHTML = `<img alt="Línea de atención" src="${imageUrl1}" />`;
    };

    img.onerror = function () {
      // La imagen no se cargó desde la primera ruta, intenta la segunda ruta
      el.innerHTML = `<img alt="Línea de atención" src="${imageUrl2}" />`;
    };

    img.src = imageUrl1;
  });
  // Obtén todos los elementos de la página
  var elementos = document.getElementsByTagName("*");

  // Define el color original y el color de reemplazo
  var colorOriginal = "#006b60";
  var colorReemplazo = "#003031";

  // Función para convertir un color en formato rgba o rgb a hexadecimal
  function convertirARGBAaHex(color) {
    var rgbaValores = color.match(/\d+/g);
    var r = parseInt(rgbaValores[0]);
    var g = parseInt(rgbaValores[1]);
    var b = parseInt(rgbaValores[2]);

    var hexadecimal =
      "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
    return hexadecimal;
  }

  // Recorre todos los elementos y verifica si tienen el color original
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var estilo = getComputedStyle(elemento);

    // Verifica si el color de fondo o el color de texto coinciden con el color original
    var colorFondo = estilo.backgroundColor;
    var colorTexto = estilo.color;

    if (convertirARGBAaHex(colorFondo) === colorOriginal) {
      elemento.style.backgroundColor = colorReemplazo;
    }

    if (convertirARGBAaHex(colorTexto) === colorOriginal) {
      elemento.style.color = colorReemplazo;
    }
  }
  if (
    document.querySelector(
      "#description .paragraph--type--general-data-.paragraph--view-mode--default .container.row .dato-general.mb-4"
    )
  ) {
    let arrayIcons = [
      { folder: "2023-05", iconclass: "comercio-icono", iconimg: "comercio" },
      {
        folder: "2023-05",
        iconclass: "deporte-icono",
        iconimg: "cancha-multiple",
      },
      {
        folder: "2023-05",
        iconclass: "espacio-publico-icono",
        iconimg: "espacio-publico",
      },
      { folder: "2023-05", iconclass: "inversion-icono", iconimg: "inversion" },
      {
        folder: "2023-05",
        iconclass: "recreacion-icono",
        iconimg: "terraza-recreativa",
      },
      {
        folder: "2023-05",
        iconclass: "transporte-icono",
        iconimg: "acceso-transporte",
      },
      { folder: "2023-05", iconclass: "vias-icono", iconimg: "malla-vial" },
      { folder: "2023-05", iconclass: "vivienda-icono", iconimg: "viviendas" },
      {
        folder: "2023-05",
        iconclass: "area-construida-icono",
        iconimg: "area-construir",
      },
      {
        folder: "2023-05",
        iconclass: "area-terreno-icono",
        iconimg: "area-terreno",
      },

      {
        folder: "2023-05",
        iconclass: "parques-icono",
        iconimg: "juegos-accesible-incluyente",
      },
      { folder: "2023-05", iconclass: "agua-icono", iconimg: "" },
      { folder: "2023-05", iconclass: "arte-icono", iconimg: "" },
      { folder: "2023-05", iconclass: "cultura-icono", iconimg: "" },
      {
        folder: "2023-05",
        iconclass: "educacion-icono",
        iconimg: "espacios-academicos",
      },
      {
        folder: "2023-05",
        iconclass: "etapas-icono",
        iconimg: "predios-intervenir",
      },
      { folder: "2023-05", iconclass: "ubicacion-icono", iconimg: "" },
      {
        folder: "2023-05",
        iconclass: "area-ampliacion-icono",
        iconimg: "area-ampliacion",
      },
      {
        folder: "2023-05",
        iconclass: "area-construir-icono",
        iconimg: "area-construir",
      },
      {
        folder: "2023-05",
        iconclass: "area-disenada-icono",
        iconimg: "area-disenada",
      },
      {
        folder: "2023-05",
        iconclass: "area-patrimonio-icono",
        iconimg: "area-patrimonio",
      },
      {
        folder: "2023-05",
        iconclass: "area-terreno-icono",
        iconimg: "area-terreno",
      },
      { folder: "2023-05", iconclass: "aulas-icono", iconimg: "aulas" },
      {
        folder: "2023-05",
        iconclass: "bicicleteros-icono",
        iconimg: "bicicleteros",
      },
      {
        folder: "2023-05",
        iconclass: "carga-descarga-icono",
        iconimg: "carga-descarga",
      },
      {
        folder: "2023-05",
        iconclass: "comercio-servicios-icono",
        iconimg: "comercio-servicios",
      },
      {
        folder: "2023-05",
        iconclass: "edificabilidad-proyectada-icono",
        iconimg: "edificabilidad-proyectada",
      },
      {
        folder: "2023-05",
        iconclass: "edificaciones-servicio-dotacionales-icono",
        iconimg: "edificaciones-servicio-dotacionales",
      },
      {
        folder: "2023-05",
        iconclass: "estudiantes-icono",
        iconimg: "estudiantes",
      },
      { folder: "2023-05", iconclass: "hectareas-icono", iconimg: "hectareas" },
      {
        folder: "2023-05",
        iconclass: "laboratorios-doctorado-icono",
        iconimg: "laboratorios-doctorado",
      },
      {
        folder: "2023-05",
        iconclass: "laboratorios-icono",
        iconimg: "laboratorios",
      },
      { folder: "2023-05", iconclass: "manzana-icono", iconimg: "manzana_0" },
      { folder: "2023-05", iconclass: "nuevo-cad-icono", iconimg: "nuevo-cad" },
      {
        folder: "2023-05",
        iconclass: "observatorio-icono",
        iconimg: "observatorio",
      },
      {
        folder: "2023-05",
        iconclass: "parqueaderos-icono",
        iconimg: "parqueaderos",
      },
      {
        folder: "2023-05",
        iconclass: "poblacion-icono",
        iconimg: "poblacion-proyectada",
      },
      {
        folder: "2023-05",
        iconclass: "predios-intervenir-icono",
        iconimg: "predios-intervenir",
      },
      {
        folder: "2023-05",
        iconclass: "salas-especializadas-icono",
        iconimg: "salas-especializadas",
      },
      {
        folder: "2023-05",
        iconclass: "salas-software-icono",
        iconimg: "salas-software",
      },
      { folder: "2023-05", iconclass: "servicios-icono", iconimg: "servicios" },
      {
        folder: "2023-05",
        iconclass: "unidades-actuacion-urbanistica-icono",
        iconimg: "unidades-actuacion-urbanistica",
      },
      {
        folder: "2023-05",
        iconclass: "equipamientos-icono",
        iconimg: "Equipamientos",
      },
      {
        folder: "2023-05",
        iconclass: "parques-icono",
        iconimg: "Parques",
      },
      {
        folder: "2023-05",
        iconclass: "zonas-verdes-icono",
        iconimg: "Zonas-verdes",
      },
      {
        folder: "2023-05",
        iconclass: "vivienda-icono",
        iconimg: "Vivienda",
      },
      { iconclass: "area-icono", iconimg: "Área", folder: "2023-10" },
      {
        folder: "2023-05",
        iconclass: "vivienda-comercio-y-servicios-icono",
        iconimg: "Vivienda-comercio-y-servicios",
      },
    ];
    document
      .querySelectorAll(
        "#description .paragraph--type--general-data-.paragraph--view-mode--default .container.row .dato-general.mb-4"
      )
      .forEach((el, i) => {
        let founded = arrayIcons.find(
          (el) =>
            el.iconclass ==
            document.querySelectorAll(".dato-general i")[i].classList[0]
        );

        el.innerHTML += `<img src="https://files.renobo.com.co/sites/default/files/${founded.folder}/${founded.iconimg}.png" alt="icono informacion adicional" class="icono-img-dato" />`;
      });
  }
  acortarTexto();
  // Obtén la etiqueta existente
  var icono = document.querySelector(".fas.fa-chevron-circle-right");
  var icono2 = document.querySelector(".fas.fa-chevron-circle-left");
  if (icono && icono2) {
    // Crea un nuevo elemento de imagen
    var imagen = document.createElement("img");
    var imagen2 = document.createElement("img");

    // Establece el atributo "src" de la imagen con la URL de la imagen que deseas usar
    imagen.src =
      "https://files.renobo.com.co/sites/default/files/2023-05/arow-right.png";
    imagen2.src =
      "https://files.renobo.com.co/sites/default/files/2023-05/arrow-left.png";
    imagen.classList.add("multimedia-arow-right");
    imagen2.classList.add("multimedia-arrow-left");
    // Reemplaza la etiqueta existente con la imagen
    icono.parentNode.replaceChild(imagen, icono);
    icono2.parentNode.replaceChild(imagen2, icono2);
  }
  if (
    document.querySelector("#photos") &&
    document.querySelector(
      ".paragraph.paragraph--type--videos.paragraph--view-mode--default video"
    )
  ) {
    document
      .querySelector("#photos")
      .appendChild(
        document.querySelector(
          ".paragraph.paragraph--type--videos.paragraph--view-mode--default video"
        )
      );
  }
});
