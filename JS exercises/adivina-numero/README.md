## Instructions

1. Write a function that accepts a number and returns a boolean reflecting whether the input number is a prime or not.

2. Write a function that takes two numbers and returns an array of all prime numbers between that range. If you're not quite sure where to start, check out the Sieve of Eratosthenes, or the Sieve of Atkin on Wikipedia.

1. Generar un número aleatorio entre 1 y 100.
2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
3. Darle al jugador una forma de adivinar cuál es el número.
4. Una vez que se ha introducido en número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación, comprobar si el número es correcto.
6. i es correcto:
  - Mostrar un mensaje de felicitaciones.
  - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
  - Mostrar un control que permita al jugador volver a empezar el juego.
7. Si es incorrecto y al jugador todavía le quedan intentos:
  - Decirle al jugador que ha fallado.
  - Dejar que el jugador lo intente de nuevo.
  - Incrementa el número de intentos en 1.
8. Si el jugador falla y no le quedan turnos:
  - Decirle al jugador que el juego se ha terminado.
  - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
  - Mostrar un control que permita al jugador volver a empezar el juego.
9. Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.
