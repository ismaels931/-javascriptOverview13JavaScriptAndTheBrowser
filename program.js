console.log("Sin navegadores web no existiría JS.");
console.log("Internet: ordenadores de todo el mundo conectados a una red. Cada ordenador envía bits a otro ordenador o recibe bits");
console.log("que proceden de otro ordenador. De este modo se produce una comunicación entre ordenadores pero cada ordenador debe saber");
console.log("que representan los bits. En consecuencia, existen los protocolos de red, que describe una forma de comunicación a través");
console.log("de la red. Existen protocolos para enviar un correo electrónico, compartir archivos... e.g. el protocolo de transferencia");
console.log("de hipertexto (HTTP) es un protocolo que sirve para recuperar páginas web. La solicitud del recurso (página web) debe empezar");
console.log("con una línea como la que se muestra abajo, nombrando el recurso y la versión del protocolo que se está tratando de usar:");
console.log("pg. 217");

console.log();

console.log("Garantizar que la secuencia de bits se envian y llegan en el orden correcto es un problema complejo. El protocolo de");
console.log("de control de transmisión (TCP) aborda este problema. La mayoría de la comunicaciones en Internet se basan en este protocolo.");
console.log("El protocolo TCP es una abstracción de la red que funciona de la siguiente manera: una computadora se mantiene a la"); 
console.log("espera (o a la escucha) y otras");
console.log("computadoras empiezan a hablar con ella. Para poder establecer diferentes tipos de comunicaciones, cada oyente tiene un");
console.log("número asociado (puerto) e.g. cuando enviamos un correo electrónico, usamos el protocolo SMTP, que a su vez utiliza el");
console.log("puerto 25. La computadora que escucha se llama servidor y la que se conecta se llama cliente.");

console.log();

console.log("La World Wide Web (que no debe confundirse con Internet en su conjunto), es un conjunto de protocolos y formatos que nos");
console.log("permiten visitar páginas web con un navegador. Para formar parte de la web, todo lo que hay que hacer es conectar una");
console.log("máquina a Internet y hacer que se ponga a la escucha en el puerto 80 con el protocolo HTTP para que otras máquinas puedan");
console.log("pedirle documentos. Cada documento en la web tiene asignado un Localizador Uniforme de Recursos (URL) e.g. pg. 218");
console.log("Cada URL tiene asignada un dirección IP.");

console.log();

console.log("HTML, que significa Lenguaje de Marcado de Hipertexto, es el formato de documento utilizado para las páginas web. Un");
console.log("documento HTML contiene texto, así como etiquetas que le dan estructura, describiendo cosas como enlaces, párrafos y");
console.log("encabezados e.g. pg. 219 que es interpretado por el navegador.");

console.log();

console.log("Las etiquetas, envueltas entre corchetes angulares, proporcionan información sobre la estructura del documento. El");
console.log("documento comienza con <!Doctype html> que le dice al navegador que lo interprete como una página con HTML moderno.");
console.log("Estos documentos tienen un encabezado y un cuerpo. El encabezado contiene información sobre el documento y el");
console.log("cuerpo contiene el documento per se.");

console.log();

console.log("La etiqueta más importante de este libro es <script> ya que permite incluir código JS en un documento HTML. Incluir");
console.log("programas grandes directamente en documentos HTML no es práctico. La etiqueta <script> tiene el atributo src que");
console.log("permite obtener un archivo de texto que contiene un programa JS, de una URL. También puede cargar módulos mediante");
console.log("el atributo type = 'module'. Algunos atributos pueden contener un programa JS e.g. index.html");

