# Mozaïk Navbar widgets

##  Navbar — Navbar

> Met en place une barre de navigation permettant de changer de pages d'écrire un message (en se connectant) ou encore voir les détails de versions de la solution

### parameters

key        | required | description
-----------|----------|----------------------------------------------------
`id`       | yes      | *Id correspondant au nom du message publié dans le fichier config de l'application*


### usage

```javascript
{
  type: 'navbar.navbar',
  id : 'myMsg',
  columns: 6, rows: 0.15,
  x: 0, y: 3
}
```

> Ne pas oublier de mettre un objet message sous forme d'objet dans le fichiers de configurations

```javascript
messages : {
  msg1 : '',
  msg2 : ''
}
```
