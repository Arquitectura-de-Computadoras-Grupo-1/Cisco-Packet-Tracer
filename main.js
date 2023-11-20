var monitorFuego = 0;
var rociadorE1 = 1;
var rociadorPasillo = 2;
var ventanaE1a = 3;
var alarma = 4;
var bocina = 5;
var puerta = 6;
var puertaE1a = 7;
var puertaE1b = 8;
var ventanaE1b = 9;

function setup(){
	
	pinMode(monitorFuego, OUTPUT);
	digitalWrite(monitorFuego, LOW);
	
	pinMode(puerta, OUTPUT);
	
	pinMode(alarma, OUTPUT);
	digitalWrite(alarma, LOW);
	
  	pinMode(bocina, OUTPUT);
  	digitalWrite(bocina, LOW);

  	pinMode(rociadorE1, OUTPUT);
  	digitalWrite(rociadorE1, LOW);
  	
  	pinMode(rociadorPasillo, OUTPUT);
  	digitalWrite(rociadorPasillo, LOW);
}

function loop(){
	
	if(digitalRead(monitorFuego) == HIGH){
		customWrite(rociadorE1, '1');
		customWrite(rociadorPasillo, '1');
		digitalWrite(alarma, HIGH);
		digitalWrite(bocina, HIGH);
		customWrite(puerta, '1');
		customWrite(puertaE1a, '1');
		customWrite(puertaE1b, '1');
		customWrite(ventanaE1a, '1');
		customWrite(ventanaE1b, '1');
		
	}else{
		customWrite(rociadorE1, '0');
		customWrite(rociadorPasillo, '0');
		digitalWrite(alarma, LOW);
		digitalWrite(bocina, LOW);
		customWrite(puerta, '0');
		customWrite(puertaE1a, '0');
		customWrite(puertaE1b, '0');
		customWrite(ventanaE1a, '0');
		customWrite(ventanaE1b, '0');
	}

}