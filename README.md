# firebase-citas-medicas

Es una aplicación de ejemplo basada en IONIC v6.0 y Firebase que nos permite realizar el CRUD de una colección de documentos de Firestore.

- El objetivo de la pequeña aplicación es crear, editar, listar y eliminar información de citas médicas (nombre de paciente, correo electrónico y número de celular)

El archivo enviroment.ts no ha sido cargado ya que en el mismo se debe cargar la configuración del proyecto de Firebase, ejemplo:

```
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "XXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXX"
  }
};
```

Además, se ha detectado un error en el modulo de firebase para angular, cuando se tiene las siguientes versiones:

- typescript@4.8.4
- firebase@9.15.0
- @angular/fire@7.5.0

Dicho error debe ser corregido en el archivo *node_modules/@angular/fire/compat/firestore/interfaces.d.ts* agregando las asociones genericas <T> en donde se presente los errores.

